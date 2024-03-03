import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* routing */}
      <LandingPage />
      {/*  */}

      <Footer />
    </div>
  );
}

export default App;
