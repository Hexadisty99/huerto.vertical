export default function PlantDiagram({type}){
  const ink = "var(--ink)";
  const rust = "var(--rust)";
  const leaf = "var(--leaf-dark)";
  const common = { fill:"none", stroke:ink, strokeWidth:1.3, strokeLinecap:"round", strokeLinejoin:"round" };
  const dim = { stroke:rust, strokeWidth:0.9, fill:"none" };
  const dashed = { stroke:ink, strokeWidth:0.9, strokeDasharray:"3 3", fill:"none", opacity:0.55 };

  const Root = ({x=100,y=150}) => (
    <g style={dashed} transform={`translate(${x},${y})`} opacity="0.5">
      <path d="M0 0 C -10 14, -6 26, -16 34 M0 0 C 4 16, 2 24, 10 36 M0 0 C -2 18, 0 30, -2 40" />
    </g>
  );

  const potBase = (
    <g>
      <path d="M60 168 L150 168 L142 195 L68 195 Z" style={common}/>
      <path d="M55 160 L155 160 L150 168 L60 168 Z" style={common}/>
      <line x1="105" y1="20" x2="105" y2="160" style={dashed}/>
    </g>
  );

  const nodes = {
    basil: (
      <g>
        <ellipse cx="70" cy="70" rx="22" ry="15" transform="rotate(-25 70 70)" style={common}/>
        <ellipse cx="140" cy="65" rx="22" ry="15" transform="rotate(20 140 65)" style={common}/>
        <ellipse cx="105" cy="45" rx="20" ry="14" transform="rotate(-2 105 45)" style={common}/>
        <ellipse cx="95" cy="95" rx="18" ry="12" transform="rotate(-30 95 95)" style={common}/>
        <ellipse cx="120" cy="98" rx="18" ry="12" transform="rotate(28 120 98)" style={common}/>
        <path d="M105 45 v70 M105 65 c-14 -3 -20 4 -35 5 M105 85 c16 -3 22 3 38 3" style={common}/>
        {potBase}
        <text x="150" y="55" fontFamily="JetBrains Mono" fontSize="8" fill={rust}>fig. 001</text>
        <line x1="70" y1="70" x2="30" y2="55" style={dim}/>
        <text x="6" y="52" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>hoja ovalada</text>
      </g>
    ),
    parsley: (
      <g>
        {[0,1,2,3,4].map(i=>{
          const ang = -55 + i*28;
          const rad = ang*Math.PI/180;
          const x2 = 105 + 46*Math.sin(rad);
          const y2 = 90 - 46*Math.cos(rad);
          return <g key={i}>
            <path d={`M105 130 Q ${105+18*Math.sin(rad)} ${110-18*Math.cos(rad)} ${x2} ${y2}`} style={common}/>
            <circle cx={x2} cy={y2} r="1.6" fill={leaf} stroke="none"/>
            <path d={`M${x2} ${y2} l -5 -4 M${x2} ${y2} l 5 -4 M${x2} ${y2} l -3 -8 M${x2} ${y2} l 3 -8`} style={{...common, strokeWidth:1}}/>
          </g>;
        })}
        <path d="M105 130 V50" style={common}/>
        {potBase}
        <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>fig. 002 — hoja rizada</text>
      </g>
    ),
    dill: (
      <g>
        <path d="M105 160 V40" style={common}/>
        {[38,55,72,90,108,126].map((y,i)=>(
          <g key={i}>
            <path d={`M105 ${y} q -22 -6 -34 ${i%2?8:-4}`} style={{...common, strokeWidth:1}}/>
            <path d={`M105 ${y} q 22 -6 34 ${i%2?-4:8}`} style={{...common, strokeWidth:1}}/>
          </g>
        ))}
        <g transform="translate(105,40)">
          {[...Array(9)].map((_,i)=>{
            const a = (i/9)*Math.PI*2;
            return <line key={i} x1="0" y1="0" x2={16*Math.cos(a)} y2={16*Math.sin(a)-4} style={{...common,strokeWidth:0.9}}/>
          })}
        </g>
        {potBase}
        <text x="130" y="30" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>umbela — fig. 003</text>
      </g>
    ),
    mint: (
      <g>
        <path d="M105 160 V55" style={common}/>
        {[70,90,110,130].map((y,i)=>(
          <g key={i}>
            <path d={`M105 ${y} q -20 -10 -28 -2 q 10 10 28 2`} style={common}/>
            <path d={`M105 ${y} q 20 -10 28 -2 q -10 10 -28 2`} style={common}/>
            <line x1="90" y1={y-2} x2="98" y2={y+1} style={{...common,strokeWidth:0.7}}/>
            <line x1="120" y1={y-2} x2="112" y2={y+1} style={{...common,strokeWidth:0.7}}/>
          </g>
        ))}
        <Root x={105} y={160}/>
        <rect x="70" y="160" width="70" height="30" rx="2" style={{...dim, strokeDasharray:"4 3"}}/>
        <text x="72" y="200" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>maceta independiente — raíz invasiva</text>
        {potBase}
      </g>
    ),
    thyme: (
      <g>
        <path d="M60 155 C 80 130 70 100 90 70" style={common}/>
        <path d="M60 155 C 45 128 55 95 40 65" style={common}/>
        <path d="M60 155 V60" style={common}/>
        {[...Array(14)].map((_,i)=>{
          const t = i/13;
          const x = 60 + Math.sin(t*6)*14;
          const y = 155 - t*95;
          return <ellipse key={i} cx={x} cy={y} rx="3.5" ry="1.8" transform={`rotate(${(i%2?30:-30)} ${x} ${y})`} style={{...common, strokeWidth:0.9}}/>
        })}
        {potBase}
        <text x="120" y="70" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>fig. 004 — hábito rastrero</text>
      </g>
    ),
    rosemary: (
      <g>
        <path d="M75 158 V50 M95 158 V60 M115 158 V55 M135 158 V65" style={common}/>
        {[75,95,115,135].map((x,gi)=>(
          [...Array(9)].map((_,i)=>{
            const y = 60+gi*4 + i*11;
            if(y>150) return null;
            return <g key={i}>
              <line x1={x} y1={y} x2={x-7} y2={y-1} style={{...common,strokeWidth:0.9}}/>
              <line x1={x} y1={y} x2={x+7} y2={y+1} style={{...common,strokeWidth:0.9}}/>
            </g>
          })
        ))}
        {potBase}
        <path d="M20 100 q 20 -30 40 -10" style={dashed}/>
        <text x="14" y="90" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>barrera de viento</text>
      </g>
    ),
    tomato: (
      <g>
        <line x1="150" y1="20" x2="150" y2="158" style={{...common, strokeWidth:2}}/>
        <path d="M100 158 V50" style={common}/>
        <path d="M100 70 Q125 65 148 55 M100 95 Q78 88 55 78 M100 120 Q126 114 148 100" style={{...common, strokeDasharray:"0"}}/>
        {[[62,80,'a'],[150,58,'b'],[58,120,'c'],[150,102,'d']].map(([x,y,k],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="6" style={common}/>
            <circle cx={x+7} cy={y+4} r="5.5" style={common}/>
            <circle cx={x-6} cy={y+6} r="5" style={common}/>
          </g>
        ))}
        {potBase}
        <text x="10" y="30" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>fig. 005 — tutorado vertical</text>
      </g>
    ),
    pepper: (
      <g>
        <path d="M105 158 V45" style={common}/>
        <path d="M105 70 Q80 62 65 45 M105 95 Q130 88 148 68" style={common}/>
        <g transform="translate(70,48)">
          <path d="M0 0 C -4 14 2 30 8 34 C 14 30 12 12 4 0 Z" style={common}/>
          <line x1="4" y1="0" x2="4" y2="-8" style={common}/>
        </g>
        <g transform="translate(140,72)">
          <path d="M0 0 C -4 14 2 30 8 34 C 14 30 12 12 4 0 Z" style={common}/>
          <line x1="4" y1="0" x2="4" y2="-8" style={common}/>
        </g>
        <line x1="150" y1="20" x2="150" y2="158" style={{...common, strokeWidth:1.6, opacity:0.6}}/>
        {potBase}
        <text x="10" y="30" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>fig. 006 — fruto colgante</text>
      </g>
    ),
    strawberry: (
      <g>
        {[[70,110],[105,100],[140,112]].map(([x,y],i)=>(
          <path key={i} d={`M${x} ${y} c-14 -4 -20 -18 -14 -30 c 8 4 14 14 14 30 z M${x} ${y} c 14 -4 20 -18 14 -30 c -8 4 -14 14 -14 30 z M${x} ${y} c 0 -18 0 -26 0 -32`} style={common}/>
        ))}
        <path d="M105 120 v20" style={common}/>
        <path d="M105 140 C 92 142 86 155 90 168 C 94 178 116 178 120 168 C 124 155 118 142 105 140 Z" style={common}/>
        {[...Array(10)].map((_,i)=>{
          const a = (i/10)*Math.PI*2;
          return <circle key={i} cx={105+13*Math.cos(a)} cy={158+11*Math.sin(a)} r="0.9" fill={ink} stroke="none"/>
        })}
        <path d="M60 165 Q40 180 25 175" style={dashed}/>
        <text x="6" y="188" fontFamily="JetBrains Mono" fontSize="7.5" fill={rust}>estolón — eliminar</text>
        <rect x="30" y="192" width="150" height="1" fill="none"/>
        <line x1="30" y1="200" x2="180" y2="200" style={dim}/>
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 210 215" style={{width:"100%", height:"auto", color:ink}}>
      {nodes[type] || nodes.basil}
    </svg>
  );
}
