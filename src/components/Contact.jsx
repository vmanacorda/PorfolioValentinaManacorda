function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="section-header">
        <div className="section-title">
          <h2>Contacto</h2>
          <span>Si querés hablar conmigo o conocer más sobre mi trabajo.</span>
        </div>
      </div>
       <div className="contact-box">
        <p>
          Estoy abierta a nuevas oportunidades, proyectos y colaboraciones.
          Si querés comunicarte conmigo, podés hacerlo a través de:
        </p>
          <div className="contact-items">

          <a 
            href="mailto:tu-correo@example.com"
            className="contact-item"
          >
            📧 <span>Email:</span> manacordav@gmail.com
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=549XXXXXXXXX&text=Hola%20Valentina!"
            target="_blank"
            rel="noopener"
            className="contact-item"
          >
            💬 <span>WhatsApp:</span> +54 9 2364411267
          </a>

          <a 
            href="https://www.linkedin.com/in/valentina-manacorda-31212a253"
            target="_blank"
            rel="noopener"
            className="contact-item"
          >
            🔗 <span>LinkedIn:</span> Valentina Manacorda
          </a>

          <a 
            href="https://github.com/vmanacorda"
            target="_blank"
            rel="noopener"
            className="contact-item"
          >
            💻 <span>GitHub:</span> github.com/vmanacorda
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;