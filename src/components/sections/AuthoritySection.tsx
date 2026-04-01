import { TrendingUp, Target, BarChart3, Users } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [Users, Target, TrendingUp, BarChart3];

export const AuthoritySection = () => {
  const { content } = useContent();
  if (!content.sections.authority) return null;

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.authorityStats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center space-y-3 p-6">
                <Icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
