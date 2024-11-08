import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <head>
        <title>Shashank Ranjan</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="m-0">
        <NavBar />
        <main className="flex min-h-screen flex-col container mx-auto px-2 py-2">
          <HeroSection />
          <AboutMe />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </body>
    </>
  );
}
