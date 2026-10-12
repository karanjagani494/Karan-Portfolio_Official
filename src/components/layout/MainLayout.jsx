import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';
import { Starfield } from '../ui/Starfield';
import { StarfieldProvider } from '../../context/StarfieldContext';

export const MainLayout = ({ children }) => {
    return (
        <StarfieldProvider>
            <div className="min-h-screen flex flex-col text-white overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
                <Starfield />
                <CustomCursor />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </StarfieldProvider>
    );
};
