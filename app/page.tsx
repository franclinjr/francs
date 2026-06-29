"use client";

import { useSyncExternalStore, useState } from "react";
import HalftoneCorners from "./components/HalftoneCorners";
import Nav from "./components/Nav";
import PanelSobre from "./components/PanelSobre";
import PanelServicos from "./components/PanelServicos";
import PanelCurriculo from "./components/PanelCurriculo";
import PanelBeats from "./components/PanelBeats";
import Footer from "./components/Footer";

type Panel = "sobre" | "curriculo" | "beats" | "servicos";

const PANELS: Panel[] = ["sobre", "curriculo", "beats", "servicos"];

function hashToPanel(hash: string): Panel {
  const slug = hash.replace("#", "") as Panel;
  return PANELS.includes(slug) ? slug : "sobre";
}

function subscribeHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export default function Home() {
  const hash = useSyncExternalStore(
    subscribeHash,
    () => window.location.hash,
    () => ""
  );

  const activePanel = hashToPanel(hash);

  const [beatsLoaded, setBeatsLoaded] = useState(false);

  const handlePanelChange = (panel: Panel) => {
    if (panel === "beats") setBeatsLoaded(true);
    window.location.hash = panel;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HalftoneCorners />
      <Nav activePanel={activePanel} onPanelChange={handlePanelChange} />
      <PanelSobre isActive={activePanel === "sobre"} onPanelChange={handlePanelChange} />
      <PanelServicos isActive={activePanel === "servicos"} onPanelChange={handlePanelChange} />
      <PanelCurriculo isActive={activePanel === "curriculo"} />
      <PanelBeats isActive={activePanel === "beats"} hasBeenActive={beatsLoaded || activePanel === "beats"} />
      <Footer />
    </>
  );
}
