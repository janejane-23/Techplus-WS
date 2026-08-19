export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-xl font-extrabold tracking-tight ${className}`}>
      <span className="text-slate-900">Tech</span>
      <span className="text-sky-500">Plus</span>
    </span>
  );
}
