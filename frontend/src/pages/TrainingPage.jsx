import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/site';

const trainingSections = [
  {
    title: 'Programming',
    items: [
      'C Programming',
      'C++',
      'Python',
      'ASP .NET',
      'Core Java',
      'Advance Java Training'
    ]
  },
  {
    title: 'Cyber Security',
    items: [
      'Ethical Hacking',
      'Cyber Forensic',
      'Web Penestration Testing',
      'Penestration Testing'
    ]
  },
  {
    title: 'IT Infrastructure',
    items: [
      'AWS Training',
      'Microsoft Asure',
      'Linux',
      'Hardware and Networkig',
      'Bash Scriptig'
    ]
  }
];

function TrainingPage() {
  return (
    <>
      <Seo title={pageMeta.training.title} description={pageMeta.training.description} />
      <PageHero
        eyebrow="Training"
        title="Three specialized training pathways for freshers and professionals"
        description="Xceller training is organized into Programming, Cyber Security, and IT Infrastructure tracks with practical, industry-oriented focus."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Training Categories"
            title="Structured technical programs aligned with current industry demand"
            description="Choose your path and explore the topics covered under each training section."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {trainingSections.map((section) => (
              <div key={section.title} className="rounded-[1.75rem] p-7 glass-panel">
                <h3 className="font-display text-2xl font-bold">{section.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[color:var(--surface-muted)] px-4 py-2 text-sm text-[color:var(--text-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-8 rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)]"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default TrainingPage;
