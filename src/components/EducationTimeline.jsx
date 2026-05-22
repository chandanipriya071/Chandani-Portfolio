import SectionHeading from './SectionHeading';
import TimelineCard from './TimelineCard';
import data from '../data/timelineData';
import TimelineNode from './TimelineNode';

export default function EducationTimeline() {
  return (
    <section id="education" className="relative overflow-hidden theme-page px-0 py-16 text-white lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="w-full">
        <SectionHeading
          title="Education"
          description="“Education is the most powerful weapon which you can use to change the world.”"
          theme="education"
          size="sectionLarge"
          glow
        />

        <div className="relative w-full">
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-rose-500/0 via-rose-500/60 to-rose-500/0" />

          <div className="space-y-16 lg:space-y-20">
            {data.map((item, idx) => {
              const left = idx % 2 === 0;
              return (
                <div key={item.id} className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
                  <div className={`hidden lg:block ${left ? 'pr-10' : 'opacity-0'}`}>
                    {left ? (
                      <div className="flex justify-end">
                        <div className="w-full max-w-md">
                          <TimelineCard item={item} side="left" />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex justify-center">
                    <div className="w-10 pt-6">
                      <TimelineNode index={item.id} />
                    </div>
                  </div>

                  <div className={`hidden lg:block ${left ? 'opacity-0' : 'pl-10'}`}>
                    {!left ? (
                      <div className="flex justify-start">
                        <div className="w-full max-w-md">
                          <TimelineCard item={item} side="right" />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:hidden">
                    <TimelineCard item={item} side="mobile" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
