import { Briefcase } from 'lucide-react';

export const TimelineItem = ({ item, index, isFirst, isLast }) => {
    const isEven = index % 2 === 0;
    const isPresent = /Present|Current/.test(item.period || '');
    return <div className={`flex flex-col md:flex-row items-stretch justify-center w-full mb-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
        <article className="w-full md:w-5/12 bg-surface p-6 rounded-xl border border-white/10">
            <Briefcase size={19} className="text-zinc-400 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-1"><span className="flow-underline">{item.role}</span></h3><p className="text-zinc-300 mb-4"><span className="flow-underline">{item.company}</span></p>
            <p className="text-xs text-zinc-400 leading-relaxed mb-1">{item.period}</p><p className="text-xs text-zinc-400 mb-5">{item.location}</p>
            <ul className="space-y-2 list-disc pl-4 text-sm text-zinc-400 leading-relaxed">{item.description.map(desc => <li key={desc}>{desc}</li>)}</ul>
        </article>
        <div aria-hidden="true" className="hidden md:flex items-center justify-center w-2/12 relative">
            <div className={`absolute top-1/2 h-px w-1/2 bg-zinc-600 ${isEven ? 'right-0' : 'left-0'}`} />
            <div className="w-px bg-zinc-800 absolute left-1/2" style={{ top: isFirst ? '50%' : '-2.5rem', bottom: isLast ? '50%' : 0 }} />
            <div className={`timeline-dot relative ${isPresent ? 'timeline-dot-current' : ''}`} />
        </div>
        <div className="hidden md:block w-5/12" />
    </div>;
};
