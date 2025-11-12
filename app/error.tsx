'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3">
          Something went wrong
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          We're sorry for the inconvenience. An error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="inline-block bg-[#4169E1] hover:bg-[#3a5dc7] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Try again
        </button>

        <p className="text-sm text-gray-500 mt-6">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}
