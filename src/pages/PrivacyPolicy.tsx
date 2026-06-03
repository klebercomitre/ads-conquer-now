import { Link } from "react-router-dom";
import aceLeraLogo from "@/assets/acelera-logo.svg";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container px-5 md:px-8 py-5 flex items-center justify-between">
          <Link to="/" aria-label="Voltar para a página inicial">
            <img src={aceLeraLogo} alt="Acelera Ads" className="h-8" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Voltar
          </Link>
        </div>
      </header>
      <article className="container px-5 md:px-8 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: 03 de junho de 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">1. Quem somos</h2>
            <p>
              A Acelera Ads (CNPJ: 64.181.146/0001-63) é uma agência de tráfego pago sediada em Umuarama/PR,
              especializada em gestão de campanhas no Google Ads e Meta Ads. Esta Política descreve como
              coletamos, utilizamos e protegemos seus dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes informações quando você interage com nosso site:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Dados de contato fornecidos voluntariamente (nome, telefone, e-mail) ao clicar em botões do WhatsApp.</li>
              <li>Dados de navegação coletados por cookies e pixels (Google Analytics, Google Tag Manager e Meta Pixel).</li>
              <li>Endereço IP, tipo de dispositivo, navegador e páginas visitadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">3. Como usamos seus dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Para responder ao seu contato e oferecer nossos serviços.</li>
              <li>Para mensurar o desempenho de campanhas publicitárias.</li>
              <li>Para melhorar a experiência de navegação no site.</li>
              <li>Para cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">4. Compartilhamento</h2>
            <p>
              Não vendemos seus dados. Podemos compartilhar informações com plataformas de publicidade
              (Google, Meta) e ferramentas de análise, exclusivamente para fins de mensuração e veiculação
              de anúncios, conforme as políticas dessas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">5. Cookies</h2>
            <p>
              Utilizamos cookies próprios e de terceiros para melhorar a navegação, analisar tráfego e
              personalizar anúncios. Você pode desativá-los nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">6. Seus direitos (LGPD)</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode solicitar a qualquer
              momento: acesso, correção, exclusão, portabilidade ou revogação do consentimento sobre seus dados.
              Para exercer esses direitos, entre em contato pelos canais abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">7. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
              perda, alteração ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contato</h2>
            <p>
              Acelera Ads — CNPJ 64.181.146/0001-63<br />
              Umuarama/PR — Brasil<br />
              E-mail: <a href="mailto:contato@aceleraadsumuarama.com.br" className="text-primary hover:underline">contato@aceleraadsumuarama.com.br</a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;