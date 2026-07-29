import { FRUITS } from '../data/plantas'

export default function PlantsIndexRight({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">2.00</div>
      <div className="entry-title">Frutas</div>
      <div className="entry-sub">hortalizas de fruto — 6 a 8 horas de luz, tutor</div>
      <hr className="entry-divider"/>
      <ul className="toc-list">
        {FRUITS.map(f=>(
          <li key={f.id} className="toc-item" onClick={()=>onGo("plants",f.id)}>
            <span className="toc-num">{f.num}</span>
            <span className="toc-name">{f.nombre}</span>
            <span className="toc-tag">{f.cientifico.split(" ")[0]}</span>
          </li>
        ))}
      </ul>
      <div className="section-label">Distribución recomendada</div>
      <p className="lede" style={{fontSize:13.5}}>
        Nivel superior con más luz para tomates y albahaca; nivel intermedio para
        pimientos con tomillo o romero; nivel inferior para fresas y hierbas que
        toleran algo de sombra.
      </p>
    </div>
  );
}
