import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Locations</Link>
      <Link to="/new">2nd link</Link>
      <Link to="/edit/:id">3rd link</Link>
    </nav>
  )
}

export default Nav;
