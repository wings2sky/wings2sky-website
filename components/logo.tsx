export default function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      {/* Wings */}
      <path d="M16 4L8 12L6 10L16 2L26 10L24 12L16 4Z" fill="currentColor" className="text-primary" />
      <path
        d="M16 4L8 12L6 10L16 2L26 10L24 12L16 4Z"
        fill="currentColor"
        className="text-primary opacity-70"
        transform="translate(0, 4)"
      />

      {/* Sky/Arrow pointing up */}
      <path d="M16 28L12 20L14 18L16 22L18 18L20 20L16 28Z" fill="currentColor" className="text-primary" />

      {/* Circle background */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary opacity-30"
        fill="none"
      />
    </svg>
  )
}
