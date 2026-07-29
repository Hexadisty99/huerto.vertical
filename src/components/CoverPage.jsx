import Icon from './Icon'
import Flourish from './Flourish'
import { HERBS, FRUITS } from '../data/plantas'

export function CoverPage({onGo}){
  return (
    <div className="page-scroll">
      <div className="stamp">ARCHIVO<br/>TERRAZA<br/>N.º 01</div>
      <h1 className="cover-title">Bitácora del<br/>Huerto Vertical</h1>
      <p className="cover-sub">— notas de campo —</p>
      <hr className="entry-divider"/>
      <div className="stat-block">
        <div className="stat-card"><div className="num">10</div><div className="lbl">especies</div></div>
        <div className="stat-card"><div className="num">5+h</div><div className="lbl">luz diaria</div></div>
      </div>
      <div className="section-label">Índice</div>
      <ul className="toc-list">
        <li className="toc-item" onClick={()=>onGo("plants")}>
          <span className="toc-num">1–2</span><span className="toc-name">Fichas de plantas</span>
        </li>
        <li className="toc-item" onClick={()=>onGo("companions")}>
          <span className="toc-num">3</span><span className="toc-name">Asociaciones</span>
        </li>
        <li className="toc-item" onClick={()=>onGo("prevention")}>
          <span className="toc-num">4</span><span className="toc-name">Prevención de plagas</span>
        </li>
        <li className="toc-item" onClick={()=>onGo("treatment")}>
          <span className="toc-num">5</span><span className="toc-name">Tratamiento de plagas</span>
        </li>
        <li className="toc-item" onClick={()=>onGo("log")}>
          <span className="toc-num">6</span><span className="toc-name">Diario de observaciones</span>
        </li>
      </ul>
      <div className="marginal-note">"cada maceta, un experimento distinto"</div>
    </div>
  );
}

export function IndexRightPage({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">0.02</div>
      <div className="entry-title">Selección de especies</div>
      <div className="entry-sub">lo que ya está creciendo en la lista</div>
      <hr className="entry-divider"/>
      <div className="section-label">Aromáticas</div>
      <div className="companions">
        {HERBS.map(h=>(
          <span key={h.id} className="chip good" style={{cursor:"pointer"}} onClick={()=>onGo("plants",h.id)}>
            <Icon name="leaf" size={13}/> {h.nombre}
          </span>
        ))}
      </div>
      <div className="section-label">Frutas y hortalizas</div>
      <div className="companions">
        {FRUITS.map(f=>(
          <span key={f.id} className="chip good" style={{cursor:"pointer"}} onClick={()=>onGo("plants",f.id)}>
            <Icon name="berry" size={13}/> {f.nombre}
          </span>
        ))}
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", marginTop:10}}>
        <Flourish/>
      </div>
    </div>
  );
}
