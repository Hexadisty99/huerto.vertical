import PlantLink from './PlantLink'
import { REPELENTES } from '../data/plantas'

export default function RepelentesRight({onGo}){
  const plantas = REPELENTES.map(r => r.planta);
  return (
    <div className="page-scroll">
      <div className="section-label">Cómo funcionan</div>
      <p className="lede">
        Los repelentes naturales liberan compuestos volátiles que confunden o
        ahuyentan a los insectos plaga. No los matan, los desorientan.
      </p>
      <div className="section-label">Estrategia de uso</div>
      <ul className="care-list">
        <li>Intercalar repelentes entre las plantas que quieres proteger.</li>
        <li>Combinar varios tipos para cubrir más plagas a la vez.</li>
        <li>Plantar en los bordes del huerto como barrera perimetral.</li>
        <li>Renovar las plantas cada temporada para mantener la eficacia.</li>
      </ul>
      <div className="section-label">Repelentes disponibles</div>
      <div className="companions">
        {plantas.map(p=>(
          <span key={p} className="chip good"><PlantLink name={p} onGo={onGo}/></span>
        ))}
      </div>
      <div className="marginal-note">"el tomillo es el repelente más versátil — nunca sobra"</div>
    </div>
  );
}
