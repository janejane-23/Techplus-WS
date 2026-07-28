import type { Metadata } from "next";
import type { MetaContent } from "@/content/types";

export function buildMetadata(meta: MetaContent): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}
