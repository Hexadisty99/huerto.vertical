import PlantDiagram from './PlantDiagram'

export default function PlantEntry({plant}){
  return (
    <div className="page-scroll">
      <div className="entry-num">{plant.num}</div>
      <div className="entry-title">{plant.nombre}</div>
      <div className="entry-sub">{plant.cientifico} — {plant.tagline}</div>
      <div className="diagram-frame">
        <PlantDiagram type={plant.diagram}/>
      </div>
      <div className="fig-caption">croquis de cultivo en maceta</div>

    </div>
  );
}
