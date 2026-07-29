export default function SustratoRight(){
  return (
    <div className="page-scroll">
      <div className="section-label">Mezcla casera (huerto vertical)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Sustrato universal</td><td className="v">40% — Base nutritiva</td></tr>
          <tr><td className="k">Humus de lombriz</td><td className="v">30% — Enriquecimiento orgánico</td></tr>
          <tr><td className="k">Perlite</td><td className="v">20% — Drenaje y aireación</td></tr>
          <tr><td className="k">Compost</td><td className="v">10% — Nutrientes adicionales</td></tr>
        </tbody>
      </table>
      <div className="section-label">Características ideales</div>
      <ul className="care-list">
        <li>Ligero, poroso, pH 6.0-7.0</li>
        <li>Retiene humedad sin encharcar</li>
      </ul>
      <div className="section-label">Renovación del sustrato</div>
      <div className="section-label" style={{fontSize:13, marginTop:8}}>Parcial (cada temporada)</div>
      <ol className="care-list">
        <li>Retirar 3-5 cm del sustrato viejo</li>
        <li>Añadir mezcla nueva (sustrato + humus + perlita)</li>
        <li>Mezclar y regar</li>
      </ol>
      <div className="section-label" style={{fontSize:13, marginTop:8}}>Completa (cada 1-2 años)</div>
      <ol className="care-list">
        <li>Retirar planta y limpiar raíces</li>
        <li>Lavar maceta</li>
        <li>Rellenar con sustrato nuevo</li>
        <li>Reposicionar y no regar 24-48h</li>
      </ol>
      <div className="section-label">Señales para renovar</div>
      <ul className="care-list">
        <li>Crecimiento lento</li>
        <li>Suelo compactado</li>
        <li>Hojas amarillas</li>
        <li>Después de plagas</li>
      </ul>
      <div className="footer-ref">
        Basado en la guía de cultivo del proyecto.
      </div>
    </div>
  );
}
