function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="group rounded-[1.75rem] p-7 transition hover:-translate-y-1 glass-panel">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--surface-muted)] text-[color:var(--primary)]">
        <Icon size={26} />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">{description}</p>
    </div>
  );
}

export default ServiceCard;
