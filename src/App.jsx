import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />

      {/* Contenu principal */}
      <main className="md:ml-56 mt-[64px] p-4">
      </main>
      <Footer />
    </div>
  );
}

export default App;
