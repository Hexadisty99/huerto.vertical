import { useState } from 'react'

export default function LogLeft({notes, selectedNoteId, onSelectNote, onAddNote, onDeleteNote}){
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleSubmit = () => {
    if(newTitle.trim() && newDesc.trim()){
      onAddNote(newTitle.trim(), newDesc.trim());
      setNewTitle('');
      setNewDesc('');
      setShowForm(false);
    }
  };

  return (
    <div className="page-scroll">
      <div className="entry-num">6.01</div>
      <div className="entry-title">Diario</div>
      <div className="entry-sub">observaciones del huerto</div>
      <hr className="entry-divider"/>
      
      {!showForm ? (
        <button 
          onClick={()=>setShowForm(true)}
          style={{
            width:"100%", padding:"10px", marginBottom:16,
            background:"var(--leaf)", color:"var(--paper)", border:"none",
            borderRadius:4, cursor:"pointer", fontFamily:"JetBrains Mono",
            fontSize:11, letterSpacing:"0.05em"
          }}
        >
          + Añadir nota
        </button>
      ) : (
        <div style={{marginBottom:16, padding:12, border:"1px solid rgba(90,60,20,0.2)", borderRadius:4}}>
          <input
            type="text"
            placeholder="Título de la nota"
            value={newTitle}
            onChange={e=>setNewTitle(e.target.value)}
            style={{width:"100%", padding:"6px 8px", marginBottom:8, fontFamily:"Spectral", fontSize:14, border:"1px solid rgba(90,60,20,0.2)", borderRadius:3}}
          />
          <textarea
            placeholder="Descripción..."
            value={newDesc}
            onChange={e=>setNewDesc(e.target.value)}
            rows={3}
            style={{width:"100%", padding:"6px 8px", marginBottom:8, fontFamily:"Spectral", fontSize:14, border:"1px solid rgba(90,60,20,0.2)", borderRadius:3, resize:"vertical"}}
          />
          <div style={{display:"flex", gap:8}}>
            <button onClick={handleSubmit} style={{flex:1, padding:"6px", background:"var(--leaf)", color:"var(--paper)", border:"none", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              Guardar
            </button>
            <button onClick={()=>setShowForm(false)} style={{flex:1, padding:"6px", background:"transparent", color:"var(--ink-soft)", border:"1px solid rgba(90,60,20,0.2)", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div style={{display:"flex", flexDirection:"column", gap:8}}>
        {notes.map(note=>(
          <div 
            key={note.id} 
            onClick={()=>onSelectNote(note.id)}
            style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"8px 10px", cursor:"pointer",
              background: selectedNoteId===note.id ? "rgba(74,122,83,0.1)" : "transparent",
              border:"1px solid " + (selectedNoteId===note.id ? "rgba(74,122,83,0.3)" : "rgba(90,60,20,0.15)"),
              borderRadius:3
            }}
          >
            <button 
              onClick={e=>{e.stopPropagation(); onDeleteNote(note.id)}}
              style={{background:"transparent", border:"none", color:"var(--rust)", cursor:"pointer", padding:0, fontSize:14, lineHeight:1}}
            >
              ✕
            </button>
            <span style={{fontSize:14, color: selectedNoteId===note.id ? "var(--leaf-dark)" : "var(--ink)"}}>
              {note.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
