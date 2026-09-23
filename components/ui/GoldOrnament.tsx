export default function GoldOrnament({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const posClasses = {
    tl: "top-4 left-4 rotate-0",
    tr: "top-4 right-4 rotate-90",
    bl: "bottom-4 left-4 -rotate-90",
    br: "bottom-4 right-4 rotate-180"
  };
  
  return (
    <div className={`absolute w-16 h-16 md:w-24 md:h-24 opacity-70 pointer-events-none ${posClasses[position]}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0C55.2285 0 100 44.7715 100 100" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M0 20C44.1828 20 80 55.8172 80 100" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="#D4AF37" />
        <circle cx="50" cy="10" r="2" fill="#D4AF37" />
        <circle cx="10" cy="50" r="2" fill="#D4AF37" />
      </svg>
    </div>
  );
}