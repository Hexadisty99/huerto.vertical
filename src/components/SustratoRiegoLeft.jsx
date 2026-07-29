export default function SustratoRiegoLeft(){
  return (
    <div className="page-scroll">
      <div className="entry-num">7.04</div>
      <div className="entry-title">Riego</div>
      <div className="entry-sub">sistema de riego para huerto vertical</div>
      <hr className="entry-divider"/>
      <div className="section-label">Reglas básicas</div>
      <ul className="care-list">
        <li><b>Riego en la base:</b> Evitar mojar hojas (previene hongos)</li>
        <li><b>Frecuencia:</b> Cuando la capa superior esté seca (1-2 cm)</li>
        <li><b>Momento ideal:</b> Al atardecer (reduce evaporación)</li>
        <li><b>Cantidad:</b> Hasta que salga agua por drenaje</li>
      </ul>
      <div className="section-label">Características del agua</div>
      <ul className="care-list">
        <li><b>Sin cloro:</b> Dejar reposar el agua 24-48h antes de usar</li>
        <li><b>Temperatura:</b> Evitar agua fría directo del grifo</li>
        <li><b>Calidad:</b> Agua de lluvia es la mejor opción</li>
      </ul>
      <div className="section-label">Por estación</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Primavera</td><td className="v">Riego moderado, cada 2-3 días</td></tr>
          <tr><td className="k">Verano</td><td className="v">Aumentar frecuencia — hasta 2 veces/día en calor extremo</td></tr>
          <tr><td className="k">Otoño</td><td className="v">Reducir gradualmente</td></tr>
          <tr><td className="k">Invierno</td><td className="v">Mínimo, según humedad ambiental</td></tr>
        </tbody>
      </table>
    </div>
  );
}
