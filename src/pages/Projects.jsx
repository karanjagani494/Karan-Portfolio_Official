import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ProjectCard } from '../components/ui/ProjectCard';
import { siteData } from '../config/siteData';

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [selected, setSelected] = useState(null);
    const dialog = useRef(null);
    useEffect(() => {
        if (!selected) return;
        const element = dialog.current;
        const opener = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        element.showModal();
        document.body.style.overflow = 'hidden';
        return () => { element.close(); document.body.style.overflow = previousOverflow; opener?.focus(); };
    }, [selected]);
    const projects = siteData.projects.filter(p => filter === 'All' || p.categories.includes(filter));
    const trapFocus = event => {
        if (event.key !== 'Tab') return;
        const controls = [...dialog.current.querySelectorAll('button:not([disabled]), a[href]')];
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    };
    return <SectionWrapper>
        <div className="text-center mb-10"><p className="eyebrow mb-4">Selected work</p><h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Featured Projects</h2><p className="text-zinc-400 max-w-xl mx-auto">Full-stack applications, computer vision and software engineering — from idea to implementation.</p></div>
        <div role="group" aria-label="Filter projects" className="flex justify-center gap-2 mb-5 flex-wrap">{['All', 'Web', 'AI', 'Systems'].map(category => <button key={category} aria-pressed={category === filter} onClick={() => setFilter(category)} className={`button px-5 py-2 ${filter === category ? 'button-primary' : ''}`}>{category}</button>)}</div>
        <p role="status" className="text-center text-xs text-zinc-400 mb-9">{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map(project => <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />)}</div>
        <dialog ref={dialog} onKeyDown={trapFocus} aria-labelledby={selected ? `project-title-${selected.id}` : undefined} onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} className="bg-transparent w-[calc(100%-2rem)] max-w-3xl max-h-[90svh] rounded-xl">
            {selected && <ProjectCard project={selected} isExpanded onClick={() => setSelected(null)} />}
        </dialog>
    </SectionWrapper>;
}
