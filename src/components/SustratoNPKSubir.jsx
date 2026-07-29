export default function SustratoNPKSubir({onSubGo}){
  return (
    <div className="page-scroll" style={{height:"100%",overflow:"hidden"}}>
      <div style={{display:"flex", gap:6, marginBottom:16}}>
        <div onClick={()=>onSubGo(null)} style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,cursor:"pointer",background:"rgba(90,60,20,0.06)",border:"1px solid rgba(90,60,20,0.12)",color:"var(--ink-soft)"}}>← NPK</div>
        <div style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,background:"var(--leaf)",color:"var(--paper)",border:"1px solid var(--leaf-dark)"}}>Subir Niveles</div>
        <div onClick={()=>onSubGo("bajar")} style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,cursor:"pointer",background:"rgba(90,60,20,0.06)",border:"1px solid rgba(90,60,20,0.12)",color:"var(--ink-soft)"}}>Bajar Niveles</div>
      </div>
      <div className="entry-num">7.03.01</div>
      <div className="entry-title">Subir Niveles</div>
      <hr className="entry-divider"/>
      <p className="lede">Cómo incrementar cada macronutriente de forma orgánica.</p>
      <div className="section-label">Subir Nitrógeno (N)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Humus de lombriz</td><td className="v">100-200 g/m² — liberación lenta, rico en microorganismos</td></tr>
          <tr><td className="k">Compost maduro</td><td className="v">5-10 l/m² — mejora estructura del suelo</td></tr>
          <tr><td className="k">Estiércol</td><td className="v">200-500 g/m² — bien compostado</td></tr>
        </tbody>
      </table>
      <div className="section-label">Subir Fósforo (P)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Harina de huesos</td><td className="v">50-100 g/m² — activa con pH &lt; 7</td></tr>
          <tr><td className="k">Compost rico en P</td><td className="v">5-10 l/m² — de restos de frutas y verduras</td></tr>
        </tbody>
      </table>
      <div className="section-label">Subir Potasio (K)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Ceniza de madera</td><td className="v">100-200 g/m² — no usar en suelos alcalinos</td></tr>
          <tr><td className="k">Compost de frutas</td><td className="v">5-10 l/m² — cáscaras de plátano, restos de tomate</td></tr>
        </tbody>
      </table>
    </div>
  );
}
