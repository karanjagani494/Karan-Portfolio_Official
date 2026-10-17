import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CursorGlow } from '../ui/CursorGlow';

export const MainLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
        <CursorGlow />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
        <Footer />
    </div>
);
