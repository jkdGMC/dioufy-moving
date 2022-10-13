import React, { useState,useEffect } from 'react'
import './Contact.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);


  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, []);



  const submit = () => {
    if (name && email && message) {
        const serviceId = 'service_id';
        const templateId = 'template_id';
        const userId = 'user_id';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams,   )
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);

    } else
        alert('Veillez remplir tous les champs !');
}

  return (
    <div className='Contact'>
      <div data-aos="fade-in" className="contact-container">
        <div className="contact-info">
          <h2>Contactez nous et retrouvez nous ..</h2>
          <ul className='info-section'>
            <li>
              <i className="fa-sharp fa-solid fa-map-location-dot"></i>
              <p>
                Cité Keur Gorgui <br/>
                Sacré Coeur 3 Pyrotechnie <br/>
                Dakar, DK <br/>
                99999
              </p>  
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>contact@dioufymoving.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>(+221) 331234567</p>
            </li>
          </ul>
          <ul className='info-social'>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-youtube"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </ul>
        </div>
        <div className='contact-form'>
          <div className="form-container">
            <h2>Des réclamations sur le déroulement du déménagement ?</h2>
            <form>
              <input
                type="text"
                placeholder="Prénom et Nom"
                value={name}
                onChange={e => setName(e.target.value)} />
              
              <input 
                type="email"
                placeholder="Votre adresse mail"
                value={email}
                onChange={e => setEmail(e.target.value)} />

                <select className='pack-select' >
                <option value="" selected>Type d'offre du déménagement</option>
                  <option value="yobulma">Pack Yobulma</option>
                  <option value="standard">Pack Standard</option>
                  <option value="deluxe">Pack Deluxe</option>
                </select>

              <textarea
                placeholder="Votre message ..."
                value={message}
                onChange={e => setMessage(e.target.value)}>
              </textarea>

              <button onClick={submit}>ENVOYER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
