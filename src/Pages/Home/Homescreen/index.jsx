import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyWork from "../MyWork";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyWork />
      <MySkills />
      <ContactMe />
      <Footer />
    </>
  );
}
