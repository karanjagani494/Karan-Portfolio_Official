import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <MainLayout>
                <section id="home" className="min-h-screen flex flex-col justify-center">
                    <Home />
                </section>
                <section id="about" className="min-h-screen flex flex-col justify-center py-20">
                    <About />
                </section>
                <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
                    <Projects />
                </section>
                <section id="experience" className="min-h-screen flex flex-col justify-center py-20">
                    <Experience />
                </section>
                <section id="contact" className="min-h-screen flex flex-col justify-center py-20">
                    <Contact />
                </section>
            </MainLayout>
        </Router>
    );
}

export default App;
