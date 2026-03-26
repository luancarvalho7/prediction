export default function RegulationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Regulamentação</h1>
        <p className="text-muted/60 text-sm mb-8">
          A FutureBet opera dentro de um quadro jurídico e regulatório claro. A transparência sobre
          nosso status é central para a confiança que construímos com nossos usuários.
        </p>

        {/* Regulatory Status */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Status Regulatório</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              A FutureBet é um mercado de contratos designado (DCM) registrado na Comissão de
              Negociação de Futuros de Commodities (CFTC). Nossa bolsa está autorizada a listar
              contratos de opções binárias — comumente conhecidos como contratos de eventos —
              para negociação por participantes elegíveis.
            </p>
            <p>
              Operar como entidade regulada significa que estamos sujeitos a exames contínuos,
              requisitos de reporte e padrões de adequação de capital projetados para proteger
              os participantes do mercado.
            </p>
          </div>
        </section>

        {/* Licensing */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Licenciamento</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Nossa licença de bolsa nos permite operar mercados de previsão em categorias de
              eventos aprovadas. Cada nova categoria de mercado passa por uma revisão regulatória
              antes de ser disponibilizada para negociação.
            </p>
            <p>
              Também detemos licenças estaduais de transmissão de dinheiro onde necessário,
              garantindo que depósitos, saques e custódia de fundos atendam aos mais altos
              padrões financeiros.
            </p>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Estrutura de Conformidade</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Nosso programa de conformidade inclui procedimentos de Conheça Seu Cliente (KYC) e
              Prevenção à Lavagem de Dinheiro (AML), monitoramento de transações, reporte de
              atividades suspeitas e auditorias independentes regulares.
            </p>
            <p>
              Uma equipe de conformidade dedicada revisa atividades sinalizadas diariamente e
              trabalha com reguladores e autoridades policiais quando necessário.
            </p>
          </div>
        </section>

        {/* Consumer Protection */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Proteção ao Consumidor</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Os fundos dos clientes são mantidos em contas segregadas em instituições seguradas
              pelo FDIC e nunca são misturados com fundos operacionais. No improvável caso de
              insolvência, os fundos dos clientes permanecem propriedade do cliente.
            </p>
            <p>
              Fornecemos divulgações claras de riscos, aplicamos limites de posição e oferecemos
              ferramentas de negociação responsável de autoatendimento para que cada usuário possa
              estabelecer limites que funcionem para ele.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
