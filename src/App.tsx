import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Tracks } from './components/Tracks';
import { Schedule } from './components/Schedule';
import { Prizes } from './components/Prizes';
import { Sponsors } from './components/Sponsors';
import { Testimonials } from './components/Testimonials';
import { Perks } from './components/Perks';
import { Countdown } from './components/Countdown';
import { ProblemStatements } from './components/ProblemStatements';
import { Organizers } from './components/Organizers';
import { FAQ } from './components/FAQ';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      {/*<Tracks />*/}
      <Countdown />
      <ProblemStatements />
      <Schedule />
      <Prizes />
      <Sponsors />
      <Perks />
      {/* <Testimonials /> */}
      <Organizers />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
}