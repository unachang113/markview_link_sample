import type { Route } from "./+types/mark-view-sample";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tiptap Mark View Sample" },
    { name: "description", content: "Mark View Sample Page" },
  ];
}

export default function MarkViewSample() {
  return (
    <div>
      <h1>Mark View Sample</h1>
      <p>This is a sample page for Mark View.</p>
    </div>
  );
}
