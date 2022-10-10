import React from 'react'
import './Contact.css'


const Contact = () => {

  return (
    <div className='Contact'>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contactez nous ici !</h2>
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
            <h2>Envoyez nous un message</h2>
            <div className="input-container">
              <span>Prénom</span><br />
              <input type="text" name="" require />

              <span>Nom</span><br />
              <input type="text" name="" require />

              <span>Email</span><br />
              <input type="text" name="" require />

              <span>Numéro de téléphone</span><br />

              <input type="text" name="" require />

              <span>Ecrivez votre message ici ...</span><br />
              <textarea name="" require='true'></textarea>

              <input type="submit" value="ENVOYER" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;