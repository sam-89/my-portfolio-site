import express from 'express';
import type { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Types for request bodies
interface EmailRequestBody {
  subject: string;
  text: string;
}

interface ResumeRequestBody {
  name: string;
  email: string;
  company: string;
  position?: string;
}

// Define typed request handlers
const sendEmailHandler: RequestHandler = async (req, res) => {
  try {
    const { subject, text } = req.body as EmailRequestBody;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      text,
    });

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Resume request handler
const resumeRequestHandler: RequestHandler = async (req, res) => {
  try {
    const { name, email, company, position } = req.body as ResumeRequestBody;

    // Validate required fields
    if (!name || !email || !company) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    // Log the request (helpful for debugging)
    console.log('Resume download request received:', { name, email, company, position });
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Set EMAIL_USER and EMAIL_PASS in .env file for email functionality.');
      // For testing purposes, we'll still consider this a success
      res.status(200).json({ 
        message: 'Resume download request processed (email sending skipped - credentials not configured)',
        debug: true
      });
      return;
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending resume request email:', error);
    res.status(500).json({ 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Register the route handlers
app.post('/api/send-email', sendEmailHandler);
app.post('/api/resume-request', resumeRequestHandler);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Development server running on port ${PORT}`);
  console.log(`Resume download endpoint available at: http://localhost:${PORT}/api/resume-request`);
}); 