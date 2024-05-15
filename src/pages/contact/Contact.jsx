import React from 'react'
import './Contact.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Contact = () => {


  const [name , setName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [text, setText] = useState("")


  const BOT_TOKEN = '6741914349:AAGl2R75SFfTugVGZbtsnMfPgWEiMQlzQVU'
  const chatId = '-4200519677'
  const userId = '5489414806'

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      name , 
      lastName , 
      email , 
      phone , 
      text
    }

    setName("")
    setEmail("")
    setLastName("")
    setPhone("")
    setText("")

    let texts = 'Buyurtma %0A%0A'
    texts += `name : ${newUser.name} %0A%0A `
    texts += `lastName : ${newUser.lastName} %0A%0A `
    texts += `email : ${newUser.email} %0A%0A `
    texts += `phone : ${newUser.phone} %0A%0A `
    texts += `text : ${newUser.text} %0A%0A ` 


    let url  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${texts}`
    let api = new XMLHttpRequest()
    api.open('GET' , url , true)
    api.send()


 
  }


  return (
    <>
    <div className="container">
      <div className="contact">
        <form onSubmit={handleSubmit} action="">
          <img  src={logo} alt="" />
           <div className="names">
              <span>
                <label htmlFor="">First Name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} type="text" />
              </span>
              <span>
                <label htmlFor="">Last Name</label>
                <input required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" />
              </span>
           </div>
           <span>
            <label htmlFor="">Email</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} className='email'  type="email" placeholder='example@gmail.com' />
           </span>
           <span>
            <label htmlFor="">Number</label>
            <input required value={phone} onChange={(e) => setPhone(e.target.value)} className='email'  type="number" placeholder='+998'/>
           </span>
           <span>
            <label htmlFor="">Enter Your Text</label>
            <input required value={text} onChange={(e) => setText(e.target.value)} className='textarea' type="textarea"  />
           </span>
           <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact