export function Welcome() {
  return (
    <main className="flex items-center justify-center p-4">
      <div className="flex-1 flex flex-col items-left gap-4 min-h-0">
        <header className="space-y-2">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Tiptap v3 Sample
          </h1>
        </header>
        <div className="w-full">
          <nav>
            <ul className="">
              {resources.map(({ href, text }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "/mark-view-sample",
    text: "Mark View Sample",
  },
];
