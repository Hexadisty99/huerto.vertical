import { useState, useEffect, lazy, Suspense } from 'react'
import { PLANTS } from './data/plantas'
import Icon from './components/Icon'
import { CoverPage, IndexRightPage } from './components/CoverPage'

const PlantEntry = lazy(() => import('./components/PlantEntry'))
const PlantCare = lazy(() => import('./components/PlantCare'))
const PlantsIndexLeft = lazy(() => import('./components/PlantsIndexLeft'))
const PlantsIndexRight = lazy(() => import('./components/PlantsIndexRight'))
const CompanionsLeft = lazy(() => import('./components/CompanionsLeft'))
const CompanionsRightIndex = lazy(() => import('./components/CompanionsRightIndex'))
const AsocFuertesLeft = lazy(() => import('./components/AsocFuertesLeft'))
const AsocFuertesRight = lazy(() => import('./components/AsocFuertesRight'))
const RepelentesLeft = lazy(() => import('./components/RepelentesLeft'))
const RepelentesRight = lazy(() => import('./components/RepelentesRight'))
const DepredadoresLeft = lazy(() => import('./components/DepredadoresLeft'))
const DepredadoresRight = lazy(() => import('./components/DepredadoresRight'))
const PreventionLeft = lazy(() => import('./components/PreventionLeft'))
const PreventionRight = lazy(() => import('./components/PreventionRight'))
const TreatmentLeft = lazy(() => import('./components/TreatmentLeft'))
const TreatmentRight = lazy(() => import('./components/TreatmentRight'))
const SustratoLeft = lazy(() => import('./components/SustratoLeft'))
const SustratoRightIndex = lazy(() => import('./components/SustratoRightIndex'))
const SustratoPHLeft = lazy(() => import('./components/SustratoPHLeft'))
const SustratoPHRight = lazy(() => import('./components/SustratoPHRight'))
const SustratoNPKLeft = lazy(() => import('./components/SustratoNPKLeft'))
const SustratoNPKRight = lazy(() => import('./components/SustratoNPKRight'))
const SustratoNPKSubir = lazy(() => import('./components/SustratoNPKSubir'))
const SustratoNPKSubirRight = lazy(() => import('./components/SustratoNPKSubirRight'))
const SustratoNPKBajar = lazy(() => import('./components/SustratoNPKBajar'))
const SustratoNPKBajarRight = lazy(() => import('./components/SustratoNPKBajarRight'))
const SustratoRiegoLeft = lazy(() => import('./components/SustratoRiegoLeft'))
const SustratoRiegoRight = lazy(() => import('./components/SustratoRiegoRight'))
const SustratoHerramientasLeft = lazy(() => import('./components/SustratoHerramientasLeft'))
const SustratoHerramientasRight = lazy(() => import('./components/SustratoHerramientasRight'))
const LogLeft = lazy(() => import('./components/LogLeft'))
const LogRight = lazy(() => import('./components/LogRight'))

const SECTIONS = [
  {id:"cover", label:"Portada", icon:"book"},
  {id:"plants", label:"Índice de plantas", icon:"leaf"},
  {id:"companions", label:"Asociaciones", icon:"hand"},
  {id:"prevention", label:"Prevención", icon:"shield"},
  {id:"treatment", label:"Tratamiento", icon:"bug"},
  {id:"sustrato", label:"Sustrato", icon:"sprout"},
  {id:"log", label:"Diario", icon:"notebook"},
];

