import { Link } from "react-router-dom"
import Header from "./Header"


function Nav() {
  return (
    <nav>
      <Header />
      <Link to="/">Home</Link><br></br>
      <Link to="/new">Reviews</Link><br></br>
      <Link to="/edit/:id">About Graze</Link>
    </nav>
  )
}

export default Nav;
