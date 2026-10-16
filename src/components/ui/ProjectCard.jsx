import { ArrowUpRight, Github, X } from 'lucide-react';

const validUrl = value => typeof value === 'string' && /^https:\/\//.test(value);
export const ProjectCard = ({ project, isExpanded = false, onClick }) => (
    <article className={`${isExpanded ? '' : 'project-card h-full'} bg-surface border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/25`}>
        {isExpanded && <div className="sticky top-0 z-10 bg-surface/95 border-b border-white/10 px-5 py-2 flex justify-between items-center"><span className="eyebrow">Project details</span><button onClick={onClick} className="p-3 rounded-lg hover:bg-white/10" aria-label="Close project details" autoFocus><X size={20} /></button></div>}
        <div className={`${isExpanded ? 'max-h-80' : 'aspect-[16/9]'} relative overflow-hidden bg-zinc-900 border-b border-white/10`}>
            {project.image ? <img src={project.image} alt={`${project.title} — decorative topic illustration`} loading="lazy" className="w-full h-full object-contain grayscale opacity-70" /> :
                <div className="h-full min-h-40 p-7 flex flex-col justify-between bg-gradient-to-br from-zinc-800/40 to-zinc-950" aria-label="Project preview not available">
                    <span className="eyebrow">{project.categories.join(' / ')}</span>
                    <div className="flex items-end justify-between gap-3"><span className="text-2xl font-medium tracking-tight text-zinc-300">{project.id === 6 ? 'WattFlow' : project.categories.includes('AI') ? 'Model / analysis' : project.id === 2 ? 'KJ.' : 'Software / systems'}</span><span className="text-[10px] uppercase tracking-widest text-zinc-400">No preview</span></div>
                </div>}
            {project.image && <span className="absolute bottom-2 right-2 bg-zinc-950/90 px-2 py-1 rounded text-[10px] text-zinc-300">Topic illustration</span>}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            {project.id === 6 && <p className="eyebrow mb-3">Featured project</p>}
            <h3 id={isExpanded ? `project-title-${project.id}` : undefined} className="text-xl font-semibold tracking-tight leading-snug mb-3">{project.title}</h3>
            {isExpanded && project.subtitle && <p className="text-zinc-300 mb-4">{project.subtitle}</p>}
            {isExpanded && <p className="text-sm text-zinc-400 mb-5">{[project.role, project.timeline].filter(Boolean).join(' · ')}</p>}
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">{isExpanded ? project.longDescription || project.description : project.description}</p>
            {project.note && <p className="text-xs leading-relaxed text-zinc-400 border-l border-zinc-600 pl-3 mb-5">{project.note}</p>}
            {isExpanded && project.features && <div className="mb-6"><h4 className="font-medium mb-3">Key features</h4><ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>}
            {isExpanded && project.outcome && <div className="mb-6"><h4 className="font-medium mb-2">Outcome</h4><p className="text-sm leading-relaxed text-zinc-400">{project.outcome}</p></div>}
            {isExpanded && project.challenges && <div className="mb-6"><h4 className="font-medium mb-3">Challenges</h4><ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">{project.challenges.map(item => <li key={item}>{item}</li>)}</ul></div>}
            <div className="flex flex-wrap gap-2 mb-6">{(isExpanded ? project.tech : project.tech.slice(0, 4)).map(tech => <span className="badge" key={tech}>{tech}</span>)}{!isExpanded && project.tech.length > 4 && <span className="badge">+{project.tech.length - 4}</span>}</div>
            <div className="flex flex-wrap gap-3 mt-auto">
                {!isExpanded && <button onClick={onClick} className="button text-xs" aria-label={`View details for ${project.title}`}>View details <ArrowUpRight size={14} /></button>}
                {validUrl(project.github) && (project.githubUnavailable
                    ? <span className="inline-flex items-center gap-2 text-xs text-zinc-400 py-3" title={project.github}><Github size={14} /> GitHub unavailable publicly</span>
                    : <a href={project.github} target="_blank" rel="noopener noreferrer" className="button text-xs" aria-label={`${project.title} on GitHub`}><Github size={14} /> GitHub</a>)}
                {validUrl(project.link) && <a href={project.link} target="_blank" rel="noopener noreferrer" className="button text-xs">Live demo <ArrowUpRight size={14} /></a>}
            </div>
        </div>
    </article>
);
