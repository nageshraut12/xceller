function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <span className="mb-3 inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)] soft-border">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-[color:var(--text)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[color:var(--text-soft)] md:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeader;
