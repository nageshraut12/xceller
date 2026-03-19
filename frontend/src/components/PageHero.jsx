import { motion } from 'framer-motion';

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="section-space pt-10">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-grid pattern-grid rounded-[2rem] border p-8 shadow-premium soft-border md:p-12"
        >
          <span className="inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)] soft-border">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
