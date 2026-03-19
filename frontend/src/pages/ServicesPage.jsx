import { services } from '../assets/data';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { pageMeta } from '../utils/site';

function ServicesPage() {
  return (
    <>
      <Seo title={pageMeta.services.title} description={pageMeta.services.description} />
      <PageHero
        eyebrow="Services"
        title="Specialized IT services that turn requirements into reliable outcomes"
        description="We work with organizations that need modern digital experiences, robust internal systems, and dependable support from a team that understands execution."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServicesPage;
