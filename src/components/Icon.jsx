export default function Icon({name, size=22}){
  const s = {width:size, height:size, stroke:"currentColor", fill:"none", strokeWidth:1.6, strokeLinecap:"round", strokeLinejoin:"round"};
  switch(name){
    case "book": return <svg viewBox="0 0 24 24" style={s}><path d="M3 5c3-1.5 6-1.5 9 0v14c-3-1.5-6-1.5-9 0V5Z"/><path d="M21 5c-3-1.5-6-1.5-9 0v14c3-1.5 6-1.5 9 0V5Z"/></svg>;
    case "leaf": return <svg viewBox="0 0 24 24" style={s}><path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16Z"/><path d="M5 19c4-4 8-8 14-14"/></svg>;
    case "berry": return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="14" r="7"/><path d="M12 7V4M9 4h6"/></svg>;
    case "bug": return <svg viewBox="0 0 24 24" style={s}><ellipse cx="12" cy="13" rx="5" ry="7"/><path d="M12 6V3M7 8 4 6M17 8l3-2M6 13H3M21 13h-3M7 18l-3 2M17 18l3 2"/></svg>;
    case "shield": return <svg viewBox="0 0 24 24" style={s}><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z"/></svg>;
    case "hand": return <svg viewBox="0 0 24 24" style={s}><path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4a1.5 1.5 0 0 1 3 0v7M14 12V6a1.5 1.5 0 0 1 3 0v8M17 10a1.5 1.5 0 0 1 3 0v5c0 4-2 7-6 7h-2c-3 0-4-1-6-4l-2-3.5c-.6-1 .3-2.3 1.5-2l2.5 1"/></svg>;
    case "grid": return <svg viewBox="0 0 24 24" style={s}><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>;
    case "notebook": return <svg viewBox="0 0 24 24" style={s}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 3v18M4 8h4M4 13h4"/></svg>;
    case "arrow": return <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "sprout": return <svg viewBox="0 0 24 24" style={s}><path d="M12 21V11"/><path d="M12 11C12 6 8 4 4 4c0 4 2 7 8 7Z"/><path d="M12 11c0-4 4-6 8-6 0 4-2 7-8 7Z"/></svg>;
    case "sun": return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>;
    case "drop": return <svg viewBox="0 0 24 24" style={s}><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z"/></svg>;
    default: return null;
  }
}
