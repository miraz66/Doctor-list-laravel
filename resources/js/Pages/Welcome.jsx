import Headers from "@/Components/Headers";
import { Head } from "@inertiajs/react";
import { MDXProvider } from "@mdx-js/react";
import File from "@/Pages/TLC_FILE/affordable-cosmetic-surgery-loan/affordable-cosmetic-surgery-loan.mdx";

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

      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/80">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="">
            <MDXProvider>
              <File />
            </MDXProvider>
          </div>
        </div>
      </div>
    </>
  );
}
