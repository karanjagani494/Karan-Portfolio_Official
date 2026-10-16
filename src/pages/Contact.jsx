import { MapPin, ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { siteData } from '../config/siteData';

export default function Contact() {
    return <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div><p className="eyebrow mb-4">Get in touch</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let's build something together.</h2>
                <p className="text-zinc-400 leading-relaxed max-w-lg">Have a software development opportunity or a project in mind? I'd be happy to hear from you.</p>
                <p className="text-zinc-400 flex items-center gap-2 mt-6 text-sm"><MapPin size={16} />{siteData.location}</p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
                {siteData.social.map(s => <a href={s.url} key={s.name} target={s.name === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="flex items-center justify-between gap-3 py-6 group">
                    <span><span className="block text-xs text-zinc-400 mb-2">{s.name}</span><span className="text-link break-all">{s.name === 'Email' ? siteData.email : s.name === 'GitHub' ? 'Explore my code' : 'Connect on LinkedIn'}</span></span>
                    <ArrowUpRight size={20} className="shrink-0 text-zinc-400 group-hover:text-white" />
                </a>)}
            </div>
        </div>
    </SectionWrapper>;
}
