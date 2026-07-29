export default function TreatmentLeft(){
  return (
    <div className="page-scroll">
      <div className="entry-num">5.01</div>
      <div className="entry-title">Tratamiento</div>
      <div className="entry-sub">cuando la plaga ya está aquí</div>
      <hr className="entry-divider"/>
      <p className="lede">
        Actuar rápido y con el método menos agresivo posible. La mayoría de plagas comunes en
        un huerto de terraza se controlan sin recurrir a productos químicos.
      </p>
      <div className="section-label">Pulgones</div>
      <div className="meter">{[1,1,1,0,0].map((v,i)=><i key={i} className={v?"on":""}/>)}</div>
      <ul className="care-list">
        <li>Chorro de agua a presión para desprenderlos de las hojas.</li>
        <li>Jabón potásico diluido, pulverizado directamente sobre las colonias.</li>
        <li>Introducir o atraer mariquitas si la infestación es persistente.</li>
      </ul>
      <div className="section-label">Mosca blanca</div>
      <div className="meter">{[1,1,0,0,0].map((v,i)=><i key={i} className={v?"on":""}/>)}</div>
      <ul className="care-list">
        <li>Trampas cromáticas amarillas cerca de las plantas afectadas.</li>
        <li>Romero y tomillo cercanos ayudan a reducir la reincidencia.</li>
      </ul>
    </div>
  );
}
