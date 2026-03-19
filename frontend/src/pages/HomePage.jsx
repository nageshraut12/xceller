import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  highlights,
  services,
  stats,
  technologies,
  testimonials
} from '../assets/data';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import { pageMeta } from '../utils/site';

function HomePage() {
  return (
    <>
      <Seo title={pageMeta.home.title} description={pageMeta.home.description} />

      <section className="section-space pt-10">
        <div className="container-shell">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatedSection className="hero-grid pattern-grid rounded-[2rem] border p-8 shadow-premium soft-border md:p-12">
              <span className="inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)] soft-border">
                Digital Growth Partner
              </span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
                Leading IT Services &amp; Training Company
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
                We design business-ready software, enterprise IT solutions, and hands-on training programs that help organizations and professionals stay ahead.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)]"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold soft-border"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-[color:var(--surface)] p-5 soft-border">
                    <item.icon className="text-[color:var(--primary)]" size={24} />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--text-soft)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((item) => (
                <StatCard key={item.label} {...item} />
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Core Services"
            title="Technology services built for ambitious businesses"
            description="From modern web platforms to long-term IT support, our service portfolio is designed to strengthen operations and accelerate transformation."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Technologies"
            title="Tools and platforms we work with every day"
            description="We combine trusted technologies with implementation discipline to build secure, scalable, and maintainable systems."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl px-5 py-4 glass-panel"
              >
                <CheckCircle2 size={18} className="text-[color:var(--primary)]" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by teams that value clarity and execution"
            description="We focus on practical outcomes, long-term relationships, and delivery experiences that feel dependable from kickoff to support."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[2rem] border p-8 hero-grid shadow-premium soft-border md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                  Ready To Build With Confidence?
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                  Partner with a team that blends IT consulting, development, and training excellence.
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
