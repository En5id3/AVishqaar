# AVishqaar Insights

A modern web application built with React, TypeScript, and Tailwind CSS, featuring an Apple-inspired design.

## Features

- **Modern Design**: Apple-style minimal design with clean typography
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Seamless scrolling between sections
- **Interactive Components**: Built with shadcn/ui components
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Apple-inspired design tokens
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router for navigation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/En5id3/AVishqaar.git
cd AVishqaar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Solutions.tsx   # Solutions showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Blog.tsx        # Blog listing
│   ├── Careers.tsx     # Careers page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design System

The application uses a custom design system inspired by Apple's design principles:

- **Typography**: SF Pro Display font family
- **Colors**: Clean grays with accent colors
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and micro-interactions

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact us at contact@avishqaar.com
