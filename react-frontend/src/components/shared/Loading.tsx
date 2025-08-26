function Loading() {
  return (
    <div className="flex items-center justify-center h-[60vh] w-full bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-hover-pink rounded-full animate-spin"></div>
        {/* Text */}
        <p className="text-lg font-semibold text-gray-700">Učitava se...</p>
      </div>
    </div>
  );
}

export default Loading;
