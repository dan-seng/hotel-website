

<h1 align="center">LuxeStay</h1>
<p align="center"><em>A modern, responsive hotel website — sleek UI, dark mode, fast performance.</em></p>

<p align="center">
  <a href="https://luxuryhotl.vercel.app" target="_blank">
    <img alt="Live Demo" src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-ffcc00?style=for-the-badge&logo=vercel&logoColor=black" />
  </a>
  &nbsp;
  <img alt="Vite" src="https://img.shields.io/badge/Build-Vite-00C4A7?style=for-the-badge&logo=vite" />
  &nbsp;
  <img alt="Tailwind" src="https://img.shields.io/badge/Style-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  &nbsp;
  <img alt="License" src="https://img.shields.io/badge/License-MIT-000000?style=for-the-badge" />
</p>

---

## ✨ Preview
![LuxeStay Preview](/public/logo.png)

> Live demo: **https://luxuryhotl.vercel.app**

---

## 🎯 Key Features

- Dark / Light mode toggle with system preference detection  
- Interactive room showcase with detailed info panels  
- Booking form with date selection and validation  
- Photo gallery with responsive layout & lightbox support  
- Contact form (email-ready) and reservation flow  
- Mobile-first responsive design — built for phones and desktops  
- Fast developer experience + production performance with Vite  
- Smooth UI micro-interactions using Framer Motion

---

## 🧩 Tech Stack

<p>
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />&nbsp;
  <img height="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" alt="Vite" />&nbsp;
  <img height="55"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />&nbsp;
  <img height="55" src="https://avatars.githubusercontent.com/u/75042455?s=280&v=4" alt="Radix UI (Radix)"/> &nbsp;
  <img height="55" src="https://avatars.githubusercontent.com/u/66879934?v=4" alt="Lucide (icons placeholder)" />&nbsp;
  <img height="55" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq5gse3kEA76gI2S7FHh4TGq6-jE3nGlPQg&s" alt="Framer Motion" />&nbsp;
</p>

> Notes: icons are embedded as images for GitHub compatibility. Replace or host local copies in `/public/assets/` if you prefer.

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* npm v9+ or yarn

### Install & Run (dev)

```bash
# clone
git clone https://github.com/your-username/hotel-website.git
cd hotel-website

# install deps
npm install
# or
yarn

# dev server
npm run dev
# or
yarn dev

# open http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build Locally

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
src/
├── assets/              # images, icons, screenshots
├── components/          # shared UI components (Header, Footer, RoomCard, Gallery)
├── components/ui/       # design primitives / shadcn-style components
├── hooks/               # custom React hooks (useTheme, useBooking)
├── pages/               # Route pages (Home, Rooms, Booking, Contact)
├── styles/              # Tailwind customizations & globals.css
├── lib/                 # utilities (api, date helpers)
└── main.jsx             # app entry
```

---

## 🎨 Theming & UX

* Theme preference is persisted in `localStorage` and respects `prefers-color-scheme`.
* Tailwind is configured with a custom theme (typography scale and color tokens) and supports rapid customization.
* Accessibility: semantic HTML, keyboard focus states, and aria attributes on interactive components.

---

## ✅ Best Practices Implemented

* Component-driven UI with small, focused components
* State kept local when possible; lift to context when needed (booking flow)
* Forms validated client-side (React Hook Form) and prepared for backend integration
* Smooth animations powered by Framer Motion — subtle, not distracting
* Production-ready bundling via Vite for fast cold-start & builds

---

## 📦 Deployment

* Deployed on **Vercel** (recommended) — link: `https://luxuryhotl.vercel.app`
* CI/CD: configure GitHub Actions to build & deploy on push to `main`.

---

## 🧾 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

* [Tailwind CSS](https://tailwindcss.com)
* [Vite](https://vitejs.dev)
* [Radix UI](https://www.radix-ui.com)
* [Framer Motion](https://www.framer.com/motion/)
* [Lucide Icons](https://lucide.dev)

---

> Built with ❤️ — a polished, fast, and beautiful experience for guests and operators.
