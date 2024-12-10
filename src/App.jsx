import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Lifestyle from "./components/Lifestyle";

import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap";

function App() {
    return (
        <div className="App">   
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Lifestyle />
            <Testimonials />
            <Contact />
           
            <Footer />
        </div>
    );
}

export default App;
