import { SectionWrapper } from '../components/ui/SectionWrapper';
import { TimelineItem } from '../components/ui/TimelineItem';
import { siteData } from '../config/siteData';

const Experience = () => {
    return (
        <div className="w-full">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Experience</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and academic roles.
                    </p>
                </div>

                <div className="relative">
                    {siteData.experience.map((item, index) => (
                        <TimelineItem
                            key={index}
                            item={item}
                            index={index}
                            isFirst={index === 0}
                            isLast={index === siteData.experience.length - 1}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Experience;
