import React from 'react'
import PlantLink from './PlantLink'
import { REPELENTES } from '../data/plantas'

export default function RepelentesLeft({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">3.03</div>
      <div className="entry-title">Repelentes Naturales</div>
      <div className="entry-sub">plantas que protegen con su aroma</div>
      <hr className="entry-divider"/>
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
      <div className="footer-ref">
        Datos extraídos de la experiencia del proyecto y fuentes de permacultura.
      </div>
    </div>
  );
}
