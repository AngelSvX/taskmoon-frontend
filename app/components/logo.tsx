export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-aurora/70 shadow-[0_0_20px_-4px_rgba(124,108,255,0.8)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5 text-[#0b0d14]"
          aria-hidden="true"
        >
          <path
            d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a7 7 0 1 0 10.7 10.7Z"
            fill="currentColor"
          />
          <circle cx="15.5" cy="7" r="1.1" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-white">
        task<span className="text-brand-400">moon</span>
      </span>
    </span>
  );
}
