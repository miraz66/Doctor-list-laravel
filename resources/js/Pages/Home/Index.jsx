import Headers from '@/Components/Headers';
import { Head } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Home" />

      <Headers />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>
    </>
  );
}
