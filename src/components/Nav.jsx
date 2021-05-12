import { Link } from "react-router-dom"
import Header from "./Header"
import "../components/Nav.css"


function Nav() {
  return (
    <nav className = "nav">
      <Header />
      <Link className="nav-links" to="/">Home</Link><br></br>
      <Link className="nav-links" to="/new">Reviews</Link><br></br>
      <Link className="nav-links" to="/edit/:id">About Graze</Link>
    </nav>
  )
}

export default Nav;
