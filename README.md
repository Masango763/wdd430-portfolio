# WDD 430 Portfolio - Next.js App

This repository contains my personal full-stack portfolio site built for **WDD 430: Web Full-Stack Development** at BYU-Idaho. It demonstrates component composition, static page routing using the Next.js App Router, custom TypeScript components, and Tailwind CSS styling.

## 🚀 Live Demo
- **Vercel Deployment:** [https://wdd430-portfolio-masango.vercel.app](https://wdd430-portfolio-masango.vercel.app) *(Update with your exact Vercel URL after deployment)*

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 📁 Project Structure
```text
wdd430-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx        # About page with custom SkillCard component
│   ├── api/
│   │   └── hello/
│   │       └── route.ts    # API route returning JSON (/api/hello)
│   ├── globals.css         # Global styles & Tailwind CSS imports
│   ├── layout.tsx          # Root layout wrapper (Header, children, Footer)
│   └── page.tsx            # Home page displaying ProjectList
├── components/
│   ├── Footer.tsx          # Copyright footer
│   ├── Header.tsx          # Navigation header with Next.js Link elements
│   ├── ProjectCard.tsx     # Typed project card component
│   ├── ProjectList.tsx     # Responsive grid container for projects
│   └── SkillCard.tsx       # Custom component displaying technical skills
└── public/                 # Static assets
⚡ Getting Started Locally
Clone the repository:

Bash
git clone [https://github.com/Masango763/wdd430-portfolio.git](https://github.com/Masango763/wdd430-portfolio.git)
cd wdd430-portfolio
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.
