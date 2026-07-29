import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import type { BlogPreviewContent } from "@/content/types";

export function BlogPreview({ content }: { content: BlogPreviewContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {content.posts.map((post) => (
          <a
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs text-white/50">{post.date}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-white/40" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href={content.cta.href} variant="ghost">
          <span className="inline-flex items-center gap-2">
            {content.cta.label}
            <ExternalLink className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </SectionWrapper>
  );
}
