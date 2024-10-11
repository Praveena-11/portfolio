import React from 'react'
import './contact.css'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently working on web development projects and actively seeking new opportunities to apply and expand my skills. Feel free to reach out for collaborations or roles </p>   
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt=''/><p>praveenakalidasan11@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt=''/><p>7708465570</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt=''/><p>Coimbatore,India</p>
                    </div>
                </div>    
            </div>   
        <form className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='text' placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Write your message here</label>
            <textarea name='message' rows='8' placeholder='Enter your message'/>
            <button className='contact-submit'>Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact