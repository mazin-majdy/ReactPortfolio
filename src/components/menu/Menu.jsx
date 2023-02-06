import MenuItem from "../menuItem/MenuItem"
import "./menu.scss"

const Menu = ({ menuOpen, setMenuOpen }) => {
  const items = [
    {
      id: "intro",
      title: "Home"
    },
    {
      id: "portfolio",
      title: "Portfolio"
    },
    {
      id: "works",
      title: "Works"
    },
    {
      id: "testimonials",
      title: "Testimonials"
    },
    {
      id: "contact",
      title: "Contact"
    },
  ];

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>

        {items.map((ele, index )=> (
          <MenuItem key={index} id={ele.id} title={ele.title} setMenuOpen={setMenuOpen} />
        ))}

      </ul>
    </div>
  )
}

export default Menu