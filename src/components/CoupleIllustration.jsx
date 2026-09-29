// Original flat-color illustration of the couple in Assamese wedding attire.
// Built from simple shapes so it's easy to swap for a real photo later.
export default function CoupleIllustration() {
  return (
    <svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="brideSkirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--maroon)" />
          <stop offset="100%" stopColor="var(--maroon-deep)" />
        </linearGradient>
        <linearGradient id="groomKurta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1E9DC" />
        </linearGradient>
        <radialGradient id="skinShade" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#F2C79A" />
          <stop offset="100%" stopColor="#E3AD7C" />
        </radialGradient>
        <radialGradient id="haloGlow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="var(--gold-light)" stopOpacity=".35" />
          <stop offset="100%" stopColor="var(--gold-light)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="120" rx="88" ry="100" fill="url(#haloGlow)" />
      <ellipse cx="100" cy="236" rx="72" ry="7" fill="rgba(58,34,22,.1)" />

      {/* Bride */}
      <polygon points="46,86 78,86 96,232 26,232" fill="url(#brideSkirt)" />
      <polygon points="32,214 92,214 96,232 26,232" fill="var(--gold)" />
      <rect x="55" y="58" width="14" height="14" rx="3" fill="#F2C79A" />
      <polygon points="78,68 95,78 74,118 62,107" fill="var(--gold)" opacity=".9" />
      <polygon points="50,60 78,60 82,86 46,86" fill="var(--gold-light)" />
      <path d="M54,64 Q62,71 70,64" stroke="var(--maroon)" strokeWidth="1.3" fill="none" />
      <circle cx="62" cy="42" r="13" fill="url(#skinShade)" />
      <path d="M50,36 Q62,22 74,36 Q73,30 62,29 Q51,30 50,36Z" fill="#2B1810" />
      <circle cx="58.2" cy="42" r="1" fill="#2B1810" />
      <circle cx="65.8" cy="42" r="1" fill="#2B1810" />
      <path d="M58.5,46.5 Q62,48.5 65.5,46.5" stroke="#7A5B47" strokeWidth=".9" fill="none" strokeLinecap="round" />
      <circle cx="62" cy="36.5" r="1.2" fill="var(--maroon)" />
      <circle cx="52" cy="44" r="1.6" fill="var(--gold)" opacity=".8" />
      <circle cx="72" cy="44" r="1.6" fill="var(--gold)" opacity=".8" />

      {/* Groom */}
      <polygon points="120,62 158,62 166,220 112,220" fill="url(#groomKurta)" />
      <polygon points="121,66 140,74 118,138 104,128" fill="var(--maroon)" opacity=".92" />
      <rect x="114" y="152" width="50" height="9" fill="var(--maroon)" />
      <rect x="132" y="64" width="12" height="13" rx="3" fill="#E3AD7C" />
      <line x1="140" y1="64" x2="140" y2="148" stroke="var(--gold)" strokeWidth="1" />
      <circle cx="140" cy="82" r="1.6" fill="var(--gold)" />
      <circle cx="140" cy="102" r="1.6" fill="var(--gold)" />
      <circle cx="140" cy="122" r="1.6" fill="var(--gold)" />
      <circle cx="140" cy="42" r="12.5" fill="url(#skinShade)" />
      <circle cx="135.9" cy="42" r="1" fill="#2B1810" />
      <circle cx="144.1" cy="42" r="1" fill="#2B1810" />
      <path d="M136,46.5 Q140,48.5 144,46.5" stroke="#7A5B47" strokeWidth=".9" fill="none" strokeLinecap="round" />
      <path d="M127,32 Q140,10 153,32 Q146,39 140,37 Q134,39 127,32Z" fill="var(--maroon)" />
      <ellipse cx="140" cy="31.5" rx="14.5" ry="3.1" fill="var(--gold)" />
      <line x1="140" y1="17" x2="140" y2="8" stroke="var(--gold)" strokeWidth="1.2" />
      <circle cx="140" cy="8" r="1.8" fill="var(--gold)" />

      {/* joined hands */}
      <line x1="92" y1="150" x2="118" y2="150" stroke="#E8B98C" strokeWidth="6.5" strokeLinecap="round" />
    </svg>
  )
}
