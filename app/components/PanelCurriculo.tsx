interface PanelCurriculoProps { isActive: boolean; }

const experiences = [
  {
    date: "2022 — atual",
    role: "Desenvolvedor Full Stack",
    company: "B2Blue.com",
    desc: "Atuação na evolução de um marketplace legado responsável por mais de 80 mil leads e de uma plataforma SaaS com aproximadamente 600 usuários ativos, desenvolvendo soluções em React, Next.js, TypeScript, Django e Python. Experiência na integração de APIs REST, modernização de funcionalidades, otimização de performance e escalabilidade, além da arquitetura e gestão do HubSpot CRM, automações com n8n, integrações entre sistemas e implementação de soluções com IA e Typesense.",
    chips: ["NextJS","React", "TypeScript", "Material UI", "Vitest", "HubSpot", "Typesense", "n8n", "Django"],
  },
  {
    date: "2021 - 2022",
    role: "Estágio de tecnologia",
    company: "B2Blue.com",
    desc: "Desenvolvimento e manutenção de automações voltadas ao atendimento de usuários e otimização de processos internos, além da identificação de bugs, refinamento de melhorias e colaboração na evolução contínua do sistema, contribuindo para maior eficiência operacional e qualidade da plataforma.",
    chips: ["HubSpot", "Take Blip", "Python", "Django", "React"],
  },
];

const stackCategories = [
  { label: "Linguagens", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Frameworks & Libs", items: ["React", "Next.js", "Django", "Material UI", "Tailwind CSS"] },
  { label: "Banco de Dados", items: ["PostgreSQL", "MySQL"] },
  { label: "Ferramentas & Plataformas", items: ["Git", "HubSpot", "n8n", "Typesense"] },
];

const certifications = [
  "React & Next.js — Alura",
  "TypeScript — Alura",
  "Django REST Framework — Alura",
  "Python Collections - Alura",
  "HubSpot Marketing Hub Software — HubSpot Academy",
];

export default function PanelCurriculo({ isActive }: PanelCurriculoProps) {
  return (
    <div id="panel-curriculo" className={`panel${isActive ? " active" : ""}`}>
      <div className="section-inner">
        <p className="section-eyebrow">2 — Trajetória</p>
        <h2 className="section-title">Currículo</h2>

        {/* Resumo */}
        <div className="cv-block">
          <p className="cv-block-title">Resumo</p>
          <p className="exp-desc">
            Engenheiro de Software com mais de 5 anos de experiência no desenvolvimento de 
            aplicações web, plataformas SaaS e marketplaces utilizando Next.js, React, TypeScript e Python. <br/>
            Experiência na construção de interfaces modernas, APIs REST e integrações entre sistemas, 
            atuando em todas as etapas do ciclo de desenvolvimento de software. Forte atuação em 
            automações inteligentes, integrações com HubSpot, desenvolvimento de agentes de IA e orquestração 
            de fluxos utilizando n8n.<br/> Comprometido com arquitetura de software, código 
            de qualidade, boas práticas de engenharia e desenvolvimento de soluções escaláveis 
            que geram impacto real para empresas e usuários.
          </p>
        </div>

        {/* Experiência */}
        <div className="cv-block">
          <p className="cv-block-title">Experiência</p>
          {experiences.map((exp, i) => (
            <div className="exp-entry" key={i}>
              <div className="exp-header">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="chips">
                {exp.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Formação */}
        <div className="cv-block">
          <p className="cv-block-title">Formação</p>
          <div className="edu-entry">
            <div className="exp-header">
              <div className="edu-degree">Análise e Des. de Sistemas</div>
              <div className="edu-year">2019 — 2022</div>
            </div>
            <div className="edu-school">Estácio</div>
          </div>
        </div>

        {/* Stack */}
        <div className="cv-block">
          <p className="cv-block-title">Tecnologias</p>
          <div className="stack-categories">
            {stackCategories.map((cat) => (
              <div className="stack-cat" key={cat.label}>
                <div className="stack-cat-label">{cat.label}</div>
                <div className="stack-grid">
                  {cat.items.map((item) => (
                    <div className="stack-item" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="cv-block">
          <p className="cv-block-title">Certificações & Cursos</p>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div className="cert-item" key={cert}>{cert}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
