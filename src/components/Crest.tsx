import React from 'react';

interface CrestProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
}

export const Crest: React.FC<CrestProps> = ({
  size = 'md',
  showText = false,
  className = '',
  variant = 'light',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Refined School Heraldic Shield */}
      <svg
        viewBox="0 0 120 135"
        className={`${sizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Maai-Mahiu Girls High School Crest"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14532D" />
            <stop offset="50%" stopColor="#0F3B20" />
            <stop offset="100%" stopColor="#082813" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
        </defs>

        {/* Outer Shield Border */}
        <path
          d="M60 6 L108 24 V65 C108 96 60 124 60 124 C60 124 12 96 12 65 V24 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Decorative Contour */}
        <path
          d="M60 14 L100 29 V64 C100 89 60 114 60 114 C60 114 20 89 20 64 V29 Z"
          fill="#0B3019"
          stroke="#CA8A04"
          strokeWidth="1.2"
          strokeDasharray="2 1"
          opacity="0.85"
        />

        {/* Rift Valley Escarpment Silhouette Symbol */}
        <path
          d="M26 72 L45 52 L60 64 L80 44 L94 72 Z"
          fill="#166534"
          opacity="0.6"
        />

        {/* Open Book of Knowledge */}
        <g transform="translate(38, 70) scale(0.9)">
          <path
            d="M24 16 C16 11 4 13 0 17 V36 C4 32 16 30 24 35 C32 30 44 32 48 36 V17 C44 13 32 11 24 16 Z"
            fill="#FFFFFF"
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
          <path d="M24 16 V35" stroke="#CA8A04" strokeWidth="1.5" />
          {/* Subtle text lines */}
          <line x1="6" y1="21" x2="20" y2="23" stroke="#94A3B8" strokeWidth="1" />
          <line x1="6" y1="26" x2="20" y2="28" stroke="#94A3B8" strokeWidth="1" />
          <line x1="28" y1="23" x2="42" y2="21" stroke="#94A3B8" strokeWidth="1" />
          <line x1="28" y1="28" x2="42" y2="26" stroke="#94A3B8" strokeWidth="1" />
        </g>

        {/* The Torch of Truth & Excellence */}
        <g transform="translate(60, 42)">
          {/* Flame */}
          <path
            d="M0 -14 C4 -8 7 -4 4 2 C2 5 -2 5 -4 2 C-7 -4 -4 -8 0 -14 Z"
            fill="url(#goldGrad)"
          />
          <path
            d="M0 -11 C2 -7 3 -4 1 0 C0 2 -1 2 -2 0 C-3 -4 -2 -7 0 -11 Z"
            fill="#FEF08A"
          />
          {/* Torch Handle */}
          <path
            d="M-3 2 H3 L2 14 H-2 Z"
            fill="url(#goldGrad)"
            stroke="#78350F"
            strokeWidth="0.8"
          />
        </g>

        {/* Five-point Star of Aspiring Excellence */}
        <polygon
          points="60,20 63,27 70,27 65,32 67,39 60,35 53,39 55,32 50,27 57,27"
          fill="url(#goldGrad)"
        />

        {/* Motto Ribbon Banner */}
        <path
          d="M20 114 Q60 128 100 114 L95 125 Q60 134 25 125 Z"
          fill="url(#goldGrad)"
          stroke="#78350F"
          strokeWidth="0.8"
        />
        <text
          x="60"
          y="123"
          textAnchor="middle"
          fill="#1C1917"
          fontSize="5.5"
          fontWeight="700"
          letterSpacing="0.8"
          fontFamily="sans-serif"
        >
          NURTURING EXCELLENCE
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif tracking-tight font-bold text-base sm:text-lg leading-tight ${
              variant === 'light'
                ? 'text-slate-900'
                : variant === 'dark'
                ? 'text-white'
                : 'text-amber-300'
            }`}
          >
            MAAI-MAHIU GIRLS
          </span>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-800 dark:text-emerald-300">
            High School · Nakuru County
          </span>
        </div>
      )}
    </div>
  );
};
