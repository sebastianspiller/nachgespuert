export default function ScrollArrow() {
  return (
    <div className="flex justify-center mt-2 mb-8">
      <svg
        className="scroll-arrow w-12 h-12 text-pastel-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
