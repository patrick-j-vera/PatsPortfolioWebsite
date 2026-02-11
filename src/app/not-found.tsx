import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-8xl font-bold text-honey mb-4">404</h1>
      <h2 className="font-serif text-3xl font-bold text-bark mb-4">
        Page Not Found
      </h2>
      <p className="text-bark-light max-w-md mb-8">
        Looks like you&apos;ve ventured off the beaten path. The page you&apos;re
        looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="border border-honey text-honey font-mono text-sm px-8 py-3 rounded hover:bg-honey-subtle transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
