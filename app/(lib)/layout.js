import LibNav from "@/components/pages/LibraryPage/LibNav";

export default function LibraryLayout({ children }) {
  return (
    <>
      <main>
        <LibNav />
        {children}
      </main>
    </>
  );
}
