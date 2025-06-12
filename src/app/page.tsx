// page.tsx
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

export default function Home() {
  return (
      <>
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold">Welcome to My Personal Website</h1>
          <p className="mt-4 text-lg">Frontend Developer • Designer • Creator</p>
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="portfolio" className="py-16">
          <Portfolio />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </>
  );
}
