import Footer from "@/components/layout/Footer";
import LibNav from "@/components/pages/LibraryPage/LibNav";

export default function LibraryLayout({ children }) {
  return (
    <>
      <main>
        <LibNav />
        {children}
        <Footer />
      </main>
    </>
  );
}
