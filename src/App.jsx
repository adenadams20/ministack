import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />

      {/* Contenu principal */}
      <main className="md:ml-56 mt-[64px] p-4">
      </main>
    </div>
  );
}

export default App;
