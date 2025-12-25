import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
          <Link to="/">Home</Link>
          <Link to="/mails">Mails</Link>
          <Link to="/mails/create">Create Mails</Link>
    </div>
  )
}

export default NavBar