"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-center px-4">
      <h1 className="text-9xl font-bold text-red-500 mb-4">500</h1>
      <h2 className="text-4xl font-bold text-white mb-6">Something went wrong!</h2>
      <p className="text-xl text-slate-400 mb-8 max-w-md">
        An unexpected error occurred. Please try again later.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors">
        Try again
      </button>
    </div>
  );
}
