import { team, values } from '../assets/data';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/site';

function AboutPage() {
  return (
    <>
      <Seo title={pageMeta.about.title} description={pageMeta.about.description} />
      <PageHero
        eyebrow="About Xceller"
        title="Trusted software development and IT infrastructure skills partner since 2007"
        description="Xceller IT Services is a leading professional IT company delivering software development, IT infrastructure skills, and real-time project-based technical learning."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] p-8 glass-panel md:p-10">
            <SectionHeader
              eyebrow="Who We Are"
              title="Company Introduction"
              description="Professional IT services and high-quality technical skills with strong industry alignment."
            />
            <div className="space-y-5 text-base leading-8 text-[color:var(--text-soft)]">
              <p>
                Xceller IT Services is a Leading Professional IT Company for Software Development and IT Infrastructure Skills since 2007. It is one of the best Technical Skills Providing Source which provides High-Quality Industry Level Technical Skills with Real Time Projects.
              </p>
              <p>
                Xceller is an advanced technology IT platform providing advanced and professional technical skills in latest Technologies that help Freshers and professionals rise to the advanced skills requirements of the current Industry.
              </p>
              <p>
                Xceller IT Services conduct Online and Offline Corporate Technical providing Sessions on various Industry oriented Technologies on Web and Software Development (.NET, PHP), IT Networking, Microsoft Azure, AWS and Python and many more Advanced Technologies by top class Industry experts having more than 7+ years of experience in same domain.
              </p>
              <p>
                The curriculum is designed by Industry experts, who have real time scenario based experience and case studies and projects using database from companies. This Corporate Training is supported with experts assistance which allow individuals to develop hands on their respective domain.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.75rem] p-8 glass-panel">
              <h3 className="font-display text-2xl font-bold">Mission</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">
                To provide high-quality industry-level technical skills, software development support, and infrastructure expertise that help students, professionals, and organizations grow with confidence.
              </p>
            </div>
            <div className="rounded-[1.75rem] p-8 glass-panel">
              <h3 className="font-display text-2xl font-bold">Vision</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">
                To remain a trusted destination for advanced technologies, real-time project exposure, and professional IT services shaped by current industry needs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Values"
            title="How we work with clients and learners"
            description="Our values shape the way we deliver software, technical training, and expert support."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.75rem] p-7 glass-panel">
                <h3 className="font-display text-2xl font-bold">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Team"
            title="Meet the people behind the delivery"
            description="Our cross-functional team supports software projects, IT services, and practical training experiences."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-[1.75rem] p-7 glass-panel">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--surface-muted)] font-display text-xl font-bold text-[color:var(--primary)]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{member.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--text-soft)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default AboutPage;
