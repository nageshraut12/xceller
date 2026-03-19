function CourseCard({ name, duration, level, icon: Icon }) {
  return (
    <div className="rounded-[1.75rem] p-7 glass-panel">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
        <Icon size={26} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold">{name}</h3>
      <div className="mt-4 space-y-2 text-sm text-[color:var(--text-soft)]">
        <p>Duration: {duration}</p>
        <p>Level: {level}</p>
      </div>
      <button
        type="button"
        className="mt-6 rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)]"
      >
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;
