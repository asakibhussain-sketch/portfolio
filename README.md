# Sakib Hussain A — Portfolio

Professional portfolio website built with **Next.js 16 App Router + TypeScript + Tailwind CSS**.

## 🚀 Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## ✏️ How to Update Your Portfolio Content

**All content lives in one file: [`src/data/portfolio.ts`](./src/data/portfolio.ts)**

You never need to touch any component file to update your portfolio.

### Add a new project
Open `src/data/portfolio.ts` and add an object to the `projects` array:

```ts
{
  id: "my-new-project",           // unique slug (no spaces)
  name: "My Awesome Project",
  description: "What it does...",
  language: "Python",             // or TypeScript, JavaScript, etc.
  tags: ["Python", "FastAPI"],    // tech stack badges shown on card
  stars: 0,                       // update if you have stars
  githubUrl: "https://github.com/asakibhussain-sketch/my-project",
  demoUrl: "https://my-project.vercel.app",  // optional — omit if no live demo
  featured: true,                 // true = large card; false = small card
}
```

### Add a new job/internship
Add to the `experience` array:

```ts
{
  id: "company-slug",
  company: "Company Name",
  role: "Your Role",
  type: "Internship",  // or "Full-time", "Part-time", "Freelance"
  location: "Remote",
  startDate: "Jan 2027",
  endDate: "March 2027",  // or "Present"
  achievements: [
    "What you did...",
    "Another achievement...",
  ],
}
```

### Add a certification
Add to the `certifications` array:

```ts
{
  id: "cert-slug",
  name: "Certification Name",
  issuer: "Platform / Organization",
  year: "2027",
  status: "Completed",  // or "In Progress"
}
```

### Update your resume link
1. Place your PDF in the `public/` folder (e.g. `public/resume.pdf`)
2. In `portfolio.ts`, uncomment and update:
   ```ts
   resumeUrl: "/resume.pdf",
   ```

---

## 🌐 Deploy to Vercel

Zero-config deployment:

```bash
npm install -g vercel
vercel
```

Or just push to GitHub and connect the repo at [vercel.com/new](https://vercel.com/new).

---

## 🔑 GitHub API Rate Limits

The project currently embeds GitHub data statically in `src/data/portfolio.ts`.

**If you want dynamic GitHub data** (auto-updating stars, READMEs, etc.):
1. Create a GitHub Personal Access Token (PAT) at [github.com/settings/tokens](https://github.com/settings/tokens) — select **`public_repo`** scope (read-only is fine)
2. Add it to `.env.local`:
   ```
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```
3. Use it in a Server Component or `generateStaticParams` fetch:
   ```ts
   fetch("https://api.github.com/users/asakibhussain-sketch/repos", {
     headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
     next: { revalidate: 3600 }  // ISR — refresh every hour
   })
   ```

The **unauthenticated** rate limit is **60 requests/hour** per IP. A PAT raises this to **5,000 requests/hour**.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind + custom tokens
│   ├── layout.tsx        # Root layout, SEO metadata
│   └── page.tsx          # Single-page scroll assembly
├── components/
│   ├── Navbar.tsx        # Sticky nav with dark mode toggle
│   ├── Footer.tsx        # Footer with social links
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
└── data/
    └── portfolio.ts      # ← Edit this file to update content
```
