type Panel = "sobre" | "curriculo" | "beats" | "servicos";

interface PanelServicosProps {
  isActive: boolean;
  onPanelChange: (panel: Panel) => void;
}

const services = [
  {
    title: "Sites Institucionais",
    desc: "Desenvolvimento de sites rápidos, responsivos e otimizados para transmitir credibilidade e fortalecer a presença digital da empresa.",
    wide: true,
  },
  {
    title: "Landing Pages",
    desc: "Páginas focadas em conversão para campanhas, lançamentos e geração de leads.",
    wide: false,
  },
  {
    badge: "Software",
    title: "Sistemas Web",
    desc: "Sistemas personalizados para reduzir custos, eliminar erros manuais e escalar a gestão do seu negócio.",
    wide: false,
  },
  {
    badge: "Automação",
    title: "IA e Automações",
    desc: "Criação de soluções inteligentes para reduzir tarefas repetitivas e melhorar o atendimento ao cliente.",
    wide: false,
  },
  {
    badge: "Integração",
    title: "Integrações",
    desc: "Conexão entre diferentes plataformas para eliminar processos manuais e centralizar informações.",
    wide: false,
  },
];

const steps = [
  { num: "01", title: "Conversa inicial",        desc: "Entendemos seus objetivos, desafios e o que sua empresa precisa para crescer. Sem jargões técnicos." },
  { num: "02", title: "Planejamento da solução", desc: "Definimos escopo, tecnologias, prazos e entregáveis com clareza e total transparência." },
  { num: "03", title: "Desenvolvimento",         desc: "Construção da solução com código de qualidade, seguindo as melhores práticas de engenharia de software." },
  { num: "04", title: "Ajustes e validação",     desc: "Revisamos juntos cada detalhe para garantir que a entrega está alinhada às suas expectativas." },
  { num: "05", title: "Publicação e suporte",    desc: "Lançamento da solução com acompanhamento e suporte para garantir continuidade e sucesso." },
];



export default function PanelServicos({ isActive, onPanelChange }: PanelServicosProps) {
  return (
    <div id="panel-servicos" className={`panel${isActive ? " active" : ""}`}>

      {/* ── Cards de serviços ─────────────────────────────── */}
      <div className="section-inner">
        <p className="section-eyebrow">1 — O que ofereço</p>
        <h2 className="section-title">Serviços</h2>
        <p className="svc-hero-sub">
          Transformo ideias em soluções digitais que geram valor para empresas. 
          Desenvolvo sites, sistemas web, automações e aplicações com Inteligência Artificial, 
          combinando design, performance e tecnologia para fortalecer a presença digital, 
          otimizar processos e impulsionar o crescimento do seu negócio.

        </p>

        <div className="proj-grid">
          {services.map((svc) => (
            <div
              className="proj-card"
              key={svc.title}
              style={svc.wide ? { gridColumn: "1 / -1" } : undefined}
            >
              
              <div className="proj-name">{svc.title}</div>
              <p className="proj-desc">{svc.desc}</p>
              
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA intermediário ────────────────────────────── */}
      <div className="section-inner" style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)",
            color: "var(--gray)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
          }}>
            Encontrou o que procurava?{" "}
            <span style={{ color: "var(--black)" }}>Vamos conversar sobre o seu projeto.</span>
          </p>
          <a
            className="btn btn-solid"
            href={`https://wa.me/5511959465222?text=${encodeURIComponent("Olá, Franclin! Vi seus serviços no portfólio e gostaria de conversar sobre o meu projeto.")}`}
            target="_blank"
            rel="noopener"
            style={{ flexShrink: 0 }}
          >
            Fale no WhatsApp →
          </a>
        </div>
      </div>

      {/* ── Processo de trabalho ──────────────────────────── */}
      <div className="section-inner">
        <p className="section-eyebrow">1.1 — Como trabalho</p>
        <h2 className="section-title">Processo</h2>
        {steps.map((step) => (
          <div
            className="exp-entry"
            key={step.num}
            style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
          >
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "var(--white)",
              background: "var(--black)",
              border: "2px solid var(--black)",
              borderRadius: "var(--radius)",
              padding: "6px 11px",
              flexShrink: 0,
              boxShadow: "3px 3px 0 var(--black)",
              lineHeight: 1,
              alignSelf: "flex-start",
              marginTop: 3,
            }}>
              {step.num}
            </div>
            <div style={{ flex: 1 }}>
              <div className="exp-role">{step.title}</div>
              <p className="exp-desc" style={{ marginBottom: 0 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA Final ────────────────────────────────────── */}
      <section style={{
        background: "var(--black)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 0.92,
            color: "var(--white)",
            marginBottom: 24,
            paddingBottom: 24,
            borderBottom: "3px solid rgba(255,255,255,0.15)",
          }}>
            Vamos transformar sua ideia em um projeto real.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)",
            color: "var(--gray-lt)",
            lineHeight: 1.75,
            maxWidth: 580,
            marginBottom: 36,
          }}>
            Seja um site institucional, uma landing page, um sistema
            personalizado ou uma solução com Inteligência Artificial, estou
            pronto para desenvolver uma solução alinhada aos objetivos do seu
            negócio.
          </p>
          <a
            className="btn"
            href={`https://wa.me/5511959465222?text=${encodeURIComponent("Olá, Franclin! Quero transformar minha ideia em um projeto real. Podemos conversar?")}`}
            target="_blank"
            rel="noopener"
            style={{
              background: "var(--white)",
              color: "var(--black)",
              borderColor: "var(--white)",
              boxShadow: "4px 4px 0 rgba(255,255,255,0.3)",
            }}
          >
            Solicitar Orçamento →
          </a>
        </div>
      </section>

      {/* ── Dúvidas ───────────────────────────────────────── */}
      <div className="section-inner">
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          textTransform: "uppercase",
          letterSpacing: "0.01em",
          marginBottom: 16,
        }}>
          Ainda tem dúvidas se o seu projeto é viável?
        </h3>
        <p style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.75, maxWidth: 600 }}>
          Não se preocupe. Nosso primeiro contato serve justamente para analisar a viabilidade
          técnica da sua ideia, sem qualquer compromisso. 
        </p>
      </div>

    </div>
  );
}
