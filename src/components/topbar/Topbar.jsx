import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <a href="http://wa.me/+972592691590" target="_blank">+972 59 2691 590</a>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <a href="mailto:kingmazin01@gmail.com" target="_blank">kingmazin01@gmail.com</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar