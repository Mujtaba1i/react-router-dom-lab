import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
          <Link to="/">Home</Link>
          <Link to="/mailboxes">Mails</Link>
          <Link to="/new-mailbox">Create Mails</Link>
    </div>
  )
}

export default NavBar