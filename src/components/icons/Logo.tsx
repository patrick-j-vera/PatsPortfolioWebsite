"use client";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className="h-10 w-10"
      aria-label="Patrick Vera logo"
    >
      <rect
        width="40"
        height="40"
        rx="8"
        className="fill-honey"
      />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-warm-white font-serif text-lg font-bold"
        fontSize="20"
      >
        PV
      </text>
    </svg>
  );
}
