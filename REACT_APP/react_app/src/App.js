import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Staets from "./components/Staets";

function App() {
  const skills = [
    {
      title: "Node.js",
      description: "Node.js is used for backend development",
    },
    {
      title: "MongoDB",
      description: "MongoDB stores database data",
    },
    {
      title: "Express.js",
      description: "Express helps create APIs",
    },
  ];

  return (
    <div>
      <Navbar />

      <Hero />

      <div className="cards-row">
        <Card
          title="HTML"
          description="HTML is use to create webpage structure"
        />
        <Card title="CSS" description="CSS is use for styling websites" />
        <Card
          title="JavaScript"
          description="JS adds functionality, logic, and interaction in website"
        />
        <Card title="React" description="React builds modern UI" />
        <h6>This part is created using props-propertise</h6>
      </div>

      <div className="arry-card">
        {skills.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <About />

      <Contact />

      <div style={{ textAlign: "center" }}>
        <h3>Give feedback using states in react</h3>
        <Staets />
      </div>
      <Footer />
    </div>
  );
}

export default App;
