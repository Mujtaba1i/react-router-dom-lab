import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function MailboxList() {

    const [mails,setMails]= useState([])
  
    async function getAllMails(){
        const allMails = (await axios.get(import.meta.env.VITE_URL)).data
        setMails(allMails)
    }

    useEffect(() => {
        getAllMails()
    }, [])
  
    return (
    <div>
        <h1>List of All mails</h1>
        {mails.map((oneMail)=>
            <div key={oneMail._id}>
                <h3>Owner: {oneMail.owner}, Size: {oneMail.size}</h3>
                <Link to={'/mails/' + oneMail._id} >mail details</Link>
            </div>
        )}

    </div>
  )
}



export default MailboxList