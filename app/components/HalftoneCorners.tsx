export default function HalftoneCorners() {
  return (
    <>
      <div className="halftone halftone-tl" aria-hidden="true">
        <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-tl" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="3" fill="#0F0F0F" />
            </pattern>
            <radialGradient id="mask-tl" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="60%" stopColor="white" stopOpacity="1" />
            </radialGradient>
            <mask id="m-tl">
              <rect width="180" height="180" fill="white" />
              <rect width="180" height="180" fill="url(#mask-tl)" />
            </mask>
          </defs>
          <rect width="180" height="180" fill="url(#dots-tl)" mask="url(#m-tl)" />
        </svg>
      </div>

      <div className="halftone halftone-br" aria-hidden="true">
        <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-br" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="3" fill="#0F0F0F" />
            </pattern>
            <radialGradient id="mask-br" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="60%" stopColor="white" stopOpacity="1" />
            </radialGradient>
            <mask id="m-br">
              <rect width="180" height="180" fill="white" />
              <rect width="180" height="180" fill="url(#mask-br)" />
            </mask>
          </defs>
          <rect width="180" height="180" fill="url(#dots-br)" mask="url(#m-br)" />
        </svg>
      </div>
    </>
  );
}
