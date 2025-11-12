export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#4169E1] rounded-full animate-spin border-t-transparent" />
        </div>

        {/* Loading text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
