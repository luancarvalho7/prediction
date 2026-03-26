import { Table, TableRow, TableCell } from "@/components/ui/table";
import { Clock, AlertTriangle, Globe } from "lucide-react";

const NORMAL_HOURS = [
  { day: "Segunda a Sexta-feira", hours: "6:00 AM – 11:00 PM ET", status: "open" },
  { day: "Sábado", hours: "8:00 AM – 8:00 PM ET", status: "open" },
  { day: "Domingo", hours: "10:00 AM – 8:00 PM ET", status: "open" },
];

const MAINTENANCE_WINDOWS = [
  { window: "Diário", time: "3:00 AM – 3:30 AM ET", impact: "Todos os mercados pausados" },
  { window: "Semanal (Ter)", time: "2:00 AM – 4:00 AM ET", impact: "Manutenção estendida" },
];

const EXCEPTIONS = [
  { date: "Apr 18, 2026", name: "Good Friday", hours: "Fechado" },
  { date: "May 25, 2026", name: "Memorial Day", hours: "10:00 AM – 4:00 PM ET" },
  { date: "Jul 4, 2026", name: "Independence Day", hours: "Fechado" },
  { date: "Sep 7, 2026", name: "Labor Day", hours: "10:00 AM – 4:00 PM ET" },
];

const TIMEZONE_OFFSETS: Record<string, string> = {
  "PT (Los Angeles)": "UTC-7",
  "MT (Denver)": "UTC-6",
  "CT (Chicago)": "UTC-5",
  "ET (New York)": "UTC-4",
  "GMT (London)": "UTC+1 (BST)",
  "CET (Berlin)": "UTC+2 (CEST)",
  "JST (Tokyo)": "UTC+9",
};

export default function TradingHoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Horários de Operação</h1>
        <p className="text-muted/60 text-sm mb-8">
          Todos os horários estão em Hora do Leste dos EUA (ET). Os mercados podem ter horários individuais.
        </p>

        {/* Normal Hours */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-accent" />
            <h2 className="text-lg font-semibold">Horários Normais de Operação</h2>
          </div>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Dia", "Horário (ET)", "Status"]}>
              {NORMAL_HOURS.map((row) => (
                <TableRow key={row.day}>
                  <TableCell className="font-medium">{row.day}</TableCell>
                  <TableCell>{row.hours}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1.5 text-xs text-success">
                      <span className="w-1.5 h-1.5 rounded-full bg-success" />
                      Aberto
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </div>
        </section>

        {/* Maintenance Windows */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-warning" />
            <h2 className="text-lg font-semibold">Manutenção Programada</h2>
          </div>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Janela", "Hora (ET)", "Impacto"]}>
              {MAINTENANCE_WINDOWS.map((row) => (
                <TableRow key={row.window}>
                  <TableCell className="font-medium">{row.window}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell className="text-muted/60">{row.impact}</TableCell>
                </TableRow>
              ))}
            </Table>
          </div>
          <p className="text-xs text-muted/60 mt-2">
            Durante a manutenção, as ordens abertas são preservadas, mas nenhuma nova ordem é aceita.
          </p>
        </section>

        {/* Holiday Exceptions */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Exceções e Feriados Futuros</h2>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
            <Table headers={["Data", "Feriado", "Horário"]}>
              {EXCEPTIONS.map((row) => (
                <TableRow key={row.date}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {row.hours === "Fechado" ? (
                      <span className="text-danger text-xs font-medium">Fechado</span>
                    ) : (
                      <span className="text-muted/60 text-xs">{row.hours}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </div>
        </section>

        {/* Timezone Helper */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-accent" />
            <h2 className="text-lg font-semibold">Referência de Fuso Horário</h2>
          </div>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <p className="text-sm text-muted/60 mb-4">
              Converta os horários de operação ET para seu fuso horário local.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(TIMEZONE_OFFSETS).map(([zone, offset]) => (
                <div
                  key={zone}
                  className="flex items-center justify-between bg-background rounded-lg px-4 py-2.5 border border-white/[0.06]"
                >
                  <span className="text-sm font-medium">{zone}</span>
                  <span className="text-xs text-muted/60">{offset}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
