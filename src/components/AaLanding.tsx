import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useContent } from "@/contexts/ContentContext";
import aceLeraLogo from "@/assets/acelera-logo.svg";
import founders from "@/assets/founders.jpg";
import founderHero from "@/assets/founder-hero.jpg";
import solutionCell from "@/assets/clients/solution-cell.png";
import arenaCastelo from "@/assets/clients/arena-castelo.jpg";
import smartAssistencia from "@/assets/clients/smart-assistencia.jpg";
import ishopToledo from "@/assets/clients/ishop-toledo.jpg";
import nerdLogo from "@/assets/clients/nerd-logo.jpg";
import favoritta from "@/assets/clients/favoritta.jpg";
import fretesja from "@/assets/clients/fretesja.jpg";
import fivegParts from "@/assets/clients/5g-parts.jpg";
import seuJorge from "@/assets/clients/seu-jorge-boteco.png";
import smartMsSolar from "@/assets/clients/smart-ms-solar.jpg";
import ellerSemijoias from "@/assets/clients/eller-semijoias.jpg";
import connectIphone from "@/assets/clients/connect-iphone.jpg";
import otioEnsina from "@/assets/clients/otio-ensina.png";
import "@/styles/landing.css";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.7-.1 1.2Z" />
  </svg>
);

const track = (cta: string) => {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: "whatsapp_click", cta_position: cta });
  (window as any).fbq?.("track", "Contact");
};

const CLIENT_LOGOS = [
  { name: "Solution Cell", img: solutionCell },
  { name: "Arena Castelo", img: arenaCastelo },
  { name: "Smart Assistência", img: smartAssistencia },
  { name: "iShop Toledo", img: ishopToledo },
  { name: "H.Tech", img: nerdLogo },
  { name: "5G Parts", img: fivegParts },
  { name: "Favoritta Store", img: favoritta },
  { name: "Seu Jorge Boteco", img: seuJorge },
  { name: "FretesJá", img: fretesja },
  { name: "Smart MS Solar", img: smartMsSolar },
  { name: "Eller Semijóias", img: ellerSemijoias },
  { name: "Connect iPhone", img: connectIphone },
  { name: "OtioEnsina", img: otioEnsina },
];

