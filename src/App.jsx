import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Events Section */}
      <Events />

      {/* Footer / Contact Section */}
      <Footer />
    </>
  );
}

export default App;
