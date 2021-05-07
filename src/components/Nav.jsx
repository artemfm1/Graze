import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Reviews</Link>
      <Link to="/new">Home</Link>
      <Link to="/edit/:id">3rd link</Link>
    </nav>
  )
}

export default Nav;
