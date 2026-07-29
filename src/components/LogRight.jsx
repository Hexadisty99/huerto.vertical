import { useState } from 'react'

export default function LogRight({notes, selectedNoteId, editingNote, onEditNote, onDeleteNote, onUpdateNote}){
  const note = notes.find(n => n.id === selectedNoteId);
  const isEditing = editingNote && editingNote.id === selectedNoteId;
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const startEdit = () => {
    if(note){
      setEditTitle(note.title);
      setEditDesc(note.description);
      onEditNote(note);
    }
  };

  const saveEdit = () => {
    if(editTitle.trim() && editDesc.trim()){
      onUpdateNote(note.id, editTitle.trim(), editDesc.trim());
    }
  };

  if(!note){
    return (
      <div className="page-scroll">
        <div className="section-label">Selecciona una nota</div>
        <p className="lede" style={{marginTop:8}}>
          Haz clic en una nota de la izquierda para ver su contenido completo aquí.
        </p>
        <div className="marginal-note">"las notas son el diario de tu huerto — cada observación cuenta"</div>
      </div>
    );
  }

  return (
    <div className="page-scroll">
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={e=>setEditTitle(e.target.value)}
          style={{width:"100%", padding:"6px 8px", marginBottom:8, fontFamily:"Fraunces", fontSize:22, fontWeight:600, color:"var(--ink)", border:"1px solid rgba(90,60,20,0.2)", borderRadius:3}}
        />
      ) : (
        <div className="entry-title" style={{fontSize:22}}>{note.title}</div>
      )}
      <div className="entry-sub">{note.date}</div>
      <hr className="entry-divider"/>
      
      <div style={{display:"flex", gap:8, marginBottom:16}}>
        {isEditing ? (
          <>
            <button onClick={saveEdit} style={{padding:"6px 12px", background:"var(--leaf)", color:"var(--paper)", border:"none", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              Guardar
            </button>
            <button onClick={()=>onEditNote(null)} style={{padding:"6px 12px", background:"transparent", color:"var(--ink-soft)", border:"1px solid rgba(90,60,20,0.2)", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button onClick={()=>onDeleteNote(note.id)} style={{padding:"6px 12px", background:"transparent", color:"var(--rust)", border:"1px solid rgba(162,84,62,0.3)", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              Eliminar
            </button>
            <button onClick={startEdit} style={{padding:"6px 12px", background:"transparent", color:"var(--ink-soft)", border:"1px solid rgba(90,60,20,0.2)", borderRadius:3, cursor:"pointer", fontFamily:"JetBrains Mono", fontSize:10}}>
              ✎ Editar
            </button>
          </>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={editDesc}
          onChange={e=>setEditDesc(e.target.value)}
          rows={8}
          style={{width:"calc(100% - 16px)", marginLeft:16, padding:"8px", fontFamily:"Spectral", fontSize:15, lineHeight:1.65, color:"var(--ink-soft)", border:"1px solid rgba(90,60,20,0.2)", borderRadius:3, resize:"vertical"}}
        />
      ) : (
        <p className="lede" style={{fontSize:15, lineHeight:1.7}}>
          {note.description}
        </p>
      )}
    </div>
  );
}
