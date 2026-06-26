import Image from "next/image";

interface PanelSobreProps {
  isActive: boolean;
  onPanelChange: (panel: "sobre" | "curriculo" | "beats") => void;
}

export default function PanelSobre({ isActive, onPanelChange }: PanelSobreProps) {
  return (
    <div id="panel-sobre" className={`panel${isActive ? " active" : ""}`}>
      <section id="sobre">
        <h1 className="hero-name">Franclin Junior</h1>

        <p className="hero-sub">
          Engenheiro de Software com experiência no desenvolvimento de produtos digitais, 
          automações inteligentes e soluções baseadas em Inteligência Artificial.
        </p>

        <div className="polaroid-wrap">
          <div className="polaroid">
            <div className="polaroid-img">
              <Image
                src="/profile.jpg"
                alt="Franclin Junior"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="polaroid-img-inner"
              />
            </div>
          </div>
        </div>

         <div className="hero-btns">
          <button className="btn btn-solid" onClick={() => onPanelChange("curriculo")}>
            Ver Currículo
          </button>
          <a className="btn" href="https://www.linkedin.com/in/franclin-junior-728310207/" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: "6px", flexShrink: 0 }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="beat-tags hero-beat-tags">
          <span className="beat-tag">4+ anos de experiência</span>
          <span className="beat-tag">Desenvolvimento Frontend</span>
          <span className="beat-tag">Agentes de IA</span>
          <span className="beat-tag">HubSpot</span>
        </div>

      </section>
    </div>
  );
}
