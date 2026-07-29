const SUBS = [
  {
    id:"ph",
    title:"pH del Suelo",
    desc:"Medición casera, tiras, regulación y frecuencia",
    icon:"🧪"
  },
  {
    id:"npk",
    title:"NPK — Nutrientes",
    desc:"Nitrógeno, fósforo y potasio — funciones y cómo medirlos",
    icon:"🌿"
  },
  {
    id:"riego",
    title:"Sistema de Riego",
    desc:"Reglas básicas, frecuencia, cantidad y consejos",
    icon:"💧"
  },
  {
    id:"herramientas",
    title:"Herramientas",
    desc:"Básicas y opcionales para el mantenimiento del huerto",
    icon:"🔧"
  }
];

export default function SustratoRightIndex({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">7.02</div>
      <div className="entry-title">Guía de Cultivo</div>
      <div className="entry-sub">selecciona un tema para ver los detalles</div>
      <hr className="entry-divider"/>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {SUBS.map(s=>(
          <div
            key={s.id}
            onClick={()=>onGo("sustrato",s.id)}
            style={{
              padding:"16px",
              border:"1px solid rgba(90,60,20,0.2)",
              borderRadius:6,
              cursor:"pointer",
              transition:"background .15s ease",
              background:"rgba(255,255,255,0.3)"
            }}
            onMouseOver={e=>e.currentTarget.style.background="rgba(74,122,83,0.08)"}
            onMouseOut={e=>e.currentTarget.style.background="rgba(255,255,255,0.3)"}
          >
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:4}}>
              <span style={{fontSize:22}}>{s.icon}</span>
              <span style={{fontFamily:"Fraunces", fontWeight:600, fontSize:18, color:"var(--ink)"}}>{s.title}</span>
            </div>
            <p style={{margin:0, fontSize:14, color:"var(--ink-soft)", paddingLeft:36}}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="footer-ref">
        Toca cualquier tema para explorar la guía completa de cultivo.
      </div>
    </div>
  );
}
