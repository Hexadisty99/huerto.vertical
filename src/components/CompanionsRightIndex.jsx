import { ASSOC_TABLE, REPELENTES, DEPREDADORES } from '../data/plantas'

const SUBS = [
  {
    id:"asociaciones",
    title:"Asociaciones Fuertes",
    desc:"Las 9 combinaciones más efectivas para tu huerto",
    count: ASSOC_TABLE.length,
    icon:"★"
  },
  {
    id:"repelentes",
    title:"Repelentes Naturales",
    desc:"Plantas que ahuyentan plagas con su aroma",
    count: REPELENTES.length,
    icon:"🛡"
  },
  {
    id:"depredadores",
    title:"Atracción de Depredadores",
    desc:"Insectos beneficiosos que controlan plagas",
    count: DEPREDADORES.length,
    icon:"🐞"
  }
];

export default function CompanionsRightIndex({onGo}){
  return (
    <div className="page-scroll">
      <div className="entry-num">3.02</div>
      <div className="entry-title">Categorías</div>
      <div className="entry-sub">selecciona un tema para ver sus detalles</div>
      <hr className="entry-divider"/>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {SUBS.map(s=>(
          <div
            key={s.id}
            onClick={()=>onGo("companions",s.id)}
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
              <span style={{marginLeft:"auto", fontFamily:"JetBrains Mono", fontSize:11, color:"var(--sepia)"}}>{s.count} entradas</span>
            </div>
            <p style={{margin:0, fontSize:14, color:"var(--ink-soft)", paddingLeft:36}}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="footer-ref">
        Toca cualquier categoría para explorar sus datos y recomendaciones.
      </div>
    </div>
  );
}
