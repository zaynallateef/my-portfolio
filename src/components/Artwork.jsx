export function Star({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} {...props}>
      <path d="m50 0 8 32 27-17-17 27 32 8-32 8 17 27-27-17-8 32-8-32-27 17 17-27L0 50l32-8-17-27 27 17Z" />
    </svg>
  )
}

export function RetroScene() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-orbit-label"><span className="tiny-dot" /> EXTRA GOOD ENERGY</div>
      <div className="desktop-window">
        <div className="window-bar"><span className="window-dot" /><span>creative_mode.exe</span><div className="window-controls"><span>−</span><span>□</span><span>×</span></div></div>
        <div className="desktop-scene">
          <div className="scene-coordinate">X: 02026<br />Y: INFINITY</div>
          <Star className="scene-star star-one" /><Star className="scene-star star-two" />
          <svg viewBox="0 0 440 340" className="planet" fill="none">
            <defs>
              <radialGradient id="planet-fill" cx=".32" cy=".24" r=".8"><stop stopColor="#efffc0" /><stop offset=".5" stopColor="#cefa68" /><stop offset=".83" stopColor="#a8cd4f" /><stop offset="1" stopColor="#719337" /></radialGradient>
              <pattern id="planet-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="#253115" opacity=".18" /></pattern>
              <clipPath id="planet-clip"><circle cx="220" cy="164" r="112" /></clipPath>
            </defs>
            <ellipse cx="220" cy="169" rx="197" ry="60" transform="rotate(-26 220 169)" stroke="#f7f4e8" strokeWidth="4" />
            <circle cx="220" cy="164" r="112" fill="url(#planet-fill)" stroke="#24241f" strokeWidth="2.5" />
            <g clipPath="url(#planet-clip)"><circle cx="220" cy="164" r="112" fill="url(#planet-dots)" /><ellipse cx="220" cy="164" rx="52" ry="112" stroke="#5b7831" opacity=".25" /><path d="M108 164h224M123 110q97 38 194 0M123 218q97-38 194 0" stroke="#5b7831" opacity=".25" /></g>
            <ellipse cx="187" cy="145" rx="9" ry="18" fill="#24241f" transform="rotate(10 187 145)" /><ellipse cx="247" cy="133" rx="9" ry="18" fill="#24241f" transform="rotate(10 247 133)" />
            <path d="M180 184c22 34 62 30 79-13" stroke="#24241f" strokeWidth="6" strokeLinecap="round" />
            <path d="M45 205c-17 24 0 42 43 41 49-1 112-19 171-49s106-68 127-96" stroke="#f7f4e8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="80" cy="240" r="8" fill="#f8a4c4" stroke="#24241f" strokeWidth="2" />
            <path d="M354 227v35m-17-18h35M98 63v23M87 75h23" stroke="#f7f4e8" strokeWidth="3" />
          </svg>
          <div className="scene-caption">A SMALL CORNER OF<br /><strong>A VERY BIG INTERNET.</strong></div>
          <div className="scene-index">✳ 001</div>
        </div>
        <div className="window-status"><span><span className="tiny-dot" /> IMAGINATION: ONLINE</span><span>100% ↗</span></div>
      </div>
      <div className="human-sticker"><span>HUMAN MADE</span><svg viewBox="0 0 60 40"><path d="m7 7 14 13L7 33m46-26L39 20l14 13M34 3l-8 34" fill="none" stroke="currentColor" strokeWidth="4" /></svg><span>WITH A LITTLE MAGIC</span></div>
      <div className="art-note"><Star /> GOOD THINGS<br />TAKE CURIOSITY.</div>
      <svg className="doodle-arrow" viewBox="0 0 140 70"><path d="M130 8C72 4 112 68 23 49m16-17L19 49l23 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  )
}

export function ProjectArtwork({ kind }) {
  if (kind === 'rag') return (
    <div className="project-art rag-art" aria-hidden="true">
      <div className="cover-label"><span>RESEARCH, MEET RETRIEVAL.</span><span>01 / NLP</span></div>
      <div className="cover-headline">ASK YOUR<br /><span>DOCUMENTS.</span></div>
      <div className="paper-stack"><div className="paper-sheet back" /><div className="paper-sheet"><span>RESEARCH_PAPER.PDF</span><div className="paper-lines" /><div className="paper-highlight" /><div className="paper-lines short" /><span className="paper-page">p. 001 ↗</span></div></div>
      <div className="rag-chip"><Star /> QWEN + RAG</div>
      <span className="cover-bottom">CONTEXT IS EVERYTHING. ↗</span>
    </div>
  )
  if (kind === 'qa') return (
    <div className="project-art qa-art" aria-hidden="true">
      <div className="cover-label"><span>A LITTLE CONTEXT GOES A LONG WAY.</span><span>02 / NLP</span></div>
      <div className="qa-question"><span>INPUT_QUESTION</span><strong>What’s the story?</strong><span className="bubble-tail" /></div>
      <div className="neural-path"><i /><span /><i /><span /><i /><span /><i /></div>
      <div className="qa-answer"><span>MEMORY + ATTENTION</span><strong>Let’s connect the dots.</strong><Star /></div>
      <span className="cover-bottom">WORDS IN. UNDERSTANDING OUT. ↗</span>
    </div>
  )
  if (kind === 'sentiment') return (
    <div className="project-art sentiment-art" aria-hidden="true">
      <div className="cover-label"><span>BEHIND EVERY REVIEW, A FEELING.</span><span>03 / NLP</span></div>
      <div className="cover-headline">FEELING<br /><span>THE WORDS.</span></div>
      <div className="sentiment-faces"><div className="mood-face positive"><span>• •</span><b>⌣</b></div><div className="mood-face negative"><span>• •</span><b>⌢</b></div></div>
      <div className="sentiment-tag">POSITIVE <span>↔</span> NEGATIVE</div>
      <span className="cover-bottom">A SENTIMENT STUDY. ✳</span>
    </div>
  )
  if (kind === 'sales') return (
    <div className="project-art sales-art" aria-hidden="true">
      <div className="cover-label"><span>THE BIG PICTURE, IN THE DETAILS.</span><span>04 / DATA</span></div>
      <div className="chart-cover"><div className="chart-cover-top"><strong>data → clarity.</strong><span>▥</span></div><div className="chart-body"><div className="chart-bars">{[35, 58, 43, 76, 64, 90].map((height, index) => <i key={index} style={{ height: height + '%' }} />)}</div><svg className="chart-donut" viewBox="0 0 100 100"><circle cx="50" cy="50" r="32" fill="none" stroke="#d5f86b" strokeWidth="18" /><circle cx="50" cy="50" r="32" fill="none" stroke="#5254de" strokeWidth="18" strokeDasharray="120 201" transform="rotate(-90 50 50)" /><text x="50" y="54" textAnchor="middle" fontSize="11" fill="#25251f">SALES</text></svg></div><div className="chart-cover-bottom">CLEAN → EXPLORE → VISUALIZE <span>↗</span></div></div>
      <span className="cover-bottom">PYTHON × POWER BI × DESIGN</span>
    </div>
  )
  return (
    <div className="project-art housing-art" aria-hidden="true">
      <div className="cover-label"><span>THERE’S A PATTERN IN THE NEIGHBORHOOD.</span><span>05 / ML</span></div>
      <div className="housing-title">A MODEL<br /><span>FOR HOME.</span></div>
      <svg className="house-graphic" viewBox="0 0 220 180"><path d="m20 80 90-65 90 65" fill="#f6b9d0" stroke="#25251f" strokeWidth="3" strokeLinejoin="round" /><path d="M40 74v90h140V74l-70-50Z" fill="#f5f3eb" stroke="#25251f" strokeWidth="3" /><path d="M95 164v-57h34v57" fill="#5254de" stroke="#25251f" strokeWidth="3" /><path d="M58 85h24v29H58zm80 0h24v29h-24Z" fill="#d5f86b" stroke="#25251f" strokeWidth="2" /><path d="M70 85v29m-12-14h24m68-15v29m-12-14h24" stroke="#25251f" strokeWidth="2" /><circle cx="119" cy="136" r="2" fill="#f5f3eb" /><path d="M16 165h190" stroke="#25251f" strokeWidth="3" /></svg>
      <Star className="housing-star" /><span className="cover-bottom">FEATURES. FORESTS. FRONT DOORS. ↗</span>
    </div>
  )
}

