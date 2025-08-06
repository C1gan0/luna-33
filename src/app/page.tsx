// src/app/page.tsx
import Home from '../components/Home';
import About from '../components/About';
import Services from '@/components/Services';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
