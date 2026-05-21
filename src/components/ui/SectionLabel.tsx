interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3">
      <span className="w-5 h-px bg-accent" />
      {children}
    </p>
  );
}
