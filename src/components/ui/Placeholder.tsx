type PlaceholderProps = {
  label: string;
  ratio?: string;
  kicker?: string;
  tone?: "fog" | "sage" | "primary" | "dark" | "cream";
  tall?: string;
  className?: string;
};

const TONE_STYLES: Record<string, { bg: string; text: string }> = {
  fog: { bg: "var(--c-fog)", text: "var(--c-dark)" },
  sage: { bg: "var(--c-sage)", text: "var(--c-dark)" },
  primary: { bg: "var(--c-primary)", text: "var(--c-dark)" },
  dark: { bg: "var(--c-dark)", text: "var(--c-cream)" },
  cream: { bg: "var(--c-cream)", text: "var(--c-dark)" },
};

export function Placeholder({
  label,
  ratio = "1/1",
  kicker = "PHOTO",
  tone = "fog",
  tall,
  className = "",
}: PlaceholderProps) {
  const style = TONE_STYLES[tone];
  return (
    <div
      className={`relative overflow-hidden flex items-end justify-start w-full ${className}`}
      style={{
        aspectRatio: tall ? undefined : ratio,
        height: tall || undefined,
        background: style.bg,
        color: style.text,
      }}
    >
      {/* Stripe pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 18px, rgba(0,0,0,0.04) 18px 19px)",
        }}
      />
      <div className="relative p-3 font-mono text-[9.5px] tracking-[0.16em] uppercase flex flex-col gap-1 leading-tight">
        <span className="opacity-55">{kicker}</span>
        <span className="opacity-90">{label}</span>
      </div>
    </div>
  );
}
