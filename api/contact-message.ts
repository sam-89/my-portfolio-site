// Using import type to avoid runtime imports
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Using dynamic import for nodemailer to avoid ES module issues
const getNodemailer = async () => {
  return await import('nodemailer').then(module => module.default || module);
};

// Handler function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Processing contact message:', { name, email });

    // Get nodemailer and create transporter
    const nodemailer = await getNodemailer();
    
    // Log email configuration for debugging (excluding password)
    console.log('Email configuration:', {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'false' ? false : true,
    });
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'false' ? false : true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    // Email to the portfolio owner
    const ownerEmail = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Contact Form Message',
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    // Email to the sender (confirmation)
    const senderEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Sumanta Kumar Patel</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerEmail),
      transporter.sendMail(senderEmail),
    ]);

    console.log('Contact emails sent successfully');
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact message:', error);
    return res.status(500).json({ 
      message: 'Failed to send message',
      error: error instanceof Error ? error.message : String(error)
    });
  }
}
