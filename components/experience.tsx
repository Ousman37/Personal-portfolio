"use client" //🚀
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import TimelineEntry from './TimelineEntry';
import { useSectionInView } from '@/lib/hooks';

const Experience = () => {
  const { ref } = useSectionInView("Experience");
 
  
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 dark:bg-gray-900 dark:text-white">
      <SectionHeading>My Experience</SectionHeading>
      <div className="vertical-timeline">
        {experiencesData.map((experience, index) => (
          <TimelineEntry
            key={index}
            date={experience.date}
            title={experience.title}
            subtitle={experience.location}
            description={experience.description}
            icon={experience.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;





