import Headers from "@/Components/Headers";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  return (
    <>
      <Head title="Welcome" />

      <Headers />

      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to Laravel
            </h1>
            <p className="mt-6 text-xl leading-8">
              Laravel is a web application framework with expressive, elegant
              syntax. We’ve been building a framework like this for
              years—sophisticated, but simple.
            </p>
            <p className="mt-6 text-xl leading-8">
              Laravel’s approach to application development is clean and
              expressive, and all of the tools needed to build your next project
              are available on the documentation site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
