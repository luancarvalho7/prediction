export default function MarketsOverMonopoliesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Mercados Acima de Monopólios</h1>
        <p className="text-muted/60 text-sm mb-8">
          Nossa tese fundadora: mercados abertos consistentemente superam autoridades centralizadas
          na previsão de eventos do mundo real.
        </p>

        {/* Why Markets Work */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Por Que os Mercados Funcionam</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Os mercados agregam o conhecimento privado, as crenças e os incentivos de milhares de
              participantes independentes em um único preço constantemente atualizado. Nenhum comitê,
              por mais especializado que seja, pode replicar esse processo em escala.
            </p>
            <p>
              Quando indivíduos arriscam capital real em um resultado, eles têm o incentivo de ser
              honestos e minuciosos em suas análises. O resultado é um sinal de preço que é
              notavelmente difícil de superar com pesquisas tradicionais ou previsões de especialistas.
            </p>
          </div>
        </section>

        {/* Decentralized Price Discovery */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Descoberta de Preços Descentralizada</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Em um mercado de previsão, o preço de um contrato reflete a probabilidade consensual
              da multidão. Se o preço de mercado para &quot;O Evento X acontece&quot; é 72¢, a
              estimativa coletiva é de 72% de chance de ocorrência.
            </p>
            <p>
              Como qualquer pessoa pode participar, contratos com preços incorretos atraem traders
              informados que empurram o preço em direção à probabilidade real. Esse mecanismo de
              autocorreção opera ininterruptamente sem intervenção centralizada.
            </p>
          </div>
        </section>

        {/* Information Aggregation */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Agregação de Informações</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Os mercados de previsão se destacam na síntese de informações dispersas. Um único trader
              pode ter conhecimento especializado — dados de eleições regionais, conhecimento da cadeia
              de suprimentos ou contexto próximo a informações privilegiadas — e o mercado oferece a
              ele uma forma de baixo atrito para expressar essa visão.
            </p>
            <p>
              O sinal agregado é mais preciso do que qualquer previsão individual porque os erros
              e viêses tendem a se cancelar quando um conjunto suficientemente diverso de participantes negocia.
            </p>
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Contexto Histórico</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Os mercados de previsão têm uma longa história. As apostas políticas nos Estados Unidos
              remontam a pelo menos 1860, quando apostas organizadas em eleições presidenciais eram
              comuns em Wall Street. Os grupos de apostas eleitorais do início do século XX
              consistentemente rivalizavam ou superavam as pesquisas de jornais.
            </p>
            <p>
              Os mercados de previsão eletrônicos modernos — começando com o Iowa Electronic Markets
              em 1988 — foram estudados extensivamente por economistas e cientistas políticos, e as
              evidências apoiam de forma avassaladora sua precisão.
            </p>
            <p>
              A FutureBet se baseia nessa tradição ao oferecer mercados de previsão regulamentados
              e acessíveis que empoderam os indivíduos, em vez de concentrar o poder de previsão
              nas mãos de poucas instituições.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
