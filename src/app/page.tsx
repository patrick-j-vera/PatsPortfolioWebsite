import Nav from "@/components/layout/Nav";
import SideElements from "@/components/layout/SideElements";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MyStory from "@/components/sections/MyStory";
import Impact from "@/components/sections/Impact";
import Initiatives from "@/components/sections/Initiatives";
import Contributions from "@/components/sections/Contributions";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <SideElements />

      <main id="main-content">
        <Hero />
        <MyStory />
        <Impact />
        <Initiatives />
        <Contributions />
        <Connect />
      </main>

      <Footer />
    </>
  );
}
