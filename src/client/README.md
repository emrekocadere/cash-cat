# CashCat Client

Modern spending tracking application frontend built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - Global state management
- **React Query** - Server state & API caching
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool & dev server
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Project Structure

```
src/
├── api/              # API client & endpoints
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable UI components
├── features/         # Feature-based modules
├── hooks/            # Custom React hooks
├── layouts/          # Layout components
├── pages/            # Page components
├── store/            # Redux store & slices
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx           # Root component
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_API_BASE_URL=http://localhost:5000/api
```
