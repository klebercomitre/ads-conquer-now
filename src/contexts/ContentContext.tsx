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

export interface OutcomeItem { id: string; title: string; desc?: string; }
export interface OtherServiceItem { id: string; title: string; desc: string; }
export interface WhyUsItem { id: string; title: string; desc: string; }
export interface CaseItem {
  id: string;
  logoKey: string;
  name: string;
  segment: string;
  objective: string;
  strategy: string;
  result: string;
}
export interface AnimatedStat { id: string; value: string; label: string; }

export interface SectionVisibility {
  hero: boolean;
  authority: boolean;
  grow: boolean;
  pain: boolean;
  outcomes: boolean;
  solution: boolean;
  howItWorks: boolean;
  benefits: boolean;
  cases: boolean;
  whyUs: boolean;
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
  otherServicesTitle: string;
  otherServicesItems: OtherServiceItem[];
  howTitle: string;
  howSubtitle: string;
  howSteps: StepItem[];
  benefitsTitle: string;
  benefitItems: BenefitItem[];
  benefitsCtaText: string;
  benefitsHighlightValue: string;
  benefitsHighlightLabel: string;
  growTitle: string;
  growParagraphs: string[];
  outcomesTitle: string;
  outcomesSubtitle: string;
  outcomesItems: OutcomeItem[];
  whyUsTitle: string;
  whyUsSubtitle: string;
  whyUsItems: WhyUsItem[];
  casesTitle: string;
  casesSubtitle: string;
  cases: CaseItem[];
  animatedStatsTitle: string;
  animatedStatsSubtitle: string;
  animatedStats: AnimatedStat[];
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
  heroHeadline: "Já anuncia e não vende? Ou ainda não anuncia e perde clientes todos os dias?",
  heroHighlight: "A gente resolve os dois.",
  heroSubheadline: "Na Acelera Ads, transformamos investimento em marketing em clientes reais. Criamos estratégias com Google Ads e Meta Ads para aumentar suas vendas, gerar oportunidades todos os dias e fazer sua empresa crescer com previsibilidade.",
  heroCtaText: "Quero uma Análise Gratuita",
  heroBadges: ["✓ Google Ads", "✓ Meta Ads", "✓ +30 empresas atendidas", "✓ Foco em resultados"],
  authorityStats: [
    { value: "+30", label: "Empresas atendidas" },
    { value: "Google & Meta", label: "Ads certificados" },
    { value: "Diária", label: "Otimização de campanhas" },
    { value: "100%", label: "Foco em resultado" },
  ],
  painTitle: "Se você é dono de empresa, provavelmente já sentiu isso",
  painSubtitle: "A maior parte dos negócios trava por um dos motivos abaixo. Não é falta de esforço — é falta de estratégia certa.",
  painItems: [
    { id: "1", title: "O movimento caiu e você não sabe o motivo", desc: "As vendas oscilam, o telefone toca menos e você não tem clareza do que mudou." },
    { id: "2", title: "Sua empresa depende apenas de indicação", desc: "Quando a indicação não vem, o mês trava. Falta um canal previsível de novos clientes." },
    { id: "3", title: "Você investe em anúncios e não vê retorno", desc: "Já pagou por anúncios sem entender o que funcionou — e sente que gastou à toa." },
    { id: "4", title: "Seus concorrentes aparecem mais que você", desc: "Quando o cliente pesquisa no Google ou nas redes, é a marca deles que aparece primeiro." },
    { id: "5", title: "Você precisa vender mais, mas não sabe por onde começar", desc: "Existem muitas opções — Google, Meta, TikTok, site — e falta um plano claro." },
    { id: "6", title: "Você quer crescer, mas falta previsibilidade", desc: "Meses bons e meses ruins impedem qualquer plano sério de expansão." },
  ],
  solutionTitle: "Como colocamos sua empresa na frente de quem quer comprar",
  solutionSubtitle: "Não vendemos plataformas. Entregamos oportunidades reais de venda.",
  solutionItems: [
    { id: "1", title: "Google Ads", desc: "Sua empresa aparece exatamente quando alguém está procurando pelo seu produto ou serviço — pronto para comprar." },
    { id: "2", title: "Meta Ads", desc: "Alcance milhares de pessoas no Instagram e Facebook e transforme visualizações em clientes reais." },
    { id: "3", title: "Landing Pages", desc: "Páginas desenvolvidas para converter visitantes em orçamentos, agendamentos e vendas." },
  ],
  solutionCtaText: "Quero vender mais",
  otherServicesTitle: "Outras soluções",
  otherServicesItems: [
    { id: "1", title: "TikTok Ads", desc: "Alcance uma nova audiência com anúncios em vídeo de alto engajamento." },
    { id: "2", title: "Consultoria", desc: "Direção estratégica para times internos que já anunciam e querem escalar." },
    { id: "3", title: "Auditoria de campanhas", desc: "Avaliamos suas campanhas atuais e mostramos onde está o dinheiro perdido." },
  ],
  howTitle: "Como começamos a trabalhar juntos",
  howSubtitle: "Um processo simples, claro e sem enrolação para transformar seu investimento em vendas.",
  howSteps: [
    { id: "1", step: "01", title: "Análise gratuita", desc: "Entendemos seu negócio, seus objetivos e o momento atual da sua empresa." },
    { id: "2", step: "02", title: "Estratégia sob medida", desc: "Definimos o plano ideal para trazer os clientes certos, no momento certo." },
    { id: "3", step: "03", title: "Campanhas no ar", desc: "Criamos, configuramos e colocamos tudo para rodar com precisão." },
    { id: "4", step: "04", title: "Otimização e crescimento", desc: "Acompanhamos os números todos os dias para escalar seus resultados." },
  ],
  benefitsTitle: "O que muda quando sua empresa começa a anunciar da forma certa",
  benefitItems: [
    { id: "1", text: "Mais clientes entrando em contato todos os dias" },
    { id: "2", text: "Mais pedidos de orçamento chegando" },
    { id: "3", text: "Mais vendas fechadas com previsibilidade" },
    { id: "4", text: "Mais reconhecimento da sua marca na cidade" },
    { id: "5", text: "Presença forte no Google e nas redes sociais" },
    { id: "6", text: "Investimento feito com estratégia e acompanhamento" },
  ],
  benefitsCtaText: "Quero começar a vender mais",
  benefitsHighlightValue: "3x",
  benefitsHighlightLabel: "mais resultado\ncom estratégia certa",
  growTitle: "Sua empresa merece crescer todos os meses",
  growParagraphs: [
    "Todos os dias pessoas procuram no Google, Instagram e Facebook por produtos e serviços como os seus.",
    "A pergunta é: quando elas procuram, encontram sua empresa ou encontram o seu concorrente?",
    "É exatamente isso que fazemos. Criamos campanhas inteligentes para colocar sua empresa na frente das pessoas certas, no momento certo — aumentando as chances de gerar novos clientes todos os dias.",
  ],
  outcomesTitle: "O que muda quando sua empresa anuncia da forma certa",
  outcomesSubtitle: "Estes são os resultados que os empresários passam a ver quando param de improvisar e começam a trabalhar com estratégia.",
  outcomesItems: [
    { id: "1", title: "Mais clientes entrando em contato", desc: "Seu WhatsApp e telefone passam a receber contatos qualificados de quem realmente quer comprar." },
    { id: "2", title: "Mais pedidos de orçamento", desc: "As oportunidades param de depender só da indicação e passam a chegar de forma constante." },
    { id: "3", title: "Mais vendas", desc: "Com público certo e mensagem certa, sua taxa de fechamento cresce naturalmente." },
    { id: "4", title: "Mais reconhecimento da marca", desc: "Sua empresa vira referência para o cliente que ainda nem sabia que precisava de você." },
    { id: "5", title: "Presença no Google e nas redes", desc: "Você aparece quando o cliente pesquisa e continua aparecendo enquanto ele decide." },
    { id: "6", title: "Investimento com estratégia", desc: "Cada real gasto passa a ter propósito, acompanhamento e prestação de contas." },
  ],
  whyUsTitle: "Por que escolher a Acelera Ads",
  whyUsSubtitle: "O que nos torna diferentes é o compromisso real com o resultado do seu negócio.",
  whyUsItems: [
    { id: "1", title: "Atendimento próximo", desc: "Você fala direto com quem cuida das suas campanhas, sem intermediários." },
    { id: "2", title: "Estratégias personalizadas", desc: "Nada de fórmula pronta. Cada empresa recebe um plano sob medida." },
    { id: "3", title: "Otimização diária", desc: "Ajustamos as campanhas todos os dias para melhorar o retorno." },
    { id: "4", title: "Relatórios claros", desc: "Você entende exatamente o que está acontecendo com o seu investimento." },
    { id: "5", title: "Foco em retorno", desc: "Nosso trabalho é medido pelo dinheiro que entra no seu caixa, não por cliques." },
    { id: "6", title: "Decisões baseadas em dados", desc: "Nada de achismo. Cada movimento é feito com base nos números." },
  ],
  casesTitle: "Empresas que decidiram acelerar seus resultados",
  casesSubtitle: "Negócios reais que confiam no nosso trabalho para crescer com previsibilidade.",
  cases: [
    { id: "1", logoKey: "solution-cell", name: "Solution Cell", segment: "Assistência técnica de celulares", objective: "Aumentar o volume de clientes na loja física.", strategy: "Google Ads local + Meta Ads segmentado por bairro.", result: "" },
    { id: "2", logoKey: "arena-castelo", name: "Arena Castelo", segment: "Esporte e lazer", objective: "Encher a agenda de reservas da arena.", strategy: "Meta Ads focado em times e grupos + landing page de reserva.", result: "" },
    { id: "3", logoKey: "senhor-pizza", name: "Senhor Pizza", segment: "Alimentação / delivery", objective: "Aumentar o número de pedidos por dia.", strategy: "Meta Ads com foco em promoção + campanhas de fidelização.", result: "" },
    { id: "4", logoKey: "smart-assistencia", name: "Smart Assistência Técnica", segment: "Serviços técnicos", objective: "Gerar orçamentos qualificados todos os dias.", strategy: "Google Ads em palavras de alta intenção + Meta Ads local.", result: "" },
    { id: "5", logoKey: "ishop-toledo", name: "iShop Toledo", segment: "Varejo de eletrônicos", objective: "Aumentar tráfego qualificado e vendas na loja.", strategy: "Campanhas de venda com foco em produtos de alto giro.", result: "" },
    { id: "6", logoKey: "favoritta", name: "Favoritta Store", segment: "Moda", objective: "Escalar as vendas online e presenciais.", strategy: "Meta Ads criativo + remarketing para carrinhos abandonados.", result: "" },
    { id: "7", logoKey: "fretesja", name: "FretesJá", segment: "Logística", objective: "Captar clientes que precisam de frete com urgência.", strategy: "Google Ads com foco em intenção de compra imediata.", result: "" },
  ],
  animatedStatsTitle: "Números que mostram nosso compromisso",
  animatedStatsSubtitle: "Trabalhamos todos os dias para fazer sua empresa vender mais.",
  animatedStats: [
    { id: "1", value: "30", label: "Empresas atendidas" },
    { id: "2", value: "1", label: "Google Ads" },
    { id: "3", value: "1", label: "Meta Ads" },
    { id: "4", value: "1", label: "TikTok Ads" },
    { id: "5", value: "1", label: "Landing Pages" },
  ],
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
  ctaTitle: "Sua empresa pode vender mais.",
  ctaSubtitle: "Todos os dias clientes procuram empresas como a sua. A única pergunta é: eles estão encontrando você ou seu concorrente? Solicite uma análise gratuita e descubra como podemos ajudar sua empresa a crescer.",
  ctaButtonText: "Falar com um Especialista",
  faqTitle: "Perguntas frequentes",
  faqItems: [
    { id: "1", question: "Vou realmente vender mais com a Acelera Ads?", answer: "Nosso trabalho é feito para gerar oportunidades reais de venda. Combinamos estratégia, criativos e otimização diária para colocar sua empresa na frente de quem quer comprar. Não prometemos milagre — prometemos método, transparência e foco em resultado." },
    { id: "2", question: "Quanto preciso investir para começar?", answer: "O investimento ideal depende do seu segmento e da sua meta. Na análise gratuita mostramos o valor mais indicado para o seu caso. Normalmente atendemos empresas a partir de R$ 1.000/mês em mídia." },
    { id: "3", question: "Em quanto tempo começo a ver resultado?", answer: "Os primeiros resultados costumam aparecer entre 7 e 15 dias após o início das campanhas. O potencial máximo é alcançado entre 30 e 60 dias, com otimização contínua." },
    { id: "4", question: "Vocês atendem meu tipo de empresa?", answer: "Atendemos comércios locais, prestadores de serviço, e-commerces, indústrias e clínicas em Umuarama e em todo o Brasil. Se seu cliente está no Google ou nas redes sociais, podemos ajudar." },
    { id: "5", question: "Preciso ter site ou loja virtual?", answer: "Não é obrigatório. Trabalhamos também com landing pages, Instagram e WhatsApp. Definimos o melhor caminho na análise inicial." },
    { id: "6", question: "Como funciona o contrato?", answer: "Planos mensais, sem fidelidade longa. Acreditamos que os resultados devem falar por si só a cada mês." },
  ],
  footerText: `© ${new Date().getFullYear()} Acelera Ads · Acelerador de Vendas. Todos os direitos reservados.`,
  sections: {
    hero: true, authority: true, grow: true, pain: true, outcomes: true,
    solution: true, howItWorks: true, benefits: false, cases: true, whyUs: true,
    testimonials: false, objections: false, cta: true, faq: true,
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
      .update({ content: JSON.parse(JSON.stringify(newContent)) })
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
