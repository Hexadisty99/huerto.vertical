import React from 'react'
import PlantLink from './PlantLink'
import StarRow from './StarRow'
import { ASSOC_TABLE, REPELENTES, DEPREDADORES } from '../data/plantas'

export default function CompanionsRight({onGo}){
  return (
    <div className="page-scroll">
      <div className="section-label">Asociaciones más fuertes</div>
      <table className="spec">
        <tbody>
          {ASSOC_TABLE.map((r,i)=>{
            const parts = r.a.split("+").map(s=>s.trim());
            return (
              <tr key={i}>
                <td className="v" style={{width:"55%"}}>
                  {parts.map((p,j)=>(
                    <React.Fragment key={j}>
                      {j>0 && " + "}
                      <PlantLink name={p} onGo={onGo}/>
                    </React.Fragment>
                  ))}
                  <br/><span style={{fontSize:11.5, color:"var(--ink-soft)", fontWeight:400}}>{r.b}</span>
                </td>
                <td className="v" style={{textAlign:"right"}}><StarRow n={r.stars}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="section-label">Repelentes naturales</div>
      <table className="spec">
        <tbody>
          {REPELENTES.map((r,i)=>(
            <tr key={i}>
              <td className="k"><PlantLink name={r.planta} onGo={onGo}/></td>
              <td className="v">{r.plaga}<br/><span style={{fontSize:11.5, color:"var(--ink-soft)"}}>{r.como}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="section-label">Atracción de depredadores</div>
      <table className="spec">
        <tbody>
          {DEPREDADORES.map((r,i)=>(
            <tr key={i}>
              <td className="k"><PlantLink name={r.planta} onGo={onGo}/></td>
              <td className="v">{r.insecto} → controla {r.controla}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-ref">
        Cada ficha de planta individual tiene el detalle completo de sus asociaciones —
        <a onClick={()=>onGo("plants")}> ir al índice de plantas</a>.
      </div>
    </div>
  );
}
