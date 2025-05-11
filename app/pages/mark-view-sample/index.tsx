import { BreadcrumbWrapper } from "@/components/breadcrumb-wrapper";

const breadcrumbItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Mark View Sample",
  },
];

export function MarkViewLinkSample() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <header className="space-y-2">
        <BreadcrumbWrapper breadcrumbItems={breadcrumbItems} />
        <h1 className="font-heading scroll-m-20 text-3xl font-bold tracking-tight">
          Mark View Sample
        </h1>
      </header>
      <p className="[&:not(:first-child)]:mt-6">
        This is a sample of Tiptap's MarkView. It extends the LinkExtension to
        add a MarkView that displays an edit modal when the link is clicked.
      </p>
    </main>
  );
}
