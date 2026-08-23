import Navbar from "@/components/layout/Navbar";
import FooterCTA from "@/components/layout/FooterCTA";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}
