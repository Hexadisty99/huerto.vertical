import PlantLink from './PlantLink'
import { ASSOC_TABLE } from '../data/plantas'

export default function AsocFuertesRight({onGo}){
  const tops = ASSOC_TABLE.filter(r => r.stars === 3);
  return (
    <div className="page-scroll">
      <div className="section-label">Por qué funcionan</div>
      <p className="lede">
        Las asociaciones fuertes se basan en mecanismos naturales comprobados:
        repelencia por aroma, atracción de polinizadores, y protección física.
      </p>
      <div className="section-label">Top {tops.length} (★★★)</div>
      <ul className="care-list">
        {tops.map((r,i)=>(
          <li key={i}><b>{r.a}:</b> {r.b}</li>
        ))}
      </ul>
      <div className="section-label">Consejos de colocación</div>
      <ul className="care-list">
        <li>Colocar las plantas compañeras a menos de 30 cm de distancia.</li>
        <li>Alternar hierbas aromáticas entre hortalizas para máxima cobertura.</li>
        <li>Asociar tomate + albahaca es la combinación más fiable para empezar.</li>
        <li>Renovar las aromáticas cada temporada para mantener su potencia.</li>
      </ul>
      <div className="marginal-note">"cuanto más cerca, más efectiva la asociación"</div>
      <div className="footer-ref">
        Ver <a onClick={()=>onGo("plants")}>fichas de plantas</a> para más detalle.
      </div>
    </div>
  );
}
