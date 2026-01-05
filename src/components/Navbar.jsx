import logoV from "../assets/logo-v.png";

function Navbar() {
  return (
    <header>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src={logoV} alt="Logo" className="brand-mark" />
          <span>Valentina Manacorda</span>
          <span>Front-End & Power Apps</span>
        </a>

        <nav>
          <a href="#sobre-mi" className="nav-link">Sobre mí</a>
          <a href="#habilidades" className="nav-link">Habilidades</a>
          <a href="#certificaciones" className="nav-link">Certificaciones</a>
          <a href="#proyectos" className="nav-link">Proyectos</a>
          <a href="#contacto" className="nav-link nav-cta">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
