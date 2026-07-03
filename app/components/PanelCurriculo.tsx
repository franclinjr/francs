interface PanelCurriculoProps { isActive: boolean; }

const stackCategories = [
  { label: "Linguagens", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Frameworks & Libs", items: ["React", "Next.js", "Django", "Node.js", "Material UI", "Tailwind CSS"] },
  { label: "Testes Automatizados", items: ["Vitest", "Jest", "React Testing Library"] },
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
        <div className="section-title-row">
          <div className="section-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2>Currículo</h2>
            <a
              className="btn btn-solid cv-download-btn"
              href="/cv.pdf"
              download="Franclin Jr - Software Engineer.pdf"
            >
              Baixar Currículo em PDF
            </a>
          </div>
        </div>

        {/* Resumo */}
        <div className="cv-block">
          <p className="cv-block-title">Resumo</p>
          <p className="exp-desc">
            Engenheiro de Software com mais de 5 anos de experiência no desenvolvimento 
            de aplicações web escaláveis em empresa orientada a produtos. Especializado em React, Next.js e TypeScript, 
            desenvolvendo soluções de alta performance com foco em qualidade, usabilidade e principios sólidos de engenharia.
            Responsável pelo desenvolvimento e evolução de uma plataforma SaaS utilizada por mais de 800 usuários de
            grandes empresas do varejo nacional e pela sustentação de um marketplace Django com mais de 70 mil usuários ativos. Experiência na liderança técnica da implementação do CRM HubSpot para uma base superior a 80 mil leads, além de automações de processos e agentes inteligentes utilizando n8n e Inteligência Artificial.
          </p>
        </div>

        {/* Experiência */}
        <div className="cv-block">
          <p className="cv-block-title">Experiência</p>

          <div className="exp-entry">
            <div className="exp-header">
              <div className="exp-role">Engenheiro de Software</div>
              <div className="exp-date">2022 — atual</div>
            </div>
            <div className="exp-company">B2Blue.com</div>
            <p className="exp-desc">
              Desenvolvimento de aplicações web escaláveis e de alta performance utilizando TypeScript, React, Next.js, Redux e MUI, promovendo
              maior manutenibilidade e redução da complexidade das interfaces em relação às soluções legadas.
            </p>
            <p className="exp-desc">
              Arquitetura e integração de aplicações frontend com APIs REST e camadas BFF (Node.js/Next.js), reduzindo latência e otimizando o
              consumo de dados em fluxos complexos de navegação.
            </p>
            <p className="exp-desc">
              Modernização de marketplace com mais de 70 mil usuários, conduzindo a migração para Next.js e implementando mecanismos de busca
              com Typesense e recursos de Inteligência Artificial utilizando modelos da ChatGPT e Claude.
            </p>
            <p className="exp-desc">
              Referência técnica para o CRM HubSpot, liderando a implementação de funis de vendas, automações de relacionamento com leads,
              dashboards comerciais e integrações com sistemas internos e plataformas de terceiros.
            </p>
            <p className="exp-desc">
              Desenvolvimento de agentes inteligentes de atendimento a usuários e automações de processos utilizando n8n, aumentando a
              eficiência operacional e reduzindo atividades manuais.
            </p>
            <p className="exp-desc">
              Aplicação de soluções baseadas em LLMs, incluindo ChatGPT, Claude e Manus, para otimização do fluxo de desenvolvimento e
              implementação de funcionalidades com Inteligência Artificial, como busca inteligente, refinamento de consultas, prototipação de
              interfaces e apoio no desenvolvimento.
            </p>
            <p className="exp-desc">
              Estruturação da estratégia de testes automatizados em projeto com mais de 5.000 arquivos, elevando a cobertura para
              aproximadamente 90% e aumentando a confiabilidade das entregas.
            </p>
            <p className="exp-desc">
              Colaboração direta com equipes de Produto, Design, Backend e Operações, participando da definição de soluções técnicas e do
              alinhamento com stakeholders estratégicos, incluindo a alta liderança da empresa.
            </p>
            <div className="chips">
              <span className="chip">NextJS</span>
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Django</span>
              <span className="chip">Node.js</span>
              <span className="chip">Redux</span>
              <span className="chip">Material UI</span>
              <span className="chip">Vitest</span>
              <span className="chip">HubSpot</span>
              <span className="chip">Typesense</span>
              <span className="chip">n8n</span>
            </div>
          </div>

          <div className="exp-entry">
            <div className="exp-header">
              <div className="exp-role">Estagiário de Tecnologia</div>
              <div className="exp-date">2021 - 2022</div>
            </div>
            <div className="exp-company">B2Blue.com</div>
            <p className="exp-desc">
              Desenvolvimento e manutenção de automações voltadas ao atendimento de usuários e otimização de processos internos, além da
              identificação de bugs, refinamento de melhorias e colaboração na evolução contínua do sistema, contribuindo para maior eficiência
              operacional e qualidade da plataforma.
            </p>
            <div className="chips">
              <span className="chip">HubSpot</span>
              <span className="chip">Take Blip</span>
              <span className="chip">Python</span>
              <span className="chip">Django</span>
              <span className="chip">React</span>
            </div>
          </div>
        </div>

        {/* Formação */}
        <div className="cv-block">
          <p className="cv-block-title">Formação</p>
          <div className="edu-entry">
            <div className="exp-header">
              <div className="edu-degree">Análise e Desenvolvimento de Sistemas</div>
              <div className="edu-year">2020 — 2023</div>
            </div>
            <div className="edu-school">Universidade Estácio de Sá</div>
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
