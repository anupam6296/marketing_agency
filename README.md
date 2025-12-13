# Dimagination - Premium Marketing Agency Website

A high-performance, design-led website for a digital marketing agency, built with Next.js 14, Tailwind-free CSS (Vanilla Modules), and Prisma.

## Features

- **Premium Design System**: Glassmorphism, smooth animations, and responsive layouts using CSS Modules.
- **Lead Capture**: Functional contact forms storing data to PostgreSQL via Prisma.
- **Admin Dashboard**: Internal dashboard to view and manage leads.
- **CMS-ready**: Architecture set up for Blog and Case Studies management (currently using mock data for speed).
- **SEO Optimized**: Metadata and semantic HTML structure.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Variables-based Design System)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Icons**: Lucide React

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Database Setup**
    Ensure you have PostgreSQL running. Update `.env`:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/dimagination?schema=public"
    ```
    Then run migrations:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app`: Routes and Pages (App Router).
- `src/components`: Reusable UI components.
    - `ui`: Core atoms (Button, Inputs).
    - `layout`: Header, Footer.
    - `home`, `contact`, etc.: Feature-specific components.
- `src/db`: Prisma client instance.
- `prisma`: Database schema.

## Admin Access

Navigate to `/admin/leads` to view submitted leads.
*Note: Currently unprotected. Add authentication middleware (e.g., NextAuth.js) before production deployment.*

## Deployment

1.  Build the application: `npm run build`
2.  Start production server: `npm start`
3.  Recommended host: Vercel (zero config).
