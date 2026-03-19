function StatCard({ value, label }) {
  return (
    <div className="rounded-[1.75rem] p-6 glass-panel">
      <div className="font-display text-3xl font-bold text-[color:var(--text)]">{value}</div>
      <div className="mt-2 text-sm text-[color:var(--text-soft)]">{label}</div>
    </div>
  );
}

export default StatCard;
