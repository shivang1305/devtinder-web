# DevTinder Web

A modern, responsive web application for connecting developers. Built with React, TypeScript, and Tailwind CSS, this is the frontend client for the DevTinder platform.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## ✨ Features

- **User Authentication**: Secure login and signup functionality
- **Email Verification**: Email-based account verification system
- **Password Recovery**: Forgot password flow with secure token-based reset
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Full TypeScript support for better development experience
- **API Integration**: Axios-based HTTP client with interceptors for auth, error handling, and retry logic
- **Modern UI Components**: Built with Radix UI primitives and custom components
- **Hot Module Replacement**: Vite's HMR for instant updates during development
- **ESLint Configuration**: Code quality checks and consistent code style

## 🛠 Tech Stack

### Frontend

- **React** 19.2.4 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 8.0.1 - Build tool and dev server
- **React Router** 7.14.0 - Client-side routing
- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **Radix UI** - Unstyled accessible components
- **Lucide React** - Icon library
- **Axios** 1.15.2 - HTTP client

### Development Tools

- **ESLint** - Code quality and linting
- **TypeScript ESLint** - TypeScript-aware linting
- **Tailwind CSS Vite Plugin** - Optimized Tailwind processing

### Backend

- See [DevTinder API Repository](#api-documentation) for backend implementation

## 📁 Project Structure

```
devtinder-web/
├── public/                      # Static assets
├── src/
│   ├── api/                     # API client configuration
│   │   ├── client.ts            # Axios instance setup
│   │   ├── config.ts            # API configuration
│   │   └── interceptors/        # Request/response interceptors
│   │       ├── auth.interceptor.ts      # Handle authentication tokens
│   │       ├── error.interceptor.ts     # Centralized error handling
│   │       └── retry.interceptor.ts     # Automatic retry logic
│   ├── components/              # Reusable React components
│   │   ├── Login.tsx            # Login form component
│   │   ├── Signup.tsx           # Signup form component
│   │   └── ui/                  # Base UI components
│   │       ├── button.tsx       # Button component
│   │       ├── button.variants.ts # Button style variants
│   │       ├── input.tsx        # Input component
│   │       ├── label.tsx        # Label component
│   │       └── utils.ts         # UI utility functions
│   ├── pages/                   # Page-level components
│   │   ├── Home.tsx             # Home page layout
│   │   ├── EmailVerification.tsx # Email verification page
│   │   └── ForgotPassword.tsx    # Forgot password page
│   ├── utils/
│   │   └── helper.ts            # Utility functions
│   ├── App.tsx                  # Main App component with routing
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── eslint.config.js             # ESLint configuration
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # TypeScript app-specific config
├── tsconfig.node.json           # TypeScript Node config
├── package.json                 # Project metadata and dependencies
├── index.html                   # HTML entry point
└── README.md                    # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 or higher) or **Yarn** (v1.22.0 or higher)
- **Git** - [Download](https://git-scm.com/)

Verify installation:

```bash
node --version
npm --version
git --version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devtinder-web.git
cd devtinder-web
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Install Backend API Repository

Clone and set up the backend API repository:

```bash
# In a separate directory
git clone https://github.com/yourusername/devtinder-api.git
cd devtinder-api

# Follow the instructions in the backend repository's README
npm install
```

**Backend Repository**: [DevTinder API](https://github.com/yourusername/devtinder-api)

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following variables:

```env
# Backend API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Optional: API timeout (in milliseconds)
VITE_API_TIMEOUT=10000

# Optional: Environment
VITE_ENVIRONMENT=development
```

### API Configuration

The API client is configured in [src/api/config.ts](src/api/config.ts):

```typescript
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
export const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000;
```

### Interceptors

The application includes three important interceptors:

1. **Authentication Interceptor** ([src/api/interceptors/auth.interceptor.ts](src/api/interceptors/auth.interceptor.ts))
   - Automatically adds authentication tokens to requests
   - Handles token refresh on 401 responses

2. **Error Interceptor** ([src/api/interceptors/error.interceptor.ts](src/api/interceptors/error.interceptor.ts))
   - Centralized error handling
   - User-friendly error messages

3. **Retry Interceptor** ([src/api/interceptors/retry.interceptor.ts](src/api/interceptors/retry.interceptor.ts))
   - Automatic retry logic for failed requests
   - Configurable retry attempts and delays

## 🏃 Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

**Features:**

- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Source maps for debugging

### Environment Setup for Local Development

Ensure your backend API is running:

```bash
# In the devtinder-api directory
npm run dev
```

By default, the frontend expects the backend at `http://localhost:5000/api`.

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint checks
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

## 🔨 Building for Production

### Build the Application

```bash
npm run build
```

This command:

- Compiles TypeScript to JavaScript
- Bundles all assets using Vite
- Optimizes and minifies the code
- Generates a `dist/` folder with production-ready files

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

This serves the `dist/` folder at `http://localhost:4173`.

### Deployment

The `dist/` folder can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drop the `dist/` folder or connect your repo
- **AWS S3 + CloudFront**: Upload `dist/` contents to S3
- **Traditional Server**: Copy `dist/` contents to your web server's public directory

**Important**: Ensure your backend API URL is correctly configured in the environment variables for your deployment environment.

## 🔌 API Documentation

The frontend communicates with the DevTinder API backend. For complete API documentation, including endpoints, request/response formats, and authentication details, please refer to the backend repository:

**[DevTinder API Documentation](https://github.com/yourusername/devtinder-api)**

### Key API Endpoints Used:

- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `POST /auth/verify-email` - Email verification
- `POST /auth/forgot-password` - Initiate password reset
- `POST /auth/reset-password` - Reset password with token

For detailed endpoint specifications, request/response examples, and error codes, please see the backend API documentation.

## 🔐 Environment Variables

### Available Environment Variables

```env
# Required
VITE_API_BASE_URL=http://localhost:5000/api

# Optional with defaults
VITE_API_TIMEOUT=10000
VITE_ENVIRONMENT=development
```

### Using Environment Variables in Code

```typescript
import.meta.env.VITE_API_BASE_URL;
import.meta.env.VITE_API_TIMEOUT;
import.meta.env.VITE_ENVIRONMENT;
```

**Note**: Only variables prefixed with `VITE_` are exposed to the frontend for security reasons.

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check your terminal output for the actual URL.

### API Connection Issues

**Problem**: Cannot connect to the backend API

**Solution**:

1. Verify the backend is running: `npm run dev` in the backend directory
2. Check `VITE_API_BASE_URL` in your `.env` file
3. Ensure there are no CORS issues (backend should allow requests from `localhost:5173`)
4. Check browser console for detailed error messages

### Build Failures

**Problem**: `npm run build` fails

**Solution**:

1. Clear node_modules: `rm -rf node_modules && npm install`
2. Ensure Node.js version is v16+: `node --version`
3. Check for TypeScript errors: `npm run lint`
4. Delete cache: `rm -rf .vite`

### Hot Module Replacement Not Working

**Problem**: Changes aren't reflecting in the browser

**Solution**:

1. Hard refresh the browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Restart the dev server: `npm run dev`
3. Check that files are being saved properly

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add your feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Code Standards

- Follow the existing code style and naming conventions
- Use TypeScript for all new code
- Ensure all TypeScript types are properly defined
- Run `npm run lint` before committing
- Write meaningful commit messages
- Keep components modular and reusable

### Development Workflow

1. Create a feature branch from `main`
2. Keep commits atomic and well-described
3. Test your changes thoroughly
4. Ensure no ESLint warnings
5. Submit a PR with a clear description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For issues, questions, or suggestions:

- **Issues**: Create an issue in the [GitHub repository](https://github.com/yourusername/devtinder-web/issues)
- **Email**: support@devtinder.com
- **Documentation**: [Wiki](https://github.com/yourusername/devtinder-web/wiki)

### Related Repositories

- [DevTinder API Backend](https://github.com/yourusername/devtinder-api)
- [DevTinder Documentation](https://github.com/yourusername/devtinder-docs)

---

**Happy Coding! 🚀**
