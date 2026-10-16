import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
        <Footer />
    </div>
);
