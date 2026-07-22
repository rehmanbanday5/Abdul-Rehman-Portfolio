/**
 * Reusable section heading.
 * Index renders as a small bracketed tag, e.g. "[ 02 — Skills ]" — a quiet,
 * editorial marker rather than a code-comment gimmick.
 */
export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 mb-6 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-signal">
          {index} — {label}
        </span>
        <span className="h-px w-10 bg-hairline-strong" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-ink leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-ink-soft text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
