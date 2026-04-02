import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PainItem {
  id: string;
  title: string;
  desc: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  desc: string;
}

export interface StepItem {
  id: string;
  step: string;
  title: string;
  desc: string;
}

export interface BenefitItem {
  id: string;
  text: string;
}

export interface ObjectionItem {
  id: string;
  question: string;
  answer: string;
}

export interface SectionVisibility {
  hero: boolean;
  authority: boolean;
  pain: boolean;
  solution: boolean;
  howItWorks: boolean;
  benefits: boolean;
  testimonials: boolean;
  objections: boolean;
  cta: boolean;
  faq: boolean;
}

export interface SiteContent {
  whatsappNumber: string;
  whatsappMessage: string;
  metaPixelId: string;
  gtmId: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  heroCtaText: string;
  heroBadges: string[];
  authorityStats: { value: string; label: string }[];
  painTitle: string;
  painSubtitle: string;
  painItems: PainItem[];
  solutionTitle: string;
  solutionSubtitle: string;
  solutionItems: SolutionItem[];
  solutionCtaText: string;
  howTitle: string;
  howSubtitle: string;
  howSteps: StepItem[];
  benefitsTitle: string;
  benefitItems: BenefitItem[];
  benefitsCtaText: string;
  benefitsHighlightValue: string;
  benefitsHighlightLabel: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];
  objectionsTitle: string;
  objectionItems: ObjectionItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  faqTitle: string;
  faqItems: FaqItem[];
  footerText: string;
  sections: SectionVisibility;
}

