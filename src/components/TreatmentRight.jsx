export default function TreatmentRight(){
  return (
    <div className="page-scroll">
      <div className="section-label">Ácaros / araña roja</div>
      <div className="meter">{[1,1,1,1,0].map((v,i)=><i key={i} className={v?"on":""}/>)}</div>
      <ul className="care-list">
        <li>Aumentar la humedad ambiental — los ácaros prosperan en ambiente seco.</li>
        <li>Pulverizar aceite de neem diluido cada 5–7 días hasta remitir.</li>
        <li>Aislar la planta afectada si comparte espacio con otras muy juntas.</li>
      </ul>

      <div className="section-label">Orugas y gusanos</div>
      <div className="meter">{[1,1,0,0,0].map((v,i)=><i key={i} className={v?"on":""}/>)}</div>
      <ul className="care-list">
        <li>Retirada manual — sigue siendo el método más eficaz en huertos pequeños.</li>
        <li>Eneldo cercano atrae avispas parasitarias que las controlan solas.</li>
      </ul>

      <div className="section-label">Cuándo escalar</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">1ª semana</td><td className="v">Solo métodos físicos (agua, retirada manual)</td></tr>
          <tr><td className="k">2ª semana</td><td className="v">Jabón potásico o aceite de neem</td></tr>
          <tr><td className="k">Persiste</td><td className="v">Aislar la planta y revisar sustrato/raíces</td></tr>
        </tbody>
      </table>
      <div className="marginal-note">"nunca tratar en pleno sol — quema las hojas"</div>
    </div>
  );
}
