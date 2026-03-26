export default function ProhibitedTradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Negociação Proibida</h1>
        <p className="text-muted/60 text-sm mb-8">
          Certas atividades de negociação violam nossas regras e comprometem a integridade do
          mercado. Envolver-se em qualquer uma das práticas a seguir resultará em ação de
          fiscalização.
        </p>

        {/* Wash Trading */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Wash Trading</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Wash trading é a prática de comprar e vender simultaneamente o mesmo contrato — ou
              negociar entre contas que você controla — para inflar o volume ou criar a aparência
              de atividade de mercado. Isso distorce os sinais de preço e engana outros traders.
            </p>
          </div>
        </section>

        {/* Market Manipulation */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Manipulação de Mercado</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Qualquer conduta intencional destinada a influenciar artificialmente o preço de um
              contrato é considerada manipulação. Isso inclui spoofing (colocar ordens que você
              pretende cancelar), layering e negociações coordenadas para mover preços.
            </p>
          </div>
        </section>

        {/* Collusion */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Conluio</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Conspirar com outros traders para fixar preços, compartilhar informações de ordens
              não públicas ou coordenar negociações para benefício mútuo em detrimento do mercado
              em geral é estritamente proibido.
            </p>
          </div>
        </section>

        {/* Other Prohibited Activities */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Outras Atividades Proibidas</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Usar bots ou sistemas automatizados sem aprovação prévia da plataforma</li>
              <li>Explorar falhas técnicas ou erros de precificação intencionalmente</li>
              <li>Praticar front-running nas ordens de outros usuários por meio de acesso privilegiado</li>
              <li>Operar várias contas para contornar limites de posição ou depósito</li>
            </ul>
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Consequências</h2>
          <div className="bg-card border border-danger/30 rounded-xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Suspensão ou encerramento imediato da conta</li>
              <li>Cancelamento das ordens e posições infratoras</li>
              <li>Devolução dos lucros obtidos de forma ilícita</li>
              <li>Encaminhamento a reguladores e autoridades policiais</li>
              <li>Banimento permanente da plataforma FutureBet</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
