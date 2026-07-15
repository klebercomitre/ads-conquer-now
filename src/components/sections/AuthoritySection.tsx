import { useEffect, useRef, useState } from "react";
import { useContent } from "@/contexts/ContentContext";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const numeric = parseFloat(value.replace(/[^\d.]/g, ""));
  const isNumber = !isNaN(numeric) && numeric > 0;
  const prefix = isNumber && /^\+/.test(value) ? "+" : "";
  const suffix = isNumber ? value.replace(/^[+]?\d+(\.\d+)?/, "") : "";

  useEffect(() => {
    if (!isNumber || !ref.current) return;
    const el = ref.current;
    let started = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(numeric * eased);
            setDisplay(`${prefix}${current}${suffix}`);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumber, numeric, prefix, suffix]);

  if (!isNumber) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{display}</span>;
};

export const AuthoritySection = () => {
  const { content } = useContent();
  if (!content.sections.authority) return null;

  const stats = content.animatedStats && content.animatedStats.length > 0
    ? content.animatedStats
    : content.authorityStats.map((s, i) => ({ id: String(i), value: s.value, label: s.label }));

  return (
    <section className="py-20 md:py-28 bg-background border-y border-border">
      <div className="container px-5 md:px-8">
        {content.animatedStatsTitle && (
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              {content.animatedStatsTitle}
            </h2>
            {content.animatedStatsSubtitle && (
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
                {content.animatedStatsSubtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.id || i}
              className="text-center px-4 py-4 md:py-2 md:border-r md:border-border last:md:border-r-0"
            >
              <div className={`font-extrabold text-foreground tracking-tight ${stat.value === "✓" ? "text-3xl md:text-4xl text-primary" : "text-4xl md:text-5xl lg:text-6xl"}`}>
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-3 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};