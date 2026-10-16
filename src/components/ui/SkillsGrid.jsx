import { siteData } from '../../config/siteData';

export const SkillsGrid = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
    {Object.entries(siteData.skills).map(([name, skills]) => <div key={name} className="border-t border-white/15 pt-5">
        <h4 className="text-base font-medium mb-4">{name}</h4>
        <div className="flex flex-wrap gap-2">{skills.map(skill => <span className="badge" key={skill}>{skill}</span>)}</div>
    </div>)}
</div>;
