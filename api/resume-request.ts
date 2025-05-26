import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, position } = req.body;

    // Validate required fields
    if (!name || !email || !company) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Processing resume download request:', { name, email, company });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to the portfolio owner
    const ownerEmail = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Resume Download Request',
      html: `
        <h2>New Resume Download Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Position:</strong> ${position || 'Not specified'}</p>
      `,
    };

    // Email to the downloader
    const downloaderEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for downloading my resume',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for downloading my resume. I appreciate your interest in my profile.</p>
        <p>If you have any questions or would like to discuss potential opportunities, please don't hesitate to reach out.</p>
        <br>
        <p>Best regards,</p>
        <p>Sumanta Kumar Patel</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerEmail),
      transporter.sendMail(downloaderEmail),
    ]);

    console.log('Emails sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : String(error)
    });
  }
}