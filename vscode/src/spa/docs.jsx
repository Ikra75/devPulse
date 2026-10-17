import Header from "../sections/header";
import Footer from "../sections/footer";

export default function Docs() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070B18] text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Docs</h1>
      </main>

      <Footer />
    </>
  );
}