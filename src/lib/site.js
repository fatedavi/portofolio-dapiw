export const siteConfig = {
  name: "Achmad Dafi Ihsannudin",
  initials: "AD",
  role: "Fullstack Developer",
  tagline: "Fullstack Developer · Surabaya, Indonesia",
  location: "Surabaya, Indonesia",
  // Ganti dengan domain asli saat deploy (Vercel otomatis menyetel VERCEL_URL)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portofolio-dapiw.vercel.app",
  email: "achmaddviii@gmail.com",
  phone: "+6285649150049",
  phoneDisplay: "+62 856-4915-0049",
  whatsapp: "6285649150049",
  github: "https://github.com/fatedavi/",
  description:
    "Portfolio Achmad Dafi Ihsannudin, Fullstack Developer di Surabaya yang membangun aplikasi web dan produk berbasis data dengan Laravel, Next.js, Vue.js, dan Tailwind CSS.",
  keywords: [
    "Achmad Dafi Ihsannudin",
    "Fullstack Developer",
    "Web Developer Indonesia",
    "Laravel Developer",
    "Next.js",
    "Vue.js",
    "React",
    "Tailwind CSS",
    "MySQL",
    "Portofolio",
    "Surabaya",
  ],
  tech: [
    "Laravel",
    "Next.js",
    "Vue.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "Python",
  ],
};

export const navLinks = {
  github: siteConfig.github,
  email: `mailto:${siteConfig.email}`,
  whatsapp: `https://wa.me/${siteConfig.whatsapp}`,
  phone: `tel:${siteConfig.phone}`,
};
