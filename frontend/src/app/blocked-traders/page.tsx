export default function BlockedTradersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Traders Bloqueados</h1>
        <p className="text-muted/60 text-sm mb-8">
          Determinadas pessoas e entidades estão proibidas de operar na FutureBet. Essas
          restrições existem para cumprir a lei e proteger a integridade do mercado.
        </p>

        {/* Restricted Jurisdictions */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Jurisdições Restritas</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Residentes das seguintes jurisdições não podem criar uma conta ou operar na FutureBet
              atualmente, devido a restrições regulatórias locais:
            </p>
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Países sujeitos a sanções abrangentes dos EUA (ex.: Cuba, Irã, Coreia do Norte, Síria)</li>
              <li>Estados dos EUA onde a negociação de opções binárias ainda não é permitida</li>
              <li>Qualquer jurisdição onde nossos serviços violem a lei local</li>
            </ul>
          </div>
        </section>

        {/* Sanctioned Individuals */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Indivíduos e Entidades Sancionados</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-3">
              Verificamos cada candidato em listas de sanções globais, incluindo:
            </p>
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Lista de Nacionais Especialmente Designados (SDN) do OFAC dos EUA</li>
              <li>Lista consolidada de sanções da UE</li>
              <li>Lista de sanções do Conselho de Segurança da ONU</li>
            </ul>
            <p className="text-sm text-muted/60 mt-3">
              Contas que correspondam a uma pessoa ou entidade sancionada são imediatamente
              bloqueadas e reportadas às autoridades competentes.
            </p>
          </div>
        </section>

        {/* Minors */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Menores de Idade</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60">
              Você deve ter pelo menos 18 anos de idade (ou a maioridade em sua jurisdição) para
              abrir uma conta. Verificamos a idade durante o processo KYC e encerraremos qualquer
              conta que pertença a um menor de idade.
            </p>
          </div>
        </section>

        {/* Other Restrictions */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Outras Restrições</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Indivíduos anteriormente banidos por manipulação de mercado ou fraude</li>
              <li>Pessoas com informações materiais não públicas sobre um contrato de evento</li>
              <li>Funcionários da FutureBet e seus familiares imediatos (para mercados onde exista conflito de interesses)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
