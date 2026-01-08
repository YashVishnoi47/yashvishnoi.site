import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Yash Vishnoi",
  description: "Full Stack Web Developer and UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} relative antialiased flex flex-col justify-center items-center selection:bg-[#7C3AED] selection:text-white `}
      >
        <Navbar />
        {children}
        <Toaster />
        <Cursor />
      </body>
    </html>
  );
}
