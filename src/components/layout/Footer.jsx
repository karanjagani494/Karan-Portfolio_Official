import { siteData } from '../../config/siteData';

export const Footer = () => {
    return (
        <footer className="bg-surface py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {siteData.name}. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    {siteData.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
