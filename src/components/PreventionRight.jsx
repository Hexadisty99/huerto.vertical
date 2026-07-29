export default function PreventionRight(){
  return (
    <div className="page-scroll">
      <div className="section-label">Aliados biológicos</div>
      <table className="spec">
        <tbody>
          <tr><td className="k">Mariquitas</td><td className="v">Devoran pulgones a gran velocidad — atraerlas con eneldo y perejil en flor.</td></tr>
          <tr><td className="k">Sírfidos</td><td className="v">Sus larvas comen pulgones; atraídos por umbelas de eneldo y perejil.</td></tr>
          <tr><td className="k">Avispas parasitarias</td><td className="v">Controlan orugas de col — el eneldo cercano las atrae.</td></tr>
          <tr><td className="k">Abejas y polinizadores</td><td className="v">Mejoran la producción de fruto en fresas, tomates y pimientos.</td></tr>
        </tbody>
      </table>

      <div className="section-label">Calendario de vigilancia</div>
      <div style={{display:"flex", gap:6, marginBottom:14}}>
        {["Pri","Ver","Oto","Inv"].map((s,i)=>(
          <div key={s} style={{flex:1, textAlign:"center", padding:"8px 4px", border:"1px solid rgba(90,60,20,0.2)", borderRadius:4, background: i<2 ? "rgba(74,122,83,0.08)" : "transparent"}}>
            <div style={{fontFamily:"JetBrains Mono", fontSize:10, color:"var(--sepia)"}}>{s}</div>
            <div style={{fontSize:11, marginTop:3}}>{i<2 ? "alerta alta" : "alerta baja"}</div>
          </div>
        ))}
      </div>

      <div className="marginal-note">"revisar el envés de las hojas cada domingo, con café en mano"</div>
    </div>
  );
}
