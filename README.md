# My Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my work as an AI Engineer and Technologist, featuring smooth animations, interactive components, and a clean design.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🌙 Dark mode support
- 🎯 Interactive components
- 🚀 Fast performance with Vite
- 📝 TypeScript for better development experience
- 📧 Email notifications for resume downloads
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
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Start the development servers

   **To run with the resume download functionality:**
   ```bash
   # Terminal 1: Start the local API server for resume download functionality
   node local-server.js
   
   # Terminal 2: Start the frontend application
   npm run dev:vite
   ```

   **Alternative (without resume download form functionality):**
   ```bash
   # For frontend-only development (resume download will not work)
   npm run dev:vite
   ```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📦 Available Scripts

- `node local-server.js` - Start the local API server for resume download functionality
- `npm run dev:vite` - Start the Vite development server (frontend only)
- `npm run dev` - Start Vercel development server (may have issues with local resume download functionality)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
my-portfolio-site/
├── api/            # Vercel serverless functions
│   └── resume-request.ts
├── public/         # Static assets
├── src/           # Source files
│   ├── components/ # React components
│   ├── lib/       # Utility functions
│   └── App.tsx    # Root component
├── index.html     # Entry HTML
└── package.json   # Dependencies and scripts
```

## 🔧 Environment Variables

The following environment variables are required:

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app-specific password

To set up Gmail:
1. Enable 2-factor authentication
2. Generate an app-specific password
3. Use this password as `EMAIL_PASS`

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
