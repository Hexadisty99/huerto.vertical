import { HERBS } from '../data/plantas'

export default function PlantsIndexLeft({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">1.00</div>
      <div className="entry-title">Hierbas</div>
      <div className="entry-sub">aromáticas — 4 a 8 horas de luz, poca profundidad</div>
      <hr className="entry-divider"/>
      <ul className="toc-list">
        {HERBS.map(h=>(
          <li key={h.id} className="toc-item" onClick={()=>onGo("plants",h.id)}>
            <span className="toc-num">{h.num}</span>
            <span className="toc-name">{h.nombre}</span>
            <span className="toc-tag">{h.cientifico.split(" ")[0]}</span>
          </li>
        ))}
      </ul>
      <div className="marginal-note">toca un nombre para abrir su ficha completa →</div>
    </div>
  );
}
