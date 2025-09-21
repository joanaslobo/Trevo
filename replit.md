# Trevo Coolectivo Music School Website

## Overview

This is a modern web application for Trevo Coolectivo, a music school that offers instrument lessons, group sessions, and workshops. The website provides a comprehensive platform for potential students to learn about the school's methodology, teachers, programs, and contact information. The application features a bilingual interface (Portuguese/English), dynamic theming with Light/Fun and Rock modes, and a contact form system for student inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom styling (shadcn/ui pattern)
- **Animation**: Framer Motion for smooth page transitions and micro-interactions
- **State Management**: React Context for theme and language management, TanStack Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development Integration**: Vite middleware for hot module replacement during development
- **API Design**: RESTful endpoints under `/api` prefix
- **Request Handling**: JSON body parsing with comprehensive error handling and logging

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Definition**: Centralized schema in `shared/schema.ts` with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Provider**: Neon Database (configured for serverless PostgreSQL)

### Authentication and Authorization
- Currently implements a basic user system with username/password authentication
- Session management prepared but not fully implemented
- Contact form and newsletter subscription endpoints are publicly accessible

### Theming System
- **Dual Theme Support**: Light/Fun mode (default) and Rock & Roll mode
- **Dynamic Switching**: Real-time theme switching with CSS custom properties
- **Color Management**: Centralized color definitions in theme context and utility functions
- **Persistence**: Theme preferences saved to localStorage

### Internationalization
- **Bilingual Support**: Portuguese (default) and English
- **Context-Based**: React Context API for language state management
- **Translation System**: Key-based translation with nested object structure
- **User Selection**: Landing overlay for initial language selection

### Form Handling
- **Contact Form**: Dual submission system (API endpoint + Google Forms integration)
- **Validation**: Zod schema validation for type safety and data integrity
- **Email Integration**: Nodemailer setup for automated email notifications
- **Newsletter**: Subscription system with database persistence

## External Dependencies

### Database and ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL hosting
- **Connect PG Simple**: PostgreSQL session store (prepared for future use)

### Email Services
- **Nodemailer**: SMTP email sending for contact form notifications
- **Google Forms**: Backup form submission system for contact inquiries

### UI and Animation Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Framer Motion**: Production-ready motion library for React
- **Embla Carousel**: Touch-friendly carousel with autoplay functionality
- **Lucide React**: Modern icon library

### Development and Build Tools
- **Vite**: Next-generation frontend build tool with HMR
- **TypeScript**: Static type checking and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **TanStack Query**: Powerful data synchronization for React

### Third-Party Integrations
- **Font Sources**: Google Fonts (Montserrat, Playfair Display, Caveat)
- **Font Awesome**: Icon library for decorative elements
- **Replit Integration**: Development environment optimization and deployment tools