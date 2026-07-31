/**
 * VillageSeal — signature visual motif of SIAP DESA.
 * A rotating circular "cap desa" (village stamp) mark, echoing the physical
 * ink stamp that authenticates every official village letter. Used sparingly
 * as the one bold visual signature across the site.
 */
export default function VillageSeal({ size = 120, spin = true, className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`${spin ? 'animate-spin-slow' : ''} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path id="sealCircle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
      </defs>
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <text fill="currentColor" fontSize="13.5" fontWeight="600" letterSpacing="3">
        <textPath href="#sealCircle" startOffset="2%">
          SIAP DESA • KABUPATEN BANTAENG • PELAYANAN DIGITAL •
        </textPath>
      </text>
      <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M100 65 L128 82 V118 H72 V82 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
