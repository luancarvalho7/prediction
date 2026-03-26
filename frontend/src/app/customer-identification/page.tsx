import Link from "next/link";

export default function CustomerIdentificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Identificação do Cliente</h1>
        <p className="text-muted/60 text-sm mb-8">
          Contas reais mantêm os mercados justos. Saiba por que verificamos cada trader e o que
          você precisa para começar.
        </p>

        {/* Why Real Accounts Matter */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Por que Contas Reais São Importantes</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              A verificação de identidade previne fraudes, inibe a manipulação de mercado e garante
              conformidade com as regulamentações federais antilavagem de dinheiro. Quando todos os
              participantes são verificados, o sinal do mercado é mais confiável.
            </p>
            <p>
              Contas anônimas criam oportunidades para wash trading, conluio e evasão de sanções.
              Ao exigir verificação de identidade, protegemos cada trader honesto na plataforma.
            </p>
          </div>
        </section>

        {/* KYC Requirements */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Requisitos KYC</h2>
          <div className="prose-sm text-muted/60 space-y-3">
            <p>
              Todos os usuários devem concluir a verificação Conheça Seu Cliente (KYC) antes de
              depositar fundos ou realizar operações. O processo geralmente leva alguns minutos e
              envolve o fornecimento de informações pessoais e o envio de documentos comprobatórios.
            </p>
            <p>
              Utilizamos fornecedores de verificação de identidade com padrões do setor para
              confirmar suas informações de forma rápida e segura. Seus documentos são criptografados
              em trânsito e em repouso.
            </p>
          </div>
        </section>

        {/* Accepted Documents */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Documentos Aceitos</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-muted/60 list-disc list-inside">
              <li>Documento de identidade com foto emitido pelo governo (passaporte, carteira de motorista ou RG)</li>
              <li>Comprovante de endereço com data nos últimos 90 dias (conta de serviços, extrato bancário ou documento fiscal)</li>
              <li>Número de Seguro Social (SSN) ou número de identificação fiscal equivalente</li>
              <li>Selfie para verificação de vivacidade</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 text-center">
            <p className="text-sm text-muted/60 mb-3">
              Pronto para verificar sua identidade? Conclua o processo em minutos.
            </p>
            <Link
              href="/onboarding/kyc"
              className="inline-block bg-accent text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Iniciar Verificação KYC →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
