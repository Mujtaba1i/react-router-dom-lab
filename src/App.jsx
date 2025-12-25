import React from 'react'
import { Route,Routes } from 'react-router'
import { Link } from 'react-router'
import NavBar from './components/NavBar'
import MailboxList from './pages/MailboxList'
import Homepage from './pages/Homepage'
import MailboxDetails from './pages/MailboxDetails'
import MailboxForm from './pages/MailboxForm'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/mails" element={<MailboxList />} />
        <Route path='/mails/:id' element={<MailboxDetails/>}/>
        <Route path='/mails/create' element={<MailboxForm/>}/>
      </Routes>
    </div>
  )
}

export default App