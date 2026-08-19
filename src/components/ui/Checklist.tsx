import { CheckCircle2 } from "lucide-react";

interface ChecklistProps {
  heading?: string;
  items: string[];
  columns?: 1 | 2;
}

export function Checklist({ heading, items, columns = 2 }: ChecklistProps) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "";

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      {heading && (
        <h3 className="text-center text-xs font-semibold tracking-wide text-slate-500 uppercase">{heading}</h3>
      )}
      <ul className={`mt-4 grid gap-x-8 gap-y-3 ${colClass}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
