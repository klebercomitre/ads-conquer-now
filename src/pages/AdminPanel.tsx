import { useState } from "react";
import { useContent, type SiteContent, type Testimonial, type FaqItem, type PainItem, type SolutionItem, type StepItem, type BenefitItem, type ObjectionItem } from "@/contexts/ContentContext";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Plus, ArrowLeft, RotateCcw, LogOut, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AdminPanel = () => {
  const { content, updateContent, resetContent, saving } = useContent();
  const { signOut } = useAuth();

  const handleReset = () => {
    if (window.confirm("Tem certeza? Isso vai resetar TODO o conteúdo para o padrão.")) {
      resetContent();
      toast.success("Conteúdo resetado com sucesso!");
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Ver site
            </Link>
            <h1 className="text-lg font-bold text-foreground">Painel Administrativo</h1>
          </div>
          <div className="flex items-center gap-4">
            {saving && <span className="flex items-center gap-1 text-xs text-muted-foreground"><Loader2 className="w-3 h-3 animate-spin" />Salvando...</span>}
            <button onClick={handleReset} className="flex items-center gap-2 text-sm text-destructive hover:text-destructive/80 transition-colors">
              <RotateCcw className="w-4 h-4" />
              Resetar tudo
            </button>
            <button onClick={signOut} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <Tabs defaultValue="tracking" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-card p-1">
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="sections">Seções</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="authority">Autoridade</TabsTrigger>
            <TabsTrigger value="pain">Dores</TabsTrigger>
            <TabsTrigger value="solution">Solução</TabsTrigger>
            <TabsTrigger value="howItWorks">Como Funciona</TabsTrigger>
            <TabsTrigger value="benefits">Benefícios</TabsTrigger>
            <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
            <TabsTrigger value="objections">Objeções</TabsTrigger>
            <TabsTrigger value="cta">CTA</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="footer">Rodapé</TabsTrigger>
          </TabsList>

          {/* TRACKING */}
          <TabsContent value="tracking">
            <Card title="Tracking & WhatsApp">
              <Field label="Número do WhatsApp (com DDI)" value={content.whatsappNumber} onChange={(v) => updateContent({ whatsappNumber: v })} placeholder="5511999999999" />
              <Field label="Mensagem padrão do WhatsApp" value={content.whatsappMessage} onChange={(v) => updateContent({ whatsappMessage: v })} multiline />
              <Field label="ID do Meta Pixel" value={content.metaPixelId} onChange={(v) => updateContent({ metaPixelId: v })} placeholder="000000000000000" />
              <Field label="ID do Google Tag Manager" value={content.gtmId} onChange={(v) => updateContent({ gtmId: v })} placeholder="GTM-XXXXXXX" />
            </Card>
          </TabsContent>

          {/* SECTIONS VISIBILITY */}
          <TabsContent value="sections">
            <Card title="Ativar / Desativar Seções">
              <div className="space-y-4">
                {(Object.keys(content.sections) as Array<keyof typeof content.sections>).map((key) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label className="capitalize text-foreground">{sectionLabels[key]}</Label>
                    <Switch
                      checked={content.sections[key]}
                      onCheckedChange={(checked) =>
                        updateContent({ sections: { ...content.sections, [key]: checked } })
                      }
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* HERO */}
          <TabsContent value="hero">
            <Card title="Seção Hero">
              <Field label="Headline principal" value={content.heroHeadline} onChange={(v) => updateContent({ heroHeadline: v })} />
              <Field label="Destaque (cor verde)" value={content.heroHighlight} onChange={(v) => updateContent({ heroHighlight: v })} />
              <Field label="Sub-headline" value={content.heroSubheadline} onChange={(v) => updateContent({ heroSubheadline: v })} multiline />
              <Field label="Texto do botão CTA" value={content.heroCtaText} onChange={(v) => updateContent({ heroCtaText: v })} />
              <ListEditor
                label="Badges"
                items={content.heroBadges}
                onChange={(items) => updateContent({ heroBadges: items })}
              />
            </Card>
          </TabsContent>

          {/* AUTHORITY */}
          <TabsContent value="authority">
            <Card title="Seção Autoridade">
              {content.authorityStats.map((stat, i) => (
                <div key={i} className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                  <Field label="Valor" value={stat.value} onChange={(v) => {
                    const updated = [...content.authorityStats];
                    updated[i] = { ...updated[i], value: v };
                    updateContent({ authorityStats: updated });
                  }} />
                  <Field label="Label" value={stat.label} onChange={(v) => {
                    const updated = [...content.authorityStats];
                    updated[i] = { ...updated[i], label: v };
                    updateContent({ authorityStats: updated });
                  }} />
                </div>
              ))}
            </Card>
          </TabsContent>

          {/* PAIN */}
          <TabsContent value="pain">
            <Card title="Seção Dores">
              <Field label="Título" value={content.painTitle} onChange={(v) => updateContent({ painTitle: v })} />
              <Field label="Subtítulo" value={content.painSubtitle} onChange={(v) => updateContent({ painSubtitle: v })} multiline />
              <ItemListEditor<PainItem>
                items={content.painItems}
                onChange={(items) => updateContent({ painItems: items })}
                fields={["title", "desc"]}
                fieldLabels={{ title: "Título", desc: "Descrição" }}
                createNew={() => ({ id: crypto.randomUUID(), title: "", desc: "" })}
              />
            </Card>
          </TabsContent>

          {/* SOLUTION */}
          <TabsContent value="solution">
            <Card title="Seção Solução">
              <Field label="Título" value={content.solutionTitle} onChange={(v) => updateContent({ solutionTitle: v })} />
              <Field label="Subtítulo" value={content.solutionSubtitle} onChange={(v) => updateContent({ solutionSubtitle: v })} />
              <Field label="Texto do CTA" value={content.solutionCtaText} onChange={(v) => updateContent({ solutionCtaText: v })} />
              <ItemListEditor<SolutionItem>
                items={content.solutionItems}
                onChange={(items) => updateContent({ solutionItems: items })}
                fields={["title", "desc"]}
                fieldLabels={{ title: "Título", desc: "Descrição" }}
                createNew={() => ({ id: crypto.randomUUID(), title: "", desc: "" })}
              />
            </Card>
          </TabsContent>

          {/* HOW IT WORKS */}
          <TabsContent value="howItWorks">
            <Card title="Seção Como Funciona">
              <Field label="Título" value={content.howTitle} onChange={(v) => updateContent({ howTitle: v })} />
              <Field label="Subtítulo" value={content.howSubtitle} onChange={(v) => updateContent({ howSubtitle: v })} />
              <ItemListEditor<StepItem>
                items={content.howSteps}
                onChange={(items) => updateContent({ howSteps: items })}
                fields={["step", "title", "desc"]}
                fieldLabels={{ step: "Número", title: "Título", desc: "Descrição" }}
                createNew={() => ({ id: crypto.randomUUID(), step: "", title: "", desc: "" })}
              />
            </Card>
          </TabsContent>

          {/* BENEFITS */}
          <TabsContent value="benefits">
            <Card title="Seção Benefícios">
              <Field label="Título" value={content.benefitsTitle} onChange={(v) => updateContent({ benefitsTitle: v })} />
              <Field label="Texto do CTA" value={content.benefitsCtaText} onChange={(v) => updateContent({ benefitsCtaText: v })} />
              <Field label="Valor destaque" value={content.benefitsHighlightValue} onChange={(v) => updateContent({ benefitsHighlightValue: v })} />
              <Field label="Label destaque" value={content.benefitsHighlightLabel} onChange={(v) => updateContent({ benefitsHighlightLabel: v })} multiline />
              <ItemListEditor<BenefitItem>
                items={content.benefitItems}
                onChange={(items) => updateContent({ benefitItems: items })}
                fields={["text"]}
                fieldLabels={{ text: "Benefício" }}
                createNew={() => ({ id: crypto.randomUUID(), text: "" })}
              />
            </Card>
          </TabsContent>

          {/* TESTIMONIALS */}
          <TabsContent value="testimonials">
            <Card title="Depoimentos">
              <Field label="Título" value={content.testimonialsTitle} onChange={(v) => updateContent({ testimonialsTitle: v })} />
              <Field label="Subtítulo" value={content.testimonialsSubtitle} onChange={(v) => updateContent({ testimonialsSubtitle: v })} />
              <ItemListEditor<Testimonial>
                items={content.testimonials}
                onChange={(items) => updateContent({ testimonials: items })}
                fields={["name", "role", "text"]}
                fieldLabels={{ name: "Nome", role: "Cargo / Empresa", text: "Depoimento" }}
                createNew={() => ({ id: crypto.randomUUID(), name: "", role: "", text: "" })}
              />
            </Card>
          </TabsContent>

          {/* OBJECTIONS */}
          <TabsContent value="objections">
            <Card title="Quebra de Objeções">
              <Field label="Título" value={content.objectionsTitle} onChange={(v) => updateContent({ objectionsTitle: v })} />
              <ItemListEditor<ObjectionItem>
                items={content.objectionItems}
                onChange={(items) => updateContent({ objectionItems: items })}
                fields={["question", "answer"]}
                fieldLabels={{ question: "Objeção", answer: "Resposta" }}
                createNew={() => ({ id: crypto.randomUUID(), question: "", answer: "" })}
              />
            </Card>
          </TabsContent>

          {/* CTA */}
          <TabsContent value="cta">
            <Card title="Seção CTA Final">
              <Field label="Título" value={content.ctaTitle} onChange={(v) => updateContent({ ctaTitle: v })} />
              <Field label="Subtítulo" value={content.ctaSubtitle} onChange={(v) => updateContent({ ctaSubtitle: v })} multiline />
              <Field label="Texto do botão" value={content.ctaButtonText} onChange={(v) => updateContent({ ctaButtonText: v })} />
            </Card>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <Card title="Perguntas Frequentes">
              <Field label="Título" value={content.faqTitle} onChange={(v) => updateContent({ faqTitle: v })} />
              <ItemListEditor<FaqItem>
                items={content.faqItems}
                onChange={(items) => updateContent({ faqItems: items })}
                fields={["question", "answer"]}
                fieldLabels={{ question: "Pergunta", answer: "Resposta" }}
                createNew={() => ({ id: crypto.randomUUID(), question: "", answer: "" })}
              />
            </Card>
          </TabsContent>

          {/* FOOTER */}
          <TabsContent value="footer">
            <Card title="Rodapé">
              <Field label="Texto do rodapé" value={content.footerText} onChange={(v) => updateContent({ footerText: v })} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// ---- Reusable sub-components ----

const sectionLabels: Record<string, string> = {
  hero: "Hero (primeira dobra)",
  authority: "Autoridade / Estatísticas",
  pain: "Dores do cliente",
  solution: "Solução",
  howItWorks: "Como funciona",
  benefits: "Benefícios",
  testimonials: "Depoimentos",
  objections: "Quebra de objeções",
  cta: "CTA final",
  faq: "FAQ",
};

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card border rounded-xl p-6 space-y-5">
    <h2 className="text-xl font-bold text-foreground">{title}</h2>
    {children}
  </div>
);

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm font-medium text-foreground">{label}</Label>
    {multiline ? (
      <Textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3} />
    ) : (
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    )}
  </div>
);

const ListEditor = ({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium text-foreground">{label}</Label>
    {items.map((item, i) => (
      <div key={i} className="flex gap-2">
        <Input
          value={item}
          onChange={(e) => {
            const updated = [...items];
            updated[i] = e.target.value;
            onChange(updated);
          }}
        />
        <button
          onClick={() => onChange(items.filter((_, idx) => idx !== i))}
          className="p-2 text-destructive hover:text-destructive/80"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    ))}
    <button
      onClick={() => onChange([...items, ""])}
      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
    >
      <Plus className="w-4 h-4" /> Adicionar
    </button>
  </div>
);

function ItemListEditor<T extends { id: string }>({
  items,
  onChange,
  fields,
  fieldLabels,
  createNew,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  fields: (keyof T)[];
  fieldLabels: Partial<Record<keyof T, string>>;
  createNew: () => T;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={item.id} className="p-4 border rounded-lg space-y-3 relative">
          <button
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="absolute top-3 right-3 text-destructive hover:text-destructive/80"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {fields.filter((f) => f !== "id").map((field) => (
            <Field
              key={String(field)}
              label={String(fieldLabels[field] || field)}
              value={String(item[field] || "")}
              onChange={(v) => {
                const updated = [...items];
                updated[i] = { ...updated[i], [field]: v };
                onChange(updated);
              }}
              multiline={String(field).includes("desc") || String(field).includes("text") || String(field).includes("answer")}
            />
          ))}
        </div>
      ))}
      <button
        onClick={() => onChange([...items, createNew()])}
        className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
      >
        <Plus className="w-4 h-4" /> Adicionar item
      </button>
    </div>
  );
}

export default AdminPanel;
