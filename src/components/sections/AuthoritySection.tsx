import { TrendingUp, Target, BarChart3, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "+30", label: "Negócios atendidos" },
  { icon: Target, value: "Meta & Google", label: "Ads especializados" },
  { icon: TrendingUp, value: "ROI", label: "Foco em resultados reais" },
  { icon: BarChart3, value: "100%", label: "Orientado por dados" },
];

export const AuthoritySection = () => (
  <section className="py-16 bg-secondary">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-3 p-6">
            <stat.icon className="w-8 h-8 mx-auto text-primary" />
            <div className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
