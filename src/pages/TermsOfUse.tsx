import { Link } from "react-router-dom";
import aceLeraLogo from "@/assets/acelera-logo.svg";

const TermsOfUse = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: 03 de junho de 2026</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site da Acelera Ads (CNPJ: 64.181.146/0001-63), você concorda
              integralmente com estes Termos de Uso. Caso não concorde, recomendamos não utilizar o site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">2. Sobre o serviço</h2>
            <p>
              A Acelera Ads é uma agência especializada em gestão de tráfego pago (Google Ads e Meta Ads).
              Este site tem caráter informativo e comercial, com o objetivo de apresentar nossos serviços e
              permitir o contato com potenciais clientes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">3. Uso permitido</h2>
            <p>
              Você se compromete a utilizar o site apenas para fins lícitos, sem violar direitos de terceiros,
              não realizando engenharia reversa, cópia indevida ou tentativa de comprometer sua segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site (textos, imagens, logotipos, layout, código) é de propriedade da
              Acelera Ads ou licenciado para uso, sendo protegido pelas leis brasileiras de direitos autorais
              e propriedade industrial. É proibida a reprodução sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">5. Limitação de responsabilidade</h2>
            <p>
              Os resultados em campanhas de tráfego pago dependem de múltiplos fatores (mercado, oferta,
              orçamento, sazonalidade). A Acelera Ads não garante resultados específicos, mas se compromete
              com as melhores práticas de gestão profissional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">6. Links externos</h2>
            <p>
              O site pode conter links para páginas de terceiros (como WhatsApp, Instagram, Google). Não nos
              responsabilizamos pelo conteúdo ou políticas dessas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">7. Alterações</h2>
            <p>
              Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará sempre disponível
              nesta página, com a data da última atualização.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">8. Foro</h2>
            <p>
              Fica eleito o foro da Comarca de Umuarama/PR para dirimir quaisquer controvérsias relacionadas
              a estes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">9. Contato</h2>
            <p>
              Acelera Ads · CNPJ 64.181.146/0001-63<br />
              Umuarama/PR, Brasil<br />
              E-mail: <a href="mailto:contato@aceleraadsumuarama.com.br" className="text-primary hover:underline">contato@aceleraadsumuarama.com.br</a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default TermsOfUse;