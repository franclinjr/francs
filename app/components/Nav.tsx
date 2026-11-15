"use client";

type Panel = "sobre" | "curriculo" | "beats" | "servicos";

interface NavProps {
  activePanel: Panel;
  onPanelChange: (panel: Panel) => void;
}

export default function Nav({ activePanel, onPanelChange }: NavProps) {
  return (
    <nav>
      <button
        className={`nav-btn${activePanel === "sobre" ? " active" : ""}`}
        onClick={() => onPanelChange("sobre")}
      >
        Sobre
      </button>
      <button
        className={`nav-btn${activePanel === "servicos" ? " active" : ""}`}
        onClick={() => onPanelChange("servicos")}
      >
        Serviços
      </button>
      <button
        className={`nav-btn${activePanel === "curriculo" ? " active" : ""}`}
        onClick={() => onPanelChange("curriculo")}
      >
        Currículo
      </button>
      <a
        className="nav-btn"
        href="https://beats.francs.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Beats
      </a>
    </nav>
  );
}
