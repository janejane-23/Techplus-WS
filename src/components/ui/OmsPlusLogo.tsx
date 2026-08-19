export function OmsPlusLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-lg font-extrabold tracking-tight text-slate-900 ${className}`}>
      OMS<span className="text-sky-500">+</span>
    </span>
  );
}
