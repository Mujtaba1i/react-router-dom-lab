import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from 'react'

function MailboxForm() {

    const [mail,setMails]= useState({
        owner:'',
        size:''
    })
    const navigate = useNavigate()

    function handleChange(event){
        setMails({...mail,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post(import.meta.env.VITE_URL,mail)
        navigate('/mails')
    }

  return (
    <div>
        <h1>Create new mail</h1>
        <form onSubmit={handleSubmit}>

        <label htmlFor="owner">Owner: </label>
        <input onChange={handleChange} name='owner' id='owner' type="text" />

        <label htmlFor="size">Size: </label>
        <input onChange={handleChange} name='size' id='size' type="text" />
        
        <button>Post</button>
        </form>
    </div>
  )
}

export default MailboxForm