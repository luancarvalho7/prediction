export default function ProhibitedMarketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Mercados Proibidos</h1>
        <p className="text-muted/60 text-sm mb-8">
          Nem toda pergunta pertence a um mercado de previsão. Mantemos padrões rigorosos sobre
          o que iremos — e não iremos — listar.
        </p>

        {/* Personal Harm */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Danos Pessoais</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Nunca listaremos mercados que possam incentivar danos a indivíduos, incluindo:
            </p>
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Mercados de assassinato ou violência</li>
              <li>Mercados sobre resultados de saúde de indivíduos específicos sem justificativa de interesse público</li>
              <li>Eventos em que um participante possa influenciar o resultado por meio de ação prejudicial</li>
            </ul>
          </div>
        </section>

        {/* Illegal Activities */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Atividades Ilegais</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Mercados que façam referência a atividades ilegais ou que possam promovê-las são
              proibidos:
            </p>
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Resultados dependentes da prática de um crime</li>
              <li>Métricas de tráfico ou produção de drogas</li>
              <li>Mercados sobre ataques cibernéticos, violações de dados ou resultados de hacking</li>
            </ul>
          </div>
        </section>

        {/* Sensitive Topics */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Tópicos Sensíveis</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Certos tópicos são excluídos porque podem causar danos sociais indevidos ou explorar
              populações vulneráveis:
            </p>
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Mercados sobre atos de terrorismo ou violência em massa</li>
              <li>Uso de armas nucleares ou biológicas</li>
              <li>Eventos envolvendo menores de idade em qualquer contexto prejudicial</li>
              <li>Mercados projetados para assediar, difamar ou discriminar grupos ou indivíduos</li>
            </ul>
          </div>
        </section>

        {/* Review Process */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Processo de Revisão de Mercado</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Cada mercado passa por uma revisão em várias etapas antes de ser listado. Nosso
              comitê de revisão de mercado avalia os contratos propostos em relação à nossa política
              de mercados proibidos, requisitos regulatórios e padrões éticos.
            </p>
            <p>
              Membros da comunidade podem sinalizar mercados listados que acreditam violar estas
              diretrizes. Todos os mercados sinalizados são reavaliados em até 24 horas. Se um
              mercado listado for considerado em violação da política, ele é removido da listagem
              e todas as posições abertas são encerradas pelo valor justo.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
