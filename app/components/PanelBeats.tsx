interface PanelBeatsProps { isActive: boolean; hasBeenActive: boolean; }

const featuredBeat = {

  title: "Mistério",
  tags: ["Boombap", "96 BPM", "C#m"],
  desc: "Inspirado na estética do rap nacional dos anos 90 e 2000, Mistério nasce de um sample de Luiz Melodia, mantendo viva a essência dos clássicos enquanto conversa com a cena atual do rap brasileiro.",
  url: "https://soundcloud.com/franclin-junior",
  embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2050452608&color=%2371766c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", // cole aqui o src do iframe do SoundCloud
};

const beats = [
  { name: "QCCV", bpm: "98 BPM", key: "Bmaj", genre: "R&B",  embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2053974740&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
  { name: "High Vibe", bpm: "110 BPM", key: "Cmin", genre: "R&B", embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2347783712&color=%23949c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
  { name: "React", bpm: "125 BPM", key: "Cmin", genre: "R&B", embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2050445972&color=%23949c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
  { name: "22", bpm: "98 BPM", key: "Gmaj",   genre: "R&B", embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2050440752&color=%23949c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
];

export default function PanelBeats({ isActive, hasBeenActive }: PanelBeatsProps) {
  return (
    <div id="panel-beats" className={`panel${isActive ? " active" : ""}`}>
      <div className="section-inner">
        <p className="section-eyebrow">02 — Produção Musical</p>
        <h2 className="section-title">Beats</h2>

        <p className="beats-intro">
          Produção musical nas horas vagas.
        </p>

        {/* Featured */}
        <div className="feat-beat">
          <div className="feat-beat-info">
            <p className="feat-eyebrow">★ Destaque</p>
            <div className="feat-beat-title">{featuredBeat.title.replace(" ", "\n").split("\n").map((w, i) => (
              <span key={i}>{w}{i === 0 && <br />}</span>
            ))}</div>
            <div className="tags">
              {featuredBeat.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <p className="feat-beat-desc">{featuredBeat.desc}</p>
          </div>
          <div className="feat-beat-player">
            {hasBeenActive && featuredBeat.embed ? (
              <iframe
                width="100%"
                height="100%"
                allow="autoplay"
                src={featuredBeat.embed}
                className="sc-embed"
                style={{ border: "none" }}
              />
            ) : (
              <div className="sc-placeholder">
                <div className="sc-icon">◉</div>
              </div>
            )}
          </div>
        </div>

        {/* Beat list */}
        <div className="beat-list">
          {beats.map((beat) => (
            <div className="beat-card" key={beat.name}>
              <div className="beat-card-player">
                {hasBeenActive && beat.embed ? (
                  <iframe
                    width="100%"
                    height="120"
                    allow="autoplay"
                    src={beat.embed}
                    style={{ border: "none", display: "block" }}
                  />
                ) : (
                  <div className="sc-placeholder">
                    <div className="sc-icon">◉</div>
                  </div>
                )}
              </div>
              <div className="beat-card-info">
                <div className="beat-card-name">{beat.name}</div>
                <div className="tags" style={{ marginBottom: 0 }}>
                  <span className="tag">{beat.genre}</span>
                  <span className="tag">{beat.bpm}</span>
                  <span className="tag">{beat.key}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
