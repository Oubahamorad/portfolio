import Test from './Test';
import Navbar from '../Home/components/navbar/Navbar';
import './firstSection.scss'
import Hore from './components/hero/Hore';
import Parallax from './components/navbar/parallax/Parallax';
import Servicess from './components/services/Servicess';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';

export const HomePage = () => {
    return (
        <> 
         <Cursor/>
        <section id='Homepage'>
            <Navbar/>
            <Hore/>
        </section>
        <section id='Services'><Parallax type="services"/></section>
        <section><Servicess /></section>
        <section id='Portfolio'><Parallax type="portfolio"/></section>
        <Portfolio/>
        <section id='Contact'>
            <Contact/>
        </section>
        {/* <Test/> */}
        </>
    );
}
