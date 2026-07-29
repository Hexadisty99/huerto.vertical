export default function SustratoNPKBajar({onSubGo}){
  return (
    <div className="page-scroll" style={{height:"100%",overflow:"hidden"}}>
      <div style={{display:"flex", gap:6, marginBottom:16}}>
        <div onClick={()=>onSubGo(null)} style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,cursor:"pointer",background:"rgba(90,60,20,0.06)",border:"1px solid rgba(90,60,20,0.12)",color:"var(--ink-soft)"}}>← NPK</div>
        <div onClick={()=>onSubGo("subir")} style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,cursor:"pointer",background:"rgba(90,60,20,0.06)",border:"1px solid rgba(90,60,20,0.12)",color:"var(--ink-soft)"}}>Subir Niveles</div>
        <div style={{fontFamily:"JetBrains Mono",fontSize:10,letterSpacing:"0.05em",padding:"6px 10px",borderRadius:3,background:"var(--leaf)",color:"var(--paper)",border:"1px solid var(--leaf-dark)"}}>Bajar Niveles</div>
      </div>
      <div className="entry-num">7.03.02</div>
      <div className="entry-title">Bajar Niveles</div>
      <hr className="entry-divider"/>
      <p className="lede">Cómo reducir el exceso de nutrientes sin dañar el cultivo.</p>
      <ul className="care-list">
        <li><b>Dejar de abonar</b> con ese nutriente hasta que la planta se normalice</li>
        <li><b>Regar abundantemente</b> para lixiviar (arrastrar) el exceso por drenaje — aplicar 2-3 veces el volumen de la maceta</li>
        <li><b>Renovar parcialmente</b> el sustrato retirando 3-5 cm superficiales y reemplazando con sustrato fresco y equilibrado</li>
        <li><b>Plantas consumidoras:</b> sembrar cultivos que requieran grandes cantidades de ese nutriente para agotar el excedente</li>
        <li><b>Observar y esperar:</b> la planta misma se regula con el tiempo si dejamos de forzarla</li>
      </ul>
      <div className="marginal-note">"menos es más — el exceso de abono daña más que la falta"</div>
    </div>
  );
}
