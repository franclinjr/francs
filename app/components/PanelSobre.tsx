import Image from "next/image";

interface PanelSobreProps {
  isActive: boolean;
  onPanelChange: (panel: "sobre" | "curriculo" | "beats" | "servicos") => void;
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
          <button className="btn" onClick={() => onPanelChange("servicos")}>
            Ver serviços
          </button>
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
