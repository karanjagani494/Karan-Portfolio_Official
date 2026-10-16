import { siteData } from '../../config/siteData';

export const Footer = () => {
    return (
        <footer className="bg-surface py-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {siteData.name}. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    {siteData.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.name === "Email" ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="p-3 text-zinc-400 hover:text-white transition-colors"
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
