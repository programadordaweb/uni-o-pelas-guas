import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Board from "@/components/Board";
import Store from "@/components/Store";
import Actions from "@/components/Actions";
import Transparency from "@/components/Transparency";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Board />
        <Store />
        <Actions />
        <Transparency />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
