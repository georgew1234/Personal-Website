import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

export default function Home() {
  return (
      <>
        <section className="text-center py-20">
          <h1 className="text-4xl text-header">George Wen</h1>
          <p className="mt-4 text-lg">Computer Science student & aspiring software engineer</p>
        </section>
        <section id="about" className="py-16 max-w-3xl mx-auto">
          <About />
        </section>
        <section id="portfolio" className="py-16 max-w-3xl mx-auto">
          <Portfolio />
        </section>
        <section id="contact" className="py-16 max-w-3xl mx-auto">
          <Contact />
        </section>
      </>
  );
}
