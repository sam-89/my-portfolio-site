import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Resume request endpoint for local development
app.post('/api/resume-request', async (req, res) => {
  try {
    const { name, email, company, position } = req.body;

    // Validate required fields
    if (!name || !email || !company) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Resume download request received:', { name, email, company, position });
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Set EMAIL_USER and EMAIL_PASS in .env file for email functionality.');
      // For testing purposes, we'll still consider this a success
      return res.status(200).json({ 
        message: 'Resume download request processed (email sending skipped - credentials not configured)',
        debug: true
      });
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using gmail service for local development
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the portfolio owner
    const ownerEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself in local development
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
      from: process.env.EMAIL_USER,
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

    console.log('Resume request emails sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending resume request email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: error.message || 'Unknown error'
    });
  }
});

// Contact message endpoint for local development
app.post('/api/contact-message', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Contact message received:', { name, email });
    console.log('Message content:', message);
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Set EMAIL_USER and EMAIL_PASS in .env file for email functionality.');
      // For testing purposes, we'll still consider this a success
      return res.status(200).json({ 
        message: 'Contact message processed (email sending skipped - credentials not configured)',
        debug: true
      });
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using gmail service for local development
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the portfolio owner
    const ownerEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself in local development
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
      from: process.env.EMAIL_USER,
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

    console.log('Contact message emails sent successfully');
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact message email:', error);
    return res.status(500).json({ 
      message: 'Failed to send message',
      error: error.message || 'Unknown error'
    });
  }
});

// For debugging purposes - a simple test endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Local server is running correctly' });
});

// Serve static files from the public directory (if needed)
app.use(express.static('public'));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Local development server running on port ${PORT}`);
  console.log(`Resume download endpoint available at: http://localhost:${PORT}/api/resume-request`);
  console.log(`Test endpoint available at: http://localhost:${PORT}/api/test`);
});
