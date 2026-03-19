function TestimonialCard({ name, role, quote }) {
  return (
    <div className="rounded-[1.75rem] p-7 glass-panel">
      <p className="text-base leading-8 text-[color:var(--text-soft)]">"{quote}"</p>
      <div className="mt-6">
        <div className="font-semibold text-[color:var(--text)]">{name}</div>
        <div className="text-sm text-[color:var(--text-soft)]">{role}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
