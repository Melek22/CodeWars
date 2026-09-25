import React from 'react';

function Contact() {
  return (
    <div className="page-container">
      <h2>Contactați-ne</h2>
      <p>Pentru orice informații, rugăminți de rugăciune sau programări, nu ezitați să ne contactați.</p>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Adresa:</h3>
          <p>Biserica Sfinții Arhangheli Mihail și Gavril</p>
          <p>Localitatea Grozești, Județul Iași, România</p>
        </div>

        <div className="contact-card">
          <h3>Telefon Parohie:</h3>
          <p><a href="tel:+40000000000">07XX XXX XXX</a> (Înlocuiți cu numărul real)</p>
        </div>

        <div className="contact-card">
          <h3>Email:</h3>
          <p><a href="mailto:contact@parohiagrozesti.ro">contact@parohiagrozesti.ro</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
