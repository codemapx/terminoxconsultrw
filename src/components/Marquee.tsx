type MarqueeProps = {
  items: string[];
  className?: string;
};

/** Infinite scrolling keyword band. */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
      />
      <ul className="flex w-max shrink-0 items-center gap-8 animate-marquee">
        {doubled.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {item}
            </span>
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}
