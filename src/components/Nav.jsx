import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Reviews</Link>
      <Link to="/edit/:id">3rd link</Link>
    </nav>
  )
}

export default Nav;
