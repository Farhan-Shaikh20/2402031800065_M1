import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div>

      <Navbar />

      <Hero />

       <div className="cards-row">
        <Card
          title="HTML"
          description="HTML is use to create webpage structure"
        />
        <Card
          title="CSS"
          description="CSS is use for styling websites"
        />
        <Card
          title="JavaScript"
          description="JS adds functionality, logic, and interaction in website"
        />
        <Card
          title="React"
          description="React builds modern UI"
        />
        <h6>This part is created using props-propertise</h6>
      </div>

      <About />

      <Contact />
     

      <Footer />

    </div>
  );
}

export default App;
