import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-center px-4">
      <h1 className="text-9xl font-bold text-sky-500 mb-4">404</h1>
      <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-xl text-slate-400 mb-8 max-w-md">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
