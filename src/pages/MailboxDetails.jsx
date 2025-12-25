import axios from "axios"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

function MailboxDetails() {

    const [mail,setMails]= useState(null)
    const {id} = useParams()

    async function getMailDetails(){
        const mailDetails = await axios.get(import.meta.env.VITE_URL+id)
        setMails(mailDetails.data)
    }

    useEffect(() => {
        getMailDetails()
    }, [])


  return (
    <div>
        <h1>Details</h1>
        {mail ? <h3>Owner: {mail.owner}, Size: {mail.size}</h3> :<p>Loading...</p>}
        
    </div>
  )
}

export default MailboxDetails