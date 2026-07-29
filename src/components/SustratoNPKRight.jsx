export default function SustratoNPKRight({onSubGo}){
  return (
    <div className="page-scroll" style={{height:"100%",overflow:"hidden"}}>
      <div className="section-label">Potasio (K)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Función</td><td className="v">Resistencia a plagas, calidad de frutos, balance hídrico</td></tr>
          <tr><td className="k">Si falta</td><td className="v">Bordes marrones en hojas, frutos pequeños, planta débil</td></tr>
          <tr><td className="k">Si sobra</td><td className="v">Bloqueo de magnesio y calcio</td></tr>
          <tr><td className="k">Nivel ideal</td><td className="v">150-250 ppm</td></tr>
        </tbody>
      </table>
      <div className="section-label">Resumen NPK</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">N — Nitrógeno</td><td className="v">Hojas y crecimiento — ideal 40-60 ppm</td></tr>
          <tr><td className="k">P — Fósforo</td><td className="v">Raíces y flores — ideal 20-40 ppm</td></tr>
          <tr><td className="k">K — Potasio</td><td className="v">Frutos y resistencia — ideal 150-250 ppm</td></tr>
        </tbody>
      </table>
      <hr className="entry-divider"/>
      <div style={{display:"flex", flexDirection:"column", gap:8}}>
        <div className="section-label">Regulación</div>
        <div
          onClick={()=>onSubGo("subir")}
          style={{
            padding:"12px 16px", cursor:"pointer", borderRadius:4,
            background:"rgba(90,60,20,0.06)", border:"1px solid rgba(90,60,20,0.15)",
            fontFamily:"JetBrains Mono", fontSize:11, letterSpacing:"0.05em",
            transition:"all .15s ease"
          }}
        >
          Subir Niveles →
        </div>
        <div
          onClick={()=>onSubGo("bajar")}
          style={{
            padding:"12px 16px", cursor:"pointer", borderRadius:4,
            background:"rgba(90,60,20,0.06)", border:"1px solid rgba(90,60,20,0.15)",
            fontFamily:"JetBrains Mono", fontSize:11, letterSpacing:"0.05em",
            transition:"all .15s ease"
          }}
        >
          Bajar Niveles →
        </div>
      </div>
      <div className="marginal-note">"mide antes de abonar — el pH afecta la absorción de NPK"</div>
    </div>
  );
}
