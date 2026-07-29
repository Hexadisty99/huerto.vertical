import { Fragment } from 'react'
import PlantLink from './PlantLink'
import StarRow from './StarRow'
import { ASSOC_TABLE } from '../data/plantas'

export default function AsocFuertesLeft({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">3.02</div>
      <div className="entry-title">Asociaciones Fuertes</div>
      <div className="entry-sub">combinaciones probadas para tu huerto vertical</div>
      <hr className="entry-divider"/>
      <table className="spec">
        <tbody>
          {ASSOC_TABLE.map((r,i)=>{
            const parts = r.a.split("+").map(s=>s.trim());
            return (
              <tr key={i}>
                <td className="v" style={{width:"55%"}}>
                  {parts.map((p,j)=>(
                    <Fragment key={j}>
                      {j>0 && " + "}
                      <PlantLink name={p} onGo={onGo}/>
                    </Fragment>
                   ))}
                  <br/><span style={{fontSize:11.5, color:"var(--ink-soft)", fontWeight:400}}>{r.b}</span>
                </td>
                <td className="v" style={{textAlign:"right"}}><StarRow n={r.stars}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
