export default function StarRow({n}){
  return <span style={{color:"var(--rust)", letterSpacing:"1px"}}>{"★".repeat(n)}{"☆".repeat(3-n)}</span>;
}
