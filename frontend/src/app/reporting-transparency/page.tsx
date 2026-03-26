import Link from "next/link";

export default function ReportingTransparencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Relatórios e Transparência</h1>
        <p className="text-muted/60 text-sm mb-8">
          Transparência não é opcional — é fundamental. Veja como reportamos operações e
          compartilhamos dados com o público e nossos reguladores.
        </p>

        {/* Data Transparency */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Transparência de Dados</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Publicamos dados de mercado em tempo real e históricos — incluindo profundidade do
              livro de ordens, preços de negociação e volumes — para que cada participante possa
              verificar de forma independente a atividade do mercado. Nossa API pública oferece
              acesso programático a esses dados sem custo.
            </p>
          </div>
        </section>

        {/* Volume Reporting */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Relatório de Volume</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Os volumes totais de negociação são publicados diariamente em nossa plataforma.
              Resumos mensais e trimestrais detalham o volume por categoria de mercado, ajudando
              pesquisadores e reguladores a compreender a atividade da plataforma.
            </p>
          </div>
        </section>

        {/* Regulatory Filings */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Registros Regulatórios</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Como uma bolsa registrada na CFTC, arquivamos relatórios regulares, incluindo dados
              de posição de grandes traders, demonstrações financeiras e certificações de
              conformidade. Esses registros estão disponíveis nos arquivos públicos da CFTC onde
              aplicável.
            </p>
          </div>
        </section>

        {/* Incident Reports */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Relatórios de Incidentes e Fiscalização</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Quando uma ação de fiscalização é tomada — como suspensões de contas por
              negociação proibida — publicamos resumos anonimizados para que a comunidade
              compreenda os tipos de comportamento que resultam em penalidades.
            </p>
          </div>
        </section>

        {/* Report Submission */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Enviar um Relatório</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Se você suspeitar de manipulação de mercado, uso de informação privilegiada ou
              qualquer outra violação de nossas regras, você pode enviar um relatório confidencial.
              Envios anônimos são aceitos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:compliance@futurebet.com"
                className="inline-block bg-accent text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Enviar E-mail para Conformidade
              </a>
              <Link
                href="/market-integrity"
                className="inline-block border border-white/[0.06] text-sm font-medium px-5 py-2 rounded-lg hover:bg-card-hover transition-colors"
              >
                Voltar para Integridade de Mercado
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
