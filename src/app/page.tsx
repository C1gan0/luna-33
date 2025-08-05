import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Services from '@/components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
     <Header />
     <Home />
     <About />
     <Services />
     <Contact />
     <Footer />
    </main>
  );
}
