import Link from "next/link";

export default function InsiderTradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Uso de Informação Privilegiada</h1>
        <p className="text-muted/60 text-sm mb-8">
          Negociar com base em informações materiais não públicas compromete a justiça do mercado.
          Levamos o uso de informação privilegiada a sério e trabalhamos ativamente para detectá-lo
          e puni-lo.
        </p>

        {/* What Constitutes Insider Trading */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">O que Constitui Uso de Informação Privilegiada</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Em um mercado de previsão, o uso de informação privilegiada ocorre quando um
              participante negocia com base em informações que não estão disponíveis publicamente
              e que afetariam materialmente a probabilidade do resultado de um evento.
            </p>
            <p>
              Isso inclui — mas não se limita a — conhecimento antecipado de decisões políticas,
              dados de saúde não públicos, resultados corporativos não divulgados ou acesso
              privilegiado aos organizadores de eventos.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Exemplos</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Um funcionário do governo negociando com base em um anúncio de política iminente antes de ser público</li>
              <li>Um funcionário de uma liga esportiva apostando em um resultado de jogo que sabe ter sido decidido</li>
              <li>Um insider corporativo comprando contratos de &quot;a empresa X atingirá a meta de receita?&quot; usando dados financeiros não divulgados</li>
              <li>Um jornalista negociando antes de publicar uma matéria que moverá os preços do mercado</li>
            </ul>
          </div>
        </section>

        {/* Detection */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Detecção</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Nossos sistemas de vigilância sinalizam padrões de negociação incomuns — por exemplo,
              grandes apostas direcionais feitas pouco antes de um evento de informação material.
              A atividade sinalizada é revisada por nossa equipe de conformidade, que pode solicitar
              informações adicionais ou bloquear uma conta durante a investigação.
            </p>
            <p>
              Também aceitamos denúncias de participantes do mercado. Se você tiver motivos para
              acreditar que alguém está negociando com informação privilegiada, por favor, reporte.
            </p>
          </div>
        </section>

        {/* Penalties */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Penalidades</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Suspensão imediata da conta aguardando investigação</li>
              <li>Devolução dos lucros obtidos por meio do uso de informação privilegiada</li>
              <li>Banimento permanente da plataforma</li>
              <li>Encaminhamento à CFTC e às autoridades policiais quando apropriado</li>
            </ul>
          </div>
        </section>

        {/* Reporting */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Reportar Suspeita de Uso de Informação Privilegiada</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 text-center">
            <p className="text-sm text-muted/60 mb-3">
              Se você suspeitar de uso de informação privilegiada ou tiver informações sobre
              possível abuso de mercado, por favor, nos informe. Os relatórios podem ser enviados
              anonimamente.
            </p>
            <Link
              href="/reporting-transparency"
              className="inline-block bg-accent text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Enviar um Relatório →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
