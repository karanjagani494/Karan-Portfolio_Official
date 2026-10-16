import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
    return <Router><MotionConfig reducedMotion="user" transition={{ duration: 0.25, ease: 'easeOut' }}>
        <MainLayout>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="experience"><Experience /></section>
            <section id="contact"><Contact /></section>
        </MainLayout>
    </MotionConfig></Router>;
}
