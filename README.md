# Muhammad Ammar Saleem — Portfolio

A personal portfolio site showcasing SQL databases, BI dashboards, Java desktop applications, and digital logic design projects — built independently while learning full-stack development from scratch.

<p align="left">
  <a href="https://m2ammar.github.io/ammar-s_portfolio/">
    <img src="https://img.shields.io/badge/Live%20Site-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" />
  </a>
</p>

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-black?logo=framer&logoColor=white)

## Overview

This site is more than a static project list — it's a fully custom-built React application with its own routing, animation system, and a reusable case-study framework for documenting each project in depth.

Key features:
- **Work grid** with category filtering (SQL, Java, DLD)
- **Project modals** with quick previews and links to GitHub/Tableau
- **Dedicated case study pages** for select projects — full write-ups covering objectives, technical implementation, technologies used, image galleries with carousel navigation, engineering challenges, and takeaways
- **About page** with skills, education, and contact info
- Smooth page transitions and a custom cursor, built with Framer Motion

## Tech Stack

- **React** (functional components, hooks)
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and page transitions
- **Lucide React** — icon set
- **GitHub Pages + GitHub Actions** — automated deployment on push to `main`

## Project Structure

- `src/App.jsx` — Main application (routing, layout, all page logic)
- `src/data/projects.js` — Project data and case study content
- `src/index.css` — Global styles
- `src/main.jsx` — Entry point
- `public/` — Project screenshots and images


## Running Locally

```bash
git clone git@github.com:m2ammar/ammar-s_portfolio.git
cd ammar-s_portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:5173/ammar-s_portfolio/`.

To build for production:

```bash
npm run build
```

## Deployment

Pushing to `main` automatically triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages.

## Featured Projects

- **PakMart Retail Analytics** — MySQL database with stored procedures and window functions, visualized in Tableau
- **Global Healthcare System** — 19-table relational database covering 197 countries
- **Pakistan Financial Services** — 9-table banking simulation with audit logging
- **Payroll Management System** — JavaFX desktop app with role-based access control and polymorphic salary calculation (10/10 viva score)
- **Vehicle Rental System** — JavaFX booking system with dual login roles
- **3-Floor Elevator Controller** — Hardware finite state machine built on breadboard, simulated in TinkerCad

## Contact

<p align="left">
  <a href="mailto:ma9731501@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://www.linkedin.com/in/muhammad-ammar-b533a0323/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/m2ammar">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>
