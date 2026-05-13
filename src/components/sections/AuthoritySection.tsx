import { TrendingUp, Target, BarChart3, Users } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [Users, Target, TrendingUp, BarChart3];

export const AuthoritySection = () => {
  const { content } = useContent();
  if (!content.sections.authority) return null;

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="container px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
          {content.authorityStats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-4 py-6 md:py-2 md:border-r md:border-border last:border-r-0"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
