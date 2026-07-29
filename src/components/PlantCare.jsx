import PlantLink from './PlantLink'
import Icon from './Icon'

export default function PlantCare({plant, onGo}){
  return (
    <div className="page-scroll">
      <div className="section-label">Datos de cultivo</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Profundidad mín.</td><td className="v">{plant.profundidad}</td></tr>
          <tr><td className="k">Luz</td><td className="v">{plant.luz}</td></tr>
          <tr><td className="k">Riego</td><td className="v">{plant.riego}</td></tr>
          <tr><td className="k">Siembra</td><td className="v">{plant.siembra}</td></tr>
          <tr><td className="k">Cosecha</td><td className="v">{plant.cosecha}</td></tr>
        </tbody>
      </table>
      <hr className="entry-divider"/>
      <div className="section-label">Cuidados</div>
      <ul className="care-list">
        {plant.cuidados.map((c,i)=><li key={i}>{c}</li>)}
      </ul>

      {(plant.buenas.length>0 || plant.malas.length>0) &&
        <>
          <div className="section-label">Asociaciones</div>
          {plant.buenas.length>0 && <>
            <div style={{fontSize:12, fontFamily:"JetBrains Mono", color:"var(--sepia)", marginBottom:4}}>COMPAÑEROS IDEALES</div>
            <div className="companions">
              {plant.buenas.map(b=><span key={b} className="chip good"><Icon name="leaf" size={13}/> {b}</span>)}
            </div>
          </>}
          {plant.malas.length>0 && <>
            <div style={{fontSize:12, fontFamily:"JetBrains Mono", color:"var(--sepia)", margin:"10px 0 4px"}}>EVITAR JUNTO A</div>
            <div className="companions">
              {plant.malas.map(b=><span key={b} className="chip bad">✕ {b}</span>)}
            </div>
          </>}
        </>
      }

      <div className="footer-ref">
        Ver también: <a onClick={()=>onGo("companions")}>Asociaciones</a> · <a onClick={()=>onGo("prevention")}>Prevención de plagas</a>
      </div>
    </div>
  );
}
