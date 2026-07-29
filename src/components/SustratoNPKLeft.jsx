export default function SustratoNPKLeft(){
  return (
    <div className="page-scroll" style={{height:"100%",overflow:"hidden"}}>
      <div className="entry-num">7.03</div>
      <div className="entry-title">NPK</div>
      <div className="entry-sub">nitrógeno, fósforo y potasio</div>
      <hr className="entry-divider"/>
      <div className="section-label">¿Qué es el NPK?</div>
      <p className="lede">
        <b>N</b> = Nitrógeno | <b>P</b> = Fósforo | <b>K</b> = Potasio.
        Son los tres macronutrientes principales que las plantas necesitan en grandes cantidades.
      </p>
      <div className="section-label">Nitrógeno (N)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Función</td><td className="v">Crecimiento vegetativo, clorofila, proteínas</td></tr>
          <tr><td className="k">Si falta</td><td className="v">Hojas amarillas empezando por las viejas, crecimiento lento</td></tr>
          <tr><td className="k">Si sobra</td><td className="v">Hojas muy verdes, pocos frutos, más plagas</td></tr>
          <tr><td className="k">Nivel ideal</td><td className="v">40-60 ppm</td></tr>
        </tbody>
      </table>
      <div className="section-label">Fósforo (P)</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Función</td><td className="v">Raíces fuertes, floración, fructificación, energía (ATP)</td></tr>
          <tr><td className="k">Si falta</td><td className="v">Raíces débiles, poca floración, frutos pequeños</td></tr>
          <tr><td className="k">Si sobra</td><td className="v">Bloqueo de absorción de hierro y zinc</td></tr>
          <tr><td className="k">Nivel ideal</td><td className="v">20-40 ppm</td></tr>
        </tbody>
      </table>
    </div>
  );
}
