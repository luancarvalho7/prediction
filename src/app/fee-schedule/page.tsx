import { Table, TableRow, TableCell } from "@/components/ui/table";

export default function FeeSchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Tabela de Taxas</h1>
        <p className="text-muted/60 text-sm mb-8">
          Estrutura de taxas transparente para todos os mercados FutureBet. As taxas estão sujeitas a alterações com aviso prévio.
        </p>

        {/* Standard Fees */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Taxas de Negociação Padrão</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Ação", "Taxa", "Detalhes"]}>
              <TableRow>
                <TableCell>Ordem de Mercado</TableCell>
                <TableCell className="text-accent font-medium">2%</TableCell>
                <TableCell className="text-muted/60">Aplicado ao valor nocional da negociação</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ordem Limitada (Maker)</TableCell>
                <TableCell className="text-accent font-medium">0%</TableCell>
                <TableCell className="text-muted/60">Sem taxa para ordens que adicionam liquidez</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ordem Limitada (Taker)</TableCell>
                <TableCell className="text-accent font-medium">1%</TableCell>
                <TableCell className="text-muted/60">Aplicado ao combinar uma ordem existente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Liquidação (Ganhando)</TableCell>
                <TableCell className="text-accent font-medium">2%</TableCell>
                <TableCell className="text-muted/60">Deduzido dos ganhos na resolução do mercado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Liquidação (Perdendo)</TableCell>
                <TableCell className="text-accent font-medium">0%</TableCell>
                <TableCell className="text-muted/60">Sem taxa adicional em posições perdedoras</TableCell>
              </TableRow>
            </Table>
          </div>
        </section>

        {/* Deposit / Withdrawal */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Taxas de Depósito e Saque</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Método", "Taxa de Depósito", "Taxa de Saque", "Tempo de Processamento"]}>
              <TableRow>
                <TableCell>Transferência Bancária (ACH)</TableCell>
                <TableCell className="text-accent font-medium">Grátis</TableCell>
                <TableCell className="text-accent font-medium">Grátis</TableCell>
                <TableCell className="text-muted/60">1 a 3 dias úteis</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wire Transfer</TableCell>
                <TableCell className="text-accent font-medium">Grátis</TableCell>
                <TableCell className="text-accent font-medium">$25</TableCell>
                <TableCell className="text-muted/60">Mesmo dia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Crypto (USDC)</TableCell>
                <TableCell className="text-accent font-medium">Grátis</TableCell>
                <TableCell className="text-accent font-medium">Gas de rede</TableCell>
                <TableCell className="text-muted/60">~15 minutos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cartão de Débito</TableCell>
                <TableCell className="text-accent font-medium">1.5%</TableCell>
                <TableCell className="text-muted/60">—</TableCell>
                <TableCell className="text-muted/60">Instantâneo</TableCell>
              </TableRow>
            </Table>
          </div>
        </section>

        {/* Special / Volume Fees */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Descontos por Volume</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Volume em 30 Dias", "Taxa Maker", "Taxa Taker", "Taxa de Liquidação"]}>
              <TableRow>
                <TableCell className="font-medium">$0 – $10K</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>1%</TableCell>
                <TableCell>2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$10K – $50K</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>0.8%</TableCell>
                <TableCell>1.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$50K – $250K</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>0.5%</TableCell>
                <TableCell>1%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$250K+</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>0.3%</TableCell>
                <TableCell>0.5%</TableCell>
              </TableRow>
            </Table>
          </div>
        </section>

        {/* Upcoming Changes */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Mudanças Futuras</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-warning mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Redução da taxa Taker — 15 de abril de 2026</p>
                <p className="text-xs text-muted/60">
                  As taxas Taker para o nível de $10K–$50K diminuirão de 0,8% para 0,6%.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Subsídio de saque em cripto — 1 de maio de 2026</p>
                <p className="text-xs text-muted/60">
                  A FutureBet cobrirá as taxas de gas da rede para saques em USDC abaixo de $5.000.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
