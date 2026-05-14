type RuleProps = {
  children?: React.ReactNode;
  weight?: number;
};

export function Rule({ children, weight = 1 }: RuleProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <span
        className="flex-1 opacity-85"
        style={{ height: `${weight}px`, background: "currentColor" }}
      />
      {children && (
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
          {children}
        </span>
      )}
      <span
        className="flex-1 opacity-85"
        style={{ height: `${weight}px`, background: "currentColor" }}
      />
    </div>
  );
}
