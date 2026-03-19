import { galleryImages } from '../assets/data';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/site';

function GalleryPage() {
  return (
    <>
      <Seo title={pageMeta.gallery.title} description={pageMeta.gallery.description} />
      <PageHero
        eyebrow="Gallery"
        title="Moments from our learning programs, workshops, and client engagements"
        description="A closer look at the collaborative environments, events, and hands-on sessions that define the Xceller experience."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.75rem] glass-panel">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

export default GalleryPage;
