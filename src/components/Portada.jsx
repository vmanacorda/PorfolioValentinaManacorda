function Portada() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div className="hero-pill">
          <div className="pill-dot"></div>
          Disponible para oportunidades remotas / híbridas
        </div>

        <div className="hero-title">
          Hola, soy <span>Valentina</span>.<br />
          Desarrolladora Front-End, Power Platform y QA Tester
        </div>

        <p className="hero-subtitle">
Apasionada por la tecnología y el aprendizaje continuo. Tengo experiencia en Power Apps, Power Automate y pruebas funcionales,
además de formación en Desarrollo Front-End con React.
Actualmente continúo capacitándome en Inteligencia Artificial aplicada al desarrollo.

</p>

        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">
            <span className="btn-icon">⚡</span>
            Ver proyectos destacados
          </a>

          <a
            href="cv.Valentina-Manacorda.pdf
"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener"
          >
            <span className="btn-icon">⬇️</span>
            Descargar CV
          </a>
        </div>
      </div>

   
    </section>
  );
}

export default Portada;
