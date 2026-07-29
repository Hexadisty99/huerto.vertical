export default function SustratoPHLeft(){
  return (
    <div className="page-scroll">
      <div className="entry-num">7.02</div>
      <div className="entry-title">pH del Suelo</div>
      <div className="entry-sub">medición y regulación</div>
      <hr className="entry-divider"/>
      <div className="section-label">Escala de pH</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">&lt; 5.5</td><td className="v">Muy ácido — toxicidad, bloqueo de nutrientes</td></tr>
          <tr><td className="k">5.5 – 6.5</td><td className="v">Ácido — óptimo para fresas</td></tr>
          <tr><td className="k">6.0 – 7.0</td><td className="v" style={{fontWeight:600, color:"var(--leaf-dark)"}}>Neutro — ideal, máxima absorción</td></tr>
          <tr><td className="k">7.0 – 7.5</td><td className="v">Ligeramente alcalino — aceptable</td></tr>
          <tr><td className="k">&gt; 7.5</td><td className="v">Alcalino — bloqueo de hierro y manganeso</td></tr>
        </tbody>
      </table>
      <div className="section-label">Toma de muestras</div>
      <ul className="care-list">
        <li><b>Profundidad:</b> 10-15 cm (tierra) / 5-10 cm (macetas)</li>
        <li><b>Puntos:</b> Muestrear en zig-zag (5-10 puntos) y mezclar</li>
        <li><b>Evitar:</b> Zonas cerca de paredes, caminos o abonos recientes</li>
        <li><b>Agua:</b> Siempre usar <b>agua destilada</b> (nunca del grifo)</li>
      </ul>
    </div>
  );
}
