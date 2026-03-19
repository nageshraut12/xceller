import { solutions } from '../assets/data';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { pageMeta } from '../utils/site';

function SolutionsPage() {
  return (
    <>
      <Seo title={pageMeta.solutions.title} description={pageMeta.solutions.description} />
      <PageHero
        eyebrow="IT Solutions"
        title="Professional IT solutions backed by real-world delivery and technical depth"
        description="Xceller IT Services combines software development, IT infrastructure capability, and corporate technical expertise to support business growth."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell">
          <div className="mb-10 rounded-[2rem] p-8 glass-panel md:p-10">
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => (
              <ServiceCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default SolutionsPage;