export default function App(){
  const [view, setView] = useState({section:"cover", plantId:null, subId:null, detailId:null});
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('huerto-notes');
    return stored ? JSON.parse(stored) : [
      {id:1, title:"Inicio del proyecto", description:"Arranca el proyecto. Terraza confirmada con más de cinco horas de sol directo. Seleccionadas siete aromáticas y tres hortalizas/frutas para la primera fase.", date:"24 JUL 2026"},
      {id:2, title:"Documentación completada", description:"Documentadas todas las fichas individuales y las asociaciones entre plantas. Pendiente: definir la estructura física del huerto vertical.", date:"24 JUL 2026"}
    ];
  });
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('huerto-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString('es-ES', {day:'numeric', month:'short', year:'numeric'}).toUpperCase()
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
    if(selectedNoteId === id) setSelectedNoteId(null);
    if(editingNote && editingNote.id === id) setEditingNote(null);
  };

  const updateNote = (id, title, description) => {
    setNotes(notes.map(n => n.id === id ? {...n, title, description} : n));
    setEditingNote(null);
  };

  const go = (section, subId=null, detailId=null) => {
    if(section === "companions" || section === "sustrato") {
      setView({section, subId, detailId, plantId: null});
    } else {
      setView({section, plantId: subId, subId: null, detailId: null});
    }
  };

  useEffect(()=>{
    document.querySelectorAll(".page-scroll").forEach(el=> el.scrollTop = 0);
  }, [view]);

  let left, right, pageLabel;

  if(view.section === "cover"){
    left = <CoverPage onGo={go}/>;
    right = <IndexRightPage onGo={go}/>;
    pageLabel = "Bitácora — inicio";
  } else if(view.section === "plants"){
    const plant = view.plantId ? PLANTS.find(p=>p.id===view.plantId) : null;
    left = plant ? <PlantEntry plant={plant}/> : <PlantsIndexLeft onGo={go}/>;
    right = plant ? <PlantCare plant={plant} onGo={go}/> : <PlantsIndexRight onGo={go}/>;
    pageLabel = plant ? `Plantas · ${plant.nombre}` : "Índice de plantas";
  } else if(view.section === "companions"){
    const sub = view.subId;
    if(!sub){
      left = <CompanionsLeft/>;
      right = <CompanionsRightIndex onGo={go}/>;
      pageLabel = "Asociaciones";
    } else if(sub === "asociaciones"){
      left = <AsocFuertesLeft onGo={go}/>;
      right = <AsocFuertesRight onGo={go}/>;
      pageLabel = "Asociaciones · Fuertes";
    } else if(sub === "repelentes"){
      left = <RepelentesLeft onGo={go}/>;
      right = <RepelentesRight onGo={go}/>;
      pageLabel = "Asociaciones · Repelentes";
    } else if(sub === "depredadores"){
      left = <DepredadoresLeft onGo={go}/>;
      right = <DepredadoresRight/>;
      pageLabel = "Asociaciones · Depredadores";
    }
  } else if(view.section === "prevention"){
    left = <PreventionLeft/>;
    right = <PreventionRight/>;
    pageLabel = "Prevención de plagas";
  } else if(view.section === "treatment"){
    left = <TreatmentLeft/>;
    right = <TreatmentRight/>;
    pageLabel = "Tratamiento de plagas";
  } else if(view.section === "sustrato"){
    const sub = view.subId;
    if(!sub){
      left = <SustratoLeft/>;
      right = <SustratoRightIndex onGo={go}/>;
      pageLabel = "Sustrato";
    } else if(sub === "ph"){
      left = <SustratoPHLeft/>;
      right = <SustratoPHRight/>;
      pageLabel = "Sustrato · pH";
    } else if(sub === "npk"){
      const detail = view.detailId;
      if(!detail){
        left = <SustratoNPKLeft/>;
        right = <SustratoNPKRight onSubGo={(d)=>go("sustrato","npk",d)}/>;
        pageLabel = "Sustrato · NPK";
      } else if(detail === "subir"){
        left = <SustratoNPKSubir onSubGo={(d)=>go("sustrato","npk",d)}/>;
        right = <SustratoNPKSubirRight/>;
        pageLabel = "Sustrato · NPK · Subir Niveles";
      } else if(detail === "bajar"){
        left = <SustratoNPKBajar onSubGo={(d)=>go("sustrato","npk",d)}/>;
        right = <SustratoNPKBajarRight/>;
        pageLabel = "Sustrato · NPK · Bajar Niveles";
      }
    } else if(sub === "riego"){
      left = <SustratoRiegoLeft/>;
      right = <SustratoRiegoRight/>;
      pageLabel = "Sustrato · Riego";
    } else if(sub === "herramientas"){
      left = <SustratoHerramientasLeft/>;
      right = <SustratoHerramientasRight/>;
      pageLabel = "Sustrato · Herramientas";
    }
  } else if(view.section === "log"){
    left = <LogLeft notes={notes} selectedNoteId={selectedNoteId} onSelectNote={setSelectedNoteId} onAddNote={addNote} onDeleteNote={deleteNote}/>;
    right = <LogRight notes={notes} selectedNoteId={selectedNoteId} editingNote={editingNote} onEditNote={setEditingNote} onDeleteNote={deleteNote} onUpdateNote={updateNote}/>;
    pageLabel = "Diario de observaciones";
  }

  const idx = SECTIONS.findIndex(s=>s.id===view.section);

  return (
    <div className="scene">
      <div className="book-wrap">
        <div className="book">
          <div className="tabs">
            {SECTIONS.map(s=>(
              <div key={s.id} className={"tab" + (view.section===s.id ? " active":"")} onClick={()=>go(s.id)}>
                <Icon name={s.icon} size={19}/>
                <span className="tab-label">{s.label}</span>
              </div>
            ))}
          </div>
          {view.section==="plants" &&
            <div className="rail rail-plants">
              {PLANTS.map(p=>(
                <div key={p.id} className={"rail-tab"+(view.plantId===p.id?" active":"")} onClick={()=>go("plants",p.id)}>
                  {p.num} {p.nombre}
                </div>
              ))}
            </div>
          }
          {view.section==="companions" &&
            <div className="rail rail-companions">
              {[
                {id:"asociaciones", label:"Asoc. Fuertes"},
                {id:"repelentes", label:"Repelentes"},
                {id:"depredadores", label:"Depredadores"}
              ].map(s=>(
                <div key={s.id} className={"rail-tab"+(view.subId===s.id?" active":"")} onClick={()=>go("companions",s.id)}>
                  {s.label}
                </div>
              ))}
            </div>
          }
          {view.section==="sustrato" &&
            <div className="rail rail-sustrato">
              {[
                {id:"ph", label:"pH"},
                {id:"npk", label:"NPK"},
                {id:"riego", label:"Riego"},
                {id:"herramientas", label:"Herramientas"}
              ].map(s=>(
                <div key={s.id} className={"rail-tab"+(view.subId===s.id?" active":"")} onClick={()=>go("sustrato",s.id)}>
                  {s.label}
                </div>
              ))}
            </div>
          }
          <div className="pages">
            <Suspense fallback={<div className="page left"><div className="page-scroll"><p className="lede" style={{textAlign:'center',marginTop:80,color:'var(--ink-soft)'}}>Cargando…</p></div></div>}>
            <div className="page left">
              <div className="stain" style={{width:180,height:180,top:20,left:-30}}/>
              {left}
              <div className="page-num">— {idx*2+1} —</div>
            </div>
            <div className="page right">
              <div className="stain" style={{width:220,height:220,bottom:-40,right:-40}}/>
              {right}
              <div className="page-num">— {idx*2+2} —</div>
            </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
