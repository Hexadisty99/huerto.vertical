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
      <hr className="entry-divider"/>
      <table className="spec">
        <tbody>
          <tr><td className="k">Profundidad mín.</td><td className="v">{plant.profundidad}</td></tr>
          <tr><td className="k">Luz</td><td className="v">{plant.luz}</td></tr>
          <tr><td className="k">Riego</td><td className="v">{plant.riego}</td></tr>
          <tr><td className="k">Siembra</td><td className="v">{plant.siembra}</td></tr>
          <tr><td className="k">Cosecha</td><td className="v">{plant.cosecha}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