export const defaultContent: SiteContent = {
  whatsappNumber: "5500000000000",
  whatsappMessage: "Olá! Quero saber mais sobre a gestão de tráfego pago.",
  metaPixelId: "000000000000000",
  gtmId: "GTM-XXXXXXX",
  heroHeadline: "Pare de gastar dinheiro com anúncios que",
  heroHighlight: "não vendem.",
  heroSubheadline: "Na Acelera Ads, transformamos investimento em tráfego em vendas previsíveis todos os dias. Chega de jogar dinheiro fora com campanhas que não dão retorno.",
  heroCtaText: "Falar no WhatsApp",
  heroBadges: ["✓ Meta Ads", "✓ Google Ads", "✓ +30 negócios atendidos", "✓ Foco em ROI"],
  authorityStats: [
    { value: "+30", label: "Negócios atendidos" },
    { value: "Meta & Google", label: "Ads especializados" },
    { value: "ROI", label: "Foco em resultados reais" },
    { value: "100%", label: "Orientado por dados" },
  ],
  painTitle: "Isso te parece familiar?",
  painSubtitle: "Se você já passou por alguma dessas situações, saiba que não é culpa sua. A maioria dos negócios sofre com tráfego mal gerenciado.",
  painItems: [
    { id: "1", title: "Já investiu e não teve retorno?", desc: "Você colocou dinheiro em anúncios, mas as vendas não vieram. Parece que jogou dinheiro fora." },
    { id: "2", title: "Leads desqualificados?", desc: "Os contatos que chegam não compram, não respondem ou não são o público certo." },
    { id: "3", title: "Falta de previsibilidade?", desc: "Não sabe quantos clientes vai ter no próximo mês. Vive na montanha-russa de vendas." },
    { id: "4", title: "Não entende os números?", desc: "Relatórios confusos, métricas que não fazem sentido e nenhuma clareza sobre o que está funcionando." },
  ],
  solutionTitle: "A Acelera Ads resolve isso pra você",
  solutionSubtitle: "Não vendemos cliques. Vendemos resultados.",
  solutionItems: [
    { id: "1", title: "Estratégia personalizada", desc: "Cada negócio é único. Criamos um plano sob medida para o seu." },
    { id: "2", title: "Gestão profissional", desc: "Campanhas criadas e gerenciadas por especialistas certificados." },
    { id: "3", title: "Otimização contínua", desc: "Monitoramento diário e ajustes para maximizar seus resultados." },
    { id: "4", title: "Análise de dados", desc: "Decisões baseadas em números reais, não em achismos." },
  ],
  solutionCtaText: "Quero resultados reais",
  howTitle: "Como funciona",
  howSubtitle: "Um processo simples e transparente para transformar anúncios em vendas.",
  howSteps: [
    { id: "1", step: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, público e concorrência a fundo." },
    { id: "2", step: "02", title: "Estratégia", desc: "Criamos o plano ideal para atrair os clientes certos." },
    { id: "3", step: "03", title: "Implementação", desc: "Colocamos as campanhas no ar com precisão cirúrgica." },
    { id: "4", step: "04", title: "Otimização e escala", desc: "Melhoramos continuamente para escalar seus resultados." },
  ],
  benefitsTitle: "O que você ganha com a Acelera Ads",
  benefitItems: [
    { id: "1", text: "Mais clientes qualificados todos os dias" },
    { id: "2", text: "Aumento real nas vendas" },
    { id: "3", text: "Previsibilidade de faturamento" },
    { id: "4", text: "Crescimento escalável e sustentável" },
    { id: "5", text: "Menos desperdício de dinheiro em anúncios" },
    { id: "6", text: "Relatórios claros e transparentes" },
  ],
  benefitsCtaText: "Começar agora",
  benefitsHighlightValue: "3x",
  benefitsHighlightLabel: "mais resultados\ncom tráfego inteligente",
  testimonialsTitle: "Quem já acelerou com a gente",
  testimonialsSubtitle: "Resultados reais de empresários que decidiram parar de perder dinheiro.",
  testimonials: [
    { id: "1", name: "Carlos M.", role: "Dono de E-commerce", text: "Em 3 meses triplicamos o faturamento com as campanhas da Acelera Ads. Profissionais de verdade!" },
    { id: "2", name: "Ana Paula S.", role: "Clínica de Estética", text: "Antes eu gastava sem saber o que funcionava. Agora tenho agenda lotada todos os meses." },
    { id: "3", name: "Roberto L.", role: "Restaurante", text: "Achava que tráfego pago não funcionava para restaurante. A Acelera Ads provou o contrário." },
  ],
  objectionsTitle: "Ainda tem dúvidas?",
  objectionItems: [
    { id: "1", question: '"E se não funcionar?"', answer: "Trabalhamos com análise de dados e otimização contínua. Se algo não funciona, ajustamos rapidamente. Nosso compromisso é com seu resultado." },
    { id: "2", question: '"Já tentei antes e não deu certo"', answer: "Provavelmente você não teve a estratégia certa. A maioria dos negócios que nos procura já passou por isso. Nós mudamos esse cenário." },
    { id: "3", question: '"Tráfego pago é caro"', answer: "Caro é perder vendas todos os dias por não ter presença online profissional. Nossos clientes veem retorno já nas primeiras semanas." },
    { id: "4", question: '"Funciona para o meu nicho?"', answer: "Atendemos desde e-commerces até negócios locais. Se seu público está na internet, podemos alcançá-lo." },
  ],
  ctaTitle: "Quer transformar anúncios em vendas todos os dias?",
  ctaSubtitle: "Fale agora com um especialista e descubra como escalar seu negócio com tráfego pago inteligente.",
  ctaButtonText: "Chamar no WhatsApp agora",
  faqTitle: "Perguntas frequentes",
  faqItems: [
    { id: "1", question: "Quanto preciso investir em anúncios?", answer: "O investimento varia conforme o seu nicho e seus objetivos. Na reunião de diagnóstico, sugerimos o valor ideal para o seu caso. Trabalhamos com negócios a partir de R$ 1.000/mês em mídia." },
    { id: "2", question: "Em quanto tempo vejo resultado?", answer: "Os primeiros resultados costumam aparecer entre 7 e 15 dias. A otimização completa leva em torno de 30 a 60 dias para atingir o potencial máximo." },
    { id: "3", question: "Vocês atendem qualquer tipo de negócio?", answer: "Atendemos diversos segmentos: e-commerces, negócios locais, prestadores de serviço, infoprodutores e mais. Se o seu público está na internet, podemos ajudar." },
    { id: "4", question: "Preciso ter site ou loja virtual?", answer: "Não necessariamente. Podemos trabalhar com landing pages, Instagram, WhatsApp e outras estratégias. Avaliamos o melhor caminho no diagnóstico." },
    { id: "5", question: "Como funciona o contrato?", answer: "Trabalhamos com planos mensais, sem fidelidade longa. Acreditamos que os resultados falam por si só." },
  ],
  footerText: `© ${new Date().getFullYear()} Acelera Ads — Acelerador de Vendas. Todos os direitos reservados.`,
  sections: {
    hero: true, authority: true, pain: true, solution: true, howItWorks: true,
    benefits: true, testimonials: true, objections: true, cta: true, faq: true,
  },
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (partial: Partial<SiteContent>) => void;
  resetContent: () => void;
  getWhatsAppUrl: () => string;
  saving: boolean;
}

const ContentContext = createContext<ContentContextType | null>(null);

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
};

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load from Supabase on mount
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("site_content")
        .select("content")
        .eq("id", "main")
        .single();

      if (data?.content && Object.keys(data.content as object).length > 0) {
        setContent({ ...defaultContent, ...(data.content as Partial<SiteContent>) });
      }
      setLoaded(true);
    };
    load();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("site_content_changes")
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "site_content", filter: "id=eq.main" }, (payload) => {
        if (payload.new?.content && Object.keys(payload.new.content as object).length > 0) {
          setContent({ ...defaultContent, ...(payload.new.content as Partial<SiteContent>) });
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Save to Supabase (debounced via the admin panel)
  const saveToDb = useCallback(async (newContent: SiteContent) => {
    setSaving(true);
    await supabase
      .from("site_content")
      .update({ content: newContent as unknown as Record<string, unknown> })
      .eq("id", "main");
    setSaving(false);
  }, []);

  const updateContent = useCallback((partial: Partial<SiteContent>) => {
    setContent((prev) => {
      const updated = { ...prev, ...partial };
      saveToDb(updated);
      return updated;
    });
  }, [saveToDb]);

  const resetContent = useCallback(() => {
    setContent(defaultContent);
    saveToDb(defaultContent);
  }, [saveToDb]);

  const getWhatsAppUrl = useCallback(() => {
    return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessage)}`;
  }, [content.whatsappNumber, content.whatsappMessage]);

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, getWhatsAppUrl, saving }}>
      {children}
    </ContentContext.Provider>
  );
};
