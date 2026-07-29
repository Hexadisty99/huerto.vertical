import { PLANTS } from '../data/plantas'

function findPlantId(name){
  const n = name.trim().toLowerCase();
  const found = PLANTS.find(p => p.nombre.toLowerCase() === n || p.nombre.toLowerCase().includes(n) || n.includes(p.nombre.toLowerCase()));
  return found ? found.id : null;
}

export default function PlantLink({name, onGo}){
  const id = findPlantId(name);
  if(!id || !onGo) return <span>{name}</span>;
  return <span style={{color:"var(--leaf-dark)", cursor:"pointer", textDecoration:"underline dotted"}} onClick={()=>onGo("plants",id)}>{name}</span>;
}
