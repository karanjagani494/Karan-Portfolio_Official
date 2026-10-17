import { ArrowUpRight, Github, Plus } from 'lucide-react';

const validUrl = value => typeof value === 'string' && /^https:\/\//.test(value);
const covers = {
    6: { word: 'WattFlow', accent: '153 201 183' },
    1: { word: 'Morphometrics', accent: '180 194 155' },
    2: { word: 'KJ.', accent: '166 188 209' },
    3: { word: 'Intelligence', accent: '186 176 205' },
    4: { word: 'Together', accent: '205 187 155' },
    5: { word: 'Built to connect.', accent: '200 173 168' },
};

export const ProjectCard = ({ project, reversed = false }) => {
    const { word, accent } = covers[project.id] || covers[5];
    return <article className={`work-story${reversed ? ' work-story-reversed' : ''}`} style={{ '--project-accent': accent }} aria-labelledby={`work-title-${project.id}`}>
        <div className="work-visual">
            {project.image ? <div className="work-image-wrap"><img src={project.image} alt={`${project.title} topic illustration`} loading="lazy" /></div> : <div className={`work-cover work-cover-${project.id}`} aria-hidden="true"><div className="work-orbits"><i /><i /><i /></div><span className="work-cover-word">{word}</span></div>}
        </div>
        <div className="work-copy">
            <h3 id={`work-title-${project.id}`}><span className="flow-underline">{project.title}</span></h3>
            {project.subtitle && <p className="work-subtitle">{project.subtitle}</p>}
            <p className="work-description">{project.description}</p>
            <p className="work-timeline">{project.timeline}</p>
            <ul className="work-tech" aria-label="Technologies">{project.tech.slice(0, 5).map(tech => <li key={tech}>{tech}</li>)}{project.tech.length > 5 && <li>+{project.tech.length - 5} more</li>}</ul>
            {project.note && <p className="work-note">{project.note}</p>}
            <details className="work-details">
                <summary>Explore project <Plus size={15} aria-hidden="true" /></summary>
                <div className="work-details-body">
                    {project.role && <p className="text-zinc-300 mb-3">{project.role}</p>}
                    <p className="mb-4">{project.longDescription || project.description}</p>
                    {project.features?.length > 0 && <><h4>Key features</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></>}
                    {project.outcome && <><h4>Outcome</h4><p>{project.outcome}</p></>}
                    {project.challenges?.length > 0 && <><h4>Challenges</h4><ul>{project.challenges.map(item => <li key={item}>{item}</li>)}</ul></>}
                    <h4>Full stack</h4><p>{project.tech.join(' · ')}</p>
                </div>
            </details>
            <div className="work-links">
                {validUrl(project.github) && (project.githubUnavailable ? <span className="work-unavailable"><Github size={14} aria-hidden="true" /> Repository unavailable publicly</span> : <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}><Github size={14} aria-hidden="true" /> Source code <ArrowUpRight size={14} aria-hidden="true" /></a>)}
                {validUrl(project.link) && <a href={project.link} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={14} aria-hidden="true" /></a>}
            </div>
        </div>
    </article>;
};
