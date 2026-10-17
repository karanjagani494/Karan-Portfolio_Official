import { useState } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ProjectCard } from '../components/ui/ProjectCard';
import { siteData } from '../config/siteData';

const categories = ['All', 'Web', 'AI', 'Systems'];
const matchesCategory = (project, category) => category === 'All' || project.categories.some(value => value.toLowerCase() === category.toLowerCase());

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const projects = siteData.projects.filter(project => matchesCategory(project, filter));
    return <SectionWrapper>
        <div className="work-heading"><div><p className="eyebrow mb-4">Selected work / Portfolio</p><h2>A few things<br /><span>I've built.</span></h2></div><p>Full-stack applications, computer vision and software engineering. A closer look at the ideas and the work behind them.</p></div>
        <div className="work-toolbar"><div role="group" aria-label="Filter projects" className="work-filters">{categories.map(category => <button type="button" key={category} aria-pressed={category === filter} aria-controls="filtered-projects" onClick={() => setFilter(category)}>{category}<span className="work-filter-count" aria-hidden="true">{siteData.projects.filter(project => matchesCategory(project, category)).length}</span></button>)}</div><p role="status" aria-live="polite">{projects.length} {filter === 'All' ? '' : `${filter} `}{projects.length === 1 ? 'project' : 'projects'}</p></div>
        <div id="filtered-projects" className="work-list" aria-label={`${filter} projects`}>{projects.map((project, index) => <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />)}</div>
    </SectionWrapper>;
}
