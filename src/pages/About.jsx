import { SectionWrapper } from '../components/ui/SectionWrapper';
import { SkillsGrid } from '../components/ui/SkillsGrid';
import { siteData } from '../config/siteData';
import profileImage from '../assets/images/Profile_Img.webp';
import { HighlightText } from '../components/ui/HighlightText';

export default function About() {
    return <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <div><p className="eyebrow mb-4">A little background</p><h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-7">About Me</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">{siteData.about.description.map(p => <p key={p}><HighlightText>{p}</HighlightText></p>)}</div>
            </div>
            <div className="aspect-[3/4] w-full max-w-xs mx-auto rounded-xl overflow-hidden border border-white/15 bg-surface">
                <img src={profileImage} alt="Portrait of Karan Jagani" loading="lazy" width="600" height="800" className="w-full h-full object-cover grayscale" />
            </div>
        </div>
        <div className="mb-20"><h3 className="text-2xl font-semibold tracking-tight mb-6">Education</h3>
            {siteData.education.map(edu => <div key={edu.degree} className="bg-surface p-6 md:p-8 rounded-xl border border-white/10">
                <p className="eyebrow mb-3">{edu.period}</p><h4 className="text-xl font-medium mb-3"><HighlightText>{edu.degree}</HighlightText></h4><p className="text-zinc-400 mb-5"><HighlightText>{edu.institution}</HighlightText></p>
                <p className="text-xs text-zinc-400 mb-3">Selected modules</p><div className="flex flex-wrap gap-2">{edu.modules.map(module => <span key={module} className="badge">{module}</span>)}</div>
            </div>)}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight mb-8">Technical Skills</h3><SkillsGrid />
    </SectionWrapper>;
}
