import "../menu/menu.scss";

const MenuItem = ({menuOpen, setMenuOpen, id, title}) => {
  return (
    <li onClick={()=>setMenuOpen(false)}>
    <a href={"#"+id}>{title}</a>
  </li>
  )
}

export default MenuItem