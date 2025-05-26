# My Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my work as an AI Engineer and Technologist, featuring smooth animations, interactive components, a clean design, and interactive form functionality for resume downloads and contact messages.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🌙 Dark mode support
- 🎯 Interactive components
- 🚀 Fast performance with Vite
- 📝 TypeScript for better development experience
- 📧 Email notifications for resume downloads and contact form submissions
- 💬 Interactive contact form with validation and email notifications
- 📄 Resume download with lead capture form
- 🔒 Secure API endpoints with Vercel serverless functions

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Router](https://reactrouter.com/) - Routing
- [React Query](https://tanstack.com/query/latest) - Data Fetching
- [Three.js](https://threejs.org/) - 3D Graphics
- [Vercel](https://vercel.com/) - Deployment & Serverless Functions
- [Nodemailer](https://nodemailer.com/) - Email Notifications

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Vercel CLI (`npm i -g vercel`)

### Installation

1. Clone the repository
```bash
git clone https://github.com/sam-89/my-portfolio-site.git
cd my-portfolio-site
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with:
```bash
# For local development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# For Vercel deployment
# These will be set in the Vercel dashboard
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=465
# SMTP_SECURE=true
# SMTP_USER=your-email@gmail.com
# SMTP_PASSWORD=your-app-password
# NOTIFICATION_EMAIL=your-email@gmail.com
```

4. Start the development servers

   **To run with full functionality (resume download & contact form):**
   ```bash
   # Terminal 1: Start the local API server for API functionality
   node local-server.js
   
   # Terminal 2: Start the frontend application
   npm run dev:vite
   ```

   **Alternative (without API functionality):**
   ```bash
   # For frontend-only development (resume download & contact form will not work)
   npm run dev:vite
   ```
   
   **Restarting the local server after code changes:**
   If you make changes to `local-server.js`, you need to restart the server:
   ```bash
   # Press Ctrl+C in Terminal 1 to stop the server
   # Then start it again
   node local-server.js
   ```
   
   **Alternative method to restart the server:**
   ```bash
   # Find the process ID (PID)
   ps aux | grep "node local-server.js" | grep -v grep
   
   # Kill the process (replace 12345 with the actual PID)
   kill 12345
   
   # Start the server again
   node local-server.js
   ```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📦 Available Scripts

- `node local-server.js` - Start the local API server for resume download & contact form functionality
- `npm run dev:vite` - Start the Vite development server (frontend only)
- `npm run dev` - Start Vercel development server (may have issues with local resume download functionality)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
my-portfolio-site/
├── api/                # Vercel serverless functions
│   ├── resume-request.ts   # Resume download API
│   ├── contact-message.ts  # Contact form API
│   └── tsconfig.json       # API-specific TypeScript config
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # React components
│   │   ├── Contact.tsx        # Contact form component
│   │   ├── Resume.tsx         # Resume section component
│   │   └── ResumeButton.tsx   # Resume download button/modal
│   ├── lib/          # Utility functions
│   │   └── emailService.ts    # Email API client
│   └── App.tsx        # Root component
├── local-server.js    # Local development server for API endpoints
├── vercel.json        # Vercel deployment configuration
├── index.html         # Entry HTML
└── package.json       # Dependencies and scripts
```

## 🔧 Environment Variables

### For Local Development

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app-specific password

To set up Gmail:
1. Enable 2-factor authentication
2. Generate an app-specific password
3. Use this password as `EMAIL_PASS`

### For Vercel Deployment

Set these in your Vercel project settings:

- `SMTP_HOST`: SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (e.g., 465 for SSL or 587 for TLS)
- `SMTP_SECURE`: Whether to use SSL (true for port 465, false for 587)
- `SMTP_USER`: Your email address
- `SMTP_PASSWORD`: Your app-specific password
- `NOTIFICATION_EMAIL`: Email to receive notifications

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sam-89/my-portfolio-site/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sumanta Kumar Patel**
- GitHub: [@sam-89](https://github.com/sam-89)
- Portfolio: [https://www.sumantakumarpatel.com]

---

⭐️ If you like this project, please give it a star on GitHub!
