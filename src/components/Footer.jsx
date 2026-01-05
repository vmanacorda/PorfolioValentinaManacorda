function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {year} Valentina Manacorda — Front-End & Power Apps Developer
        </p>

        <div className="footer-links">

          <a 
            href="manacordav@gmail.com"
            className="footer-link"
          >
            📧 Email 
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=549XXXXXXXXX&text=Hola%20Valentina!"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            💬 WhatsApp
          </a>

          <a 
            href="https://www.linkedin.com/in/valentina-manacorda-31212a253"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            🔗 LinkedIn
          </a>

          <a 
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            💻 GitHub
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;