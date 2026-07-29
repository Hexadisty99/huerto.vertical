import React from 'react'
import PlantLink from './PlantLink'
import { DEPREDADORES } from '../data/plantas'

export default function DepredadoresLeft({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">3.04</div>
      <div className="entry-title">Depredadores</div>
      <div className="entry-sub">insectos beneficiosos que controlan plagas</div>
      <hr className="entry-divider"/>
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
      <div className="section-label">Más aliados comunes</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Mariquitas</td><td className="v">Devoran pulgones a gran velocidad</td></tr>
          <tr><td className="k">Crisopas</td><td className="v">Sus larvas comen pulgones, ácaros y trips</td></tr>
          <tr><td className="k">Avispas parasitarias</td><td className="v">Ponen huevos dentro de orugas</td></tr>
        </tbody>
      </table>
      <div className="footer-ref">
        Atraer depredadores es la forma más sostenible de control de plagas.
      </div>
    </div>
  );
}
