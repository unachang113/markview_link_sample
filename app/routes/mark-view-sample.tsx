import { MarkViewLinkSample } from "@/pages/mark-view-sample";
import type { Route } from "./+types/mark-view-sample";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tiptap Mark View Sample" },
    { name: "description", content: "Mark View Sample Page" },
  ];
}

export default function MarkViewSample() {
  return <MarkViewLinkSample />;
}
