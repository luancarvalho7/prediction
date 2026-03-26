import { Shield, AlertTriangle, Ban, CheckCircle, Scale } from "lucide-react";

export default function CommunityGuidelinesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Diretrizes da Comunidade</h1>
        <p className="text-muted/60">
          O FutureBet é construído sobre confiança, transparência e participação justa. Estas diretrizes ajudam a manter
          nossa comunidade segura e produtiva para todos.
        </p>
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-accent" />
          <h2 className="text-xl font-semibold">Respeito e Civilidade</h2>
        </div>
        <p className="text-sm text-muted/60 leading-relaxed">
          Trate cada membro da comunidade com respeito. O debate saudável é encorajado, mas ataques pessoais,
          assédio, discurso de ódio e linguagem discriminatória são estritamente proibidos. Discorde das
          ideias, não das pessoas. Comportamento tóxico persistente resultará em restrições de conta.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Ban size={18} className="text-danger" />
          <h2 className="text-xl font-semibold">Sem Manipulação de Mercado</h2>
        </div>
        <p className="text-sm text-muted/60 leading-relaxed">
          Qualquer tentativa de manipular preços de mercado, coordenar atividade de negociação falsa ou espalhar
          desinformação para influenciar resultados de mercado é estritamente proibida. Isso inclui wash trading,
          spoofing e conluio. Todas as negociações são monitoradas para atividades suspeitas.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} className="text-warning" />
          <h2 className="text-xl font-semibold">Sem Spam ou Autopromoção</h2>
        </div>
        <p className="text-sm text-muted/60 leading-relaxed">
          Não use a plataforma para spam, postar conteúdo excessivamente autopromocional ou distribuir
          links não solicitados. Publicações e comentários devem contribuir de forma significativa para as discussões. Conteúdo
          repetitivo, de baixo esforço ou fora do tópico será removido.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle size={18} className="text-yes" />
          <h2 className="text-xl font-semibold">Informações Precisas</h2>
        </div>
        <p className="text-sm text-muted/60 leading-relaxed">
          Compartilhe informações que você acredita serem precisas. Espalhar deliberadamente informações falsas ou enganosas
          — especialmente para influenciar decisões de negociação — prejudica a confiança da comunidade e a integridade do
          mercado. Cite suas fontes ao fazer afirmações factuais. Análises especulativas devem ser claramente rotuladas como opinião.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Scale size={18} className="text-muted/60" />
          <h2 className="text-xl font-semibold">Consequências</h2>
        </div>
        <p className="text-sm text-muted/60 leading-relaxed">
          Violações dessas diretrizes podem resultar em ações crescentes dependendo da gravidade:
        </p>
        <ul className="text-sm text-muted/60 list-disc list-inside space-y-1.5 pl-2">
          <li>Primeira infração: Advertência e remoção de conteúdo</li>
          <li>Violações repetidas: Restrição temporária de publicação</li>
          <li>Abuso grave ou persistente: Suspensão de conta</li>
          <li>Manipulação de mercado ou fraude: Banimento permanente e possível encaminhamento às autoridades</li>
        </ul>
        <p className="text-sm text-muted/60 leading-relaxed mt-3">
          Todas as decisões de moderação podem ser contestadas entrando em contato com nossa equipe de suporte. Estamos comprometidos em
          aplicar essas regras de forma justa e consistente.
        </p>
      </section>
    </div>
  );
}
