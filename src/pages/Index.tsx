import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import ReviewButton from "@/components/ReviewButton";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <ReviewButton />
      <Process />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
