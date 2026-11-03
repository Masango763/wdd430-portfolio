# WDD 430 Portfolio - Next.js Application

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://wdd430-portfolio-masango763.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Masango763/wdd430-portfolio)

This repository contains my personal full-stack portfolio site built for **WDD 430: Web Full-Stack Development** at BYU-Idaho. It demonstrates component composition, static page routing using the Next.js App Router, custom TypeScript components, and Tailwind CSS styling.

## 🔗 External Links & Resources
- 🚀 **Live Production Application:** [![Vercel](https://img.shields.io/badge/Vercel_App-Visit_Site-black?style=flat-square&logo=vercel)](https://wdd430-portfolio-masango763.vercel.app)
- ⚙️ **Vercel Project Dashboard:** [![Vercel Dashboard](https://img.shields.io/badge/Vercel-Dashboard-000000?style=flat-square&logo=vercel)](https://vercel.com/masango763/wdd430-portfolio/CEni5US2sxg2Bp7z8Mi2BYzmWsPv)
- 📦 **GitHub Source Code:** [![GitHub](https://img.shields.io/badge/GitHub-Masango763/wdd430--portfolio-181717?style=flat-square&logo=github)](https://github.com/Masango763/wdd430-portfolio)

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
⚡ Local Development
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
Open http://localhost:3000 in your browser.
