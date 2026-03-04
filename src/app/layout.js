import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Achmad Dafi Ihsannudin — Junior Developer",
  description: "Portfolio of Achmad Dafi Ihsannudin, a Junior Developer specializing in web development with Laravel, Next.js, and Vue.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