export const AaLanding = () => {
  const { content, getWhatsAppUrl } = useContent();
  const headerRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const waHref = getWhatsAppUrl();

  useEffect(() => {
    const hd = headerRef.current;
    const onScroll = () => hd?.classList.toggle("on", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    rootRef.current?.querySelectorAll(".aa-rv").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const wa = (cta: string, extra: React.CSSProperties = {}) => (
    <a
      className="aa-btn aa-btn-wa"
      href={waHref}
      target="_blank"
      rel="noopener"
      data-cta={cta}
      onClick={() => track(cta)}
      style={extra}
    >
      {WA_ICON}
      Quero Vender Mais
    </a>
  );

  return (
    <div className="aa-root" ref={rootRef}>
      <a
        href="#top"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
        onFocus={(e) => (e.currentTarget.style.left = "0")}
        onBlur={(e) => (e.currentTarget.style.left = "-9999px")}
      >
        Pular para o conteúdo
      </a>

      <header id="aa-hd" className="aa-header" ref={headerRef}>
        <div className="aa-wrap aa-nav">
          <a href="#top" aria-label="Acelera Ads, início">
            <img src={aceLeraLogo} alt="Acelera Ads" className="aa-logo" width={150} height={36} />
          </a>
          <a
            className="aa-btn aa-btn-wa"
            href={waHref}
            target="_blank"
            rel="noopener"
            data-cta="header"
            onClick={() => track("header")}
          >
            Falar com Especialista
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="aa-hero" aria-label="Apresentação">
          <div className="aa-wrap aa-hero-grid">
            <div>
              <span className="aa-badge aa-rv">
                <span className="aa-dot" aria-hidden="true" />
                Agenda de análises gratuitas aberta · Umuarama e região
              </span>
              <h1 className="aa-rv" style={{ ["--i" as any]: 1 }}>
                Sua empresa vendendo mais <span className="accent">todos os dias</span>
              </h1>
              <p className="aa-lead aa-rv" style={{ ["--i" as any]: 2 }}>
                Gestão de Google Ads e Meta Ads que transforma seu investimento em clientes reais.
                Você aparece para quem já quer comprar na sua região.
              </p>
              <div className="aa-hero-ctas aa-rv" style={{ ["--i" as any]: 3 }}>
                {wa("hero")}
                <a className="aa-link" href="#sistema">
                  Como funciona
                </a>
              </div>
              <p className="aa-note aa-rv" style={{ ["--i" as any]: 4 }}>
                Gratuita e sem compromisso · Resposta no mesmo dia útil
              </p>
              <div className="aa-trust aa-rv" style={{ ["--i" as any]: 5 }} aria-label="Indicadores de confiança">
                <span><b>✓</b> Google Ads</span>
                <span><b>✓</b> Meta Ads</span>
                <span><b>✓</b> <span className="n">+30 empresas atendidas</span></span>
              </div>
            </div>
            <div className="aa-stage aa-rv" style={{ ["--i" as any]: 2 }}>
              <figure className="aa-stage-card">
                <img
                  src={founderHero}
                  alt="Kleber Comitre, fundador da Acelera Ads"
                  width={470}
                  height={352}
                  {...({ fetchpriority: "high" } as any)}
                />
                <figcaption>
                  <b>Kleber Comitre</b>, sócio-fundador. Você fala direto com quem opera a sua conta.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <div className="aa-mq" aria-label="Empresas atendidas">
          <p>Empresas que decidiram acelerar seus resultados</p>
          <div className="aa-mq-view">
            <div className="aa-mq-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
                <figure className="aa-tile" key={i} aria-hidden={i >= CLIENT_LOGOS.length ? "true" : undefined}>
                  <span className="tbox">
                    <img src={c.img} alt={i >= CLIENT_LOGOS.length ? "" : c.name} loading="lazy" width={72} height={72} />
                  </span>
                  <figcaption>{c.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* DORES */}
        <section className="aa-sec" aria-labelledby="h-dores">
          <div className="aa-wrap">
            <div className="aa-center aa-rv" style={{ marginBottom: 56 }}>
              <span className="aa-kicker"><i /> Diagnóstico</span>
              <h2 className="aa-display" id="h-dores">
                Se você é dono de empresa, provavelmente já sentiu isso
              </h2>
            </div>
            <div className="aa-pains">
              {[
                ["O movimento caiu e você não sabe o motivo.", "As vendas oscilam, o telefone toca menos e falta clareza do que mudou."],
                ["Sua empresa depende apenas de indicação.", "Quando a indicação não vem, o mês trava."],
                ["Você investe em anúncios e não vê retorno.", "Já pagou sem entender o que funcionou e sente que gastou à toa."],
                ["Seus concorrentes aparecem mais que você.", "Quando o cliente pesquisa, é a marca deles que aparece primeiro."],
                ["Você quer crescer, mas falta previsibilidade.", "Meses bons e ruins impedem qualquer plano sério de expansão."],
              ].map(([t, d], i) => (
                <div key={i} className="aa-pain aa-rv" style={{ ["--i" as any]: i }}>
                  <span className="x" aria-hidden="true">✕</span>
                  <p><b>{t}</b> {d}</p>
                </div>
              ))}
            </div>
            <div className="aa-pains-close aa-rv">
              <p>Não é falta de esforço, é falta da estratégia certa. E é isso que a análise gratuita diagnostica.</p>
              {wa("dores")}
            </div>
          </div>
        </section>

        {/* SISTEMA */}
        <section className="aa-sec" id="sistema" aria-labelledby="h-sistema" style={{ paddingTop: 0 }}>
          <div className="aa-wrap">
            <div className="aa-center aa-rv" style={{ marginBottom: 60 }}>
              <span className="aa-kicker"><i /> Como fazemos</span>
              <h2 className="aa-display" id="h-sistema">
                Um sistema completo, da pesquisa ao seu WhatsApp
              </h2>
              <p className="aa-lead">
                Não vendemos plataformas. Montamos as três frentes que, juntas, geram oportunidades reais de venda todos os dias.
              </p>
            </div>
            <div className="aa-pillars">
              <div className="aa-pillar aa-rv">
                <div className="pic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <span className="pn">Google Ads · intenção</span>
                <h3>Capturamos quem já procura</h3>
                <p>Sua empresa aparece no exato momento em que alguém pesquisa pelo seu produto ou serviço, pronto para comprar.</p>
              </div>
              <div className="aa-pillar aa-rv" style={{ ["--i" as any]: 1 }}>
                <div className="pic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" />
                  </svg>
                </div>
                <span className="pn">Meta Ads · demanda</span>
                <h3>Despertamos quem não conhece</h3>
                <p>Instagram e Facebook colocam sua marca na frente do público certo e transformam atenção em conversas no WhatsApp.</p>
              </div>
              <div className="aa-pillar aa-rv" style={{ ["--i" as any]: 2 }}>
                <div className="pic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <span className="pn">Conversão · medição</span>
                <h3>Convertemos interesse em contato</h3>
                <p>Landing pages, rastreamento e otimização diária: cada real investido tem propósito e prestação de contas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="aa-sec" aria-labelledby="h-processo" style={{ paddingTop: 0 }}>
          <div className="aa-wrap">
            <div className="aa-center aa-rv" style={{ marginBottom: 60 }}>
              <span className="aa-kicker"><i /> Sem enrolação</span>
              <h2 className="aa-display" id="h-processo">
                Do primeiro contato às campanhas no ar
              </h2>
            </div>
            <div className="aa-timeline">
              {[
                ["Análise gratuita", "sem compromisso", "Entendemos seu negócio, seus objetivos e o momento atual. Se você já anuncia, auditamos sua conta."],
                ["Estratégia sob medida", "você aprova antes", "Plano claro: plataforma, público, verba e meta. Nada vai ao ar sem a sua aprovação."],
                ["Campanhas no ar", "com rastreamento", "Criamos, configuramos e publicamos com precisão. Cada contato gerado tem origem conhecida."],
                ["Otimização e crescimento", "relatório claro", "Acompanhamos os números todos os dias e você recebe relatórios que qualquer dono de empresa entende."],
              ].map(([t, s, d], i) => (
                <div key={i} className="aa-tstep aa-rv" style={{ ["--i" as any]: i }}>
                  <h3>{t} <small>{s}</small></h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section className="aa-sec" id="oferta" aria-labelledby="h-oferta" style={{ paddingTop: 0 }}>
          <div className="aa-wrap">
            <div className="aa-offer-panel aa-rv">
              <div className="aa-offer-inner">
                <span className="aa-kicker" style={{ justifyContent: "center" }}><i /> Comece por aqui</span>
                <h2 className="aa-display" id="h-oferta">Análise gratuita da sua empresa</h2>
                <p className="aa-lead">
                  Antes de falar em contrato, mostramos exatamente onde estão as suas oportunidades. Você recebe:
                </p>
                <ul className="aa-offer-list">
                  <li><span className="ok">✓</span><span><b>Diagnóstico do seu cenário atual:</b> presença no Google, redes e concorrência na sua região</span></li>
                  <li><span className="ok">✓</span><span><b>Auditoria da sua conta de anúncios</b> (se você já anuncia): onde o dinheiro está vazando</span></li>
                  <li><span className="ok">✓</span><span><b>Plano de ação recomendado:</b> plataforma, verba sugerida e o que esperar</span></li>
                </ul>
                <div className="aa-price-row">
                  <span className="p">R$ 0</span>
                  <span className="pd">Sem compromisso. Mesmo que você decida não fechar com a gente</span>
                </div>
                {wa("oferta")}
                <p className="aa-note">Resposta no mesmo dia útil, direto no seu WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="aa-sec" aria-labelledby="h-cases" style={{ paddingTop: 0 }}>
          <div className="aa-wrap">
            <div className="aa-center aa-rv" style={{ marginBottom: 56 }}>
              <span className="aa-kicker"><i /> Quem confia</span>
              <h2 className="aa-display" id="h-cases">
                Negócios reais da região, estratégias sob medida
              </h2>
            </div>
            <div className="aa-cases">
              {[
                {
                  img: smartMsSolar, name: "Smart MS Energia Solar", seg: "Energia solar",
                  d1: "Gerar oportunidades qualificadas de projetos solares todos os dias.",
                  d2: "Meta Ads com objetivo de conversa no WhatsApp + criativos segmentados por perfil de consumo de energia.",
                },
                {
                  img: smartAssistencia, name: "Smart Assistência", seg: "Serviços técnicos",
                  d1: "Gerar orçamentos qualificados todos os dias.",
                  d2: "Google Ads em palavras de alta intenção mais Meta Ads local. Quem precisa hoje encontra a Smart hoje.",
                },
                {
                  img: ishopToledo, name: "iShop Toledo", seg: "Varejo de eletrônicos",
                  d1: "Aumentar tráfego qualificado e vendas na loja.",
                  d2: "Campanhas de venda focadas em produtos de alto giro, com remarketing para quem demonstrou interesse.",
                },
              ].map((c, i) => (
                <div key={i} className="aa-case aa-rv" style={{ ["--i" as any]: i }}>
                  <div className="c-top">
                    <img src={c.img} alt={c.name} loading="lazy" width={50} height={50} />
                    <div>
                      <h3>{c.name}</h3>
                      <span className="seg">{c.seg}</span>
                    </div>
                  </div>
                  <dl>
                    <div><dt>Desafio</dt><dd>{c.d1}</dd></div>
                    <div><dt>Estratégia</dt><dd>{c.d2}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
            <p className="aa-clients-line aa-rv">
              E também: <b>Solution Cell · Arena Castelo · H.Tech · 5G Parts · Favoritta Store · Seu Jorge Boteco · FretesJá · Eller Semijóias · Connect iPhone · OtioEnsina</b>. Mais de 30 empresas atendidas em Umuarama e região.
            </p>
          </div>
        </section>

        {/* FUNDADORES */}
        <section className="aa-sec" aria-labelledby="h-sobre" style={{ paddingTop: 0 }}>
          <div className="aa-wrap aa-founders">
            <figure className="aa-rv">
              <img src={founders} alt="Kleber Comitre e Romário Carvalho, fundadores da Acelera Ads, em Umuarama PR" loading="lazy" width={520} height={390} />
            </figure>
            <div className="aa-rv" style={{ ["--i" as any]: 1 }}>
              <span className="aa-kicker"><i /> Nossa missão</span>
              <h2 className="aa-display" id="h-sobre">
                Ajudar empresas a venderem mais, todos os meses.
              </h2>
              <p className="aa-lead">
                Fundada por <strong style={{ color: "var(--fg-0)" }}>Kleber Comitre e Romário Carvalho</strong>, a Acelera Ads nasceu para resolver um problema real: empresas que investem em anúncios sem clareza nem resultado.
              </p>
              <p className="aa-lead">
                Nosso trabalho é simples de dizer e exigente de fazer: transformar cada real investido em novos clientes para o seu negócio. Aqui você não cai numa fila de agência, fala direto com quem opera as suas campanhas.
              </p>
              <p className="who">
                <b>Kleber Comitre</b> · <b>Romário Carvalho</b> · Umuarama, PR ·{" "}
                <span style={{ fontVariantNumeric: "tabular-nums" }}>CNPJ 64.181.146/0001-63</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="aa-sec" aria-labelledby="h-faq" style={{ paddingTop: 0 }}>
          <div className="aa-wrap">
            <div className="aa-center aa-rv" style={{ marginBottom: 48 }}>
              <span className="aa-kicker"><i /> Antes de chamar</span>
              <h2 className="aa-display" id="h-faq">Perguntas frequentes</h2>
            </div>
            <div className="aa-faq aa-rv">
              {content.faqItems.map((f) => (
                <details key={f.id}>
                  <summary>
                    {f.question}
                    <span className="pl" aria-hidden="true">+</span>
                  </summary>
                  <div className="aa-ans-wrap"><div className="aa-ans"><p>{f.answer}</p></div></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="aa-sec aa-final" aria-labelledby="h-final">
          <div className="aa-wrap aa-rv">
            <h2 className="aa-display" id="h-final">
              Eles vão encontrar você<br />ou o seu concorrente?
            </h2>
            <p className="aa-lead">
              Todos os dias, clientes procuram empresas como a sua. A análise é gratuita, a resposta é rápida e a decisão continua sendo sua.
            </p>
            {wa("final")}
            <p className="aa-note">Gratuita · Sem compromisso · Resposta no mesmo dia útil</p>
          </div>
        </section>
      </main>

      <footer className="aa-footer">
        <div className="aa-wrap">
          <div className="aa-f-grid">
            <div>
              <img src={aceLeraLogo} alt="Acelera Ads" width={150} height={32} />
              <p>Agência de tráfego pago especializada em Google Ads e Meta Ads. Transformamos investimento em vendas previsíveis.</p>
              <p className="aa-cnpj">CNPJ: 64.181.146/0001-63</p>
            </div>
            <div>
              <h3>Contato</h3>
              <ul>
                <li><a href={`https://wa.me/${content.whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noopener">+55 (44) 99992-4439</a></li>
                <li><a href="mailto:contato@aceleraadsumuarama.com.br">contato@aceleraadsumuarama.com.br</a></li>
                <li><p>Umuarama, Paraná, Brasil</p></li>
              </ul>
            </div>
            <div>
              <h3>Institucional</h3>
              <ul>
                <li><Link to="/privacidade">Política de Privacidade</Link></li>
                <li><Link to="/termos">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
          <div className="aa-f-bottom">
            © {new Date().getFullYear()} Acelera Ads · Acelerador de Vendas. Todos os direitos reservados. · Umuarama/PR · CNPJ 64.181.146/0001-63
          </div>
        </div>
      </footer>

      <a
        className="aa-wa-float"
        href={waHref}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        data-cta="float"
        onClick={() => track("float")}
      >
        {WA_ICON}
      </a>
    </div>
  );
};

export default AaLanding;