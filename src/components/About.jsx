export default function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="section-header">
        <div className="section-title">
          <h2>Sobre mí</h2>
          <span>Un poco de mi historia y cómo llegué al desarrollo.</span>
        </div>
      </div>
       <div className="about-body">
         <div className="about-text">
          <p>
            Soy desarrolladora Front-End con experiencia previa en el área
            comercial y liderazgo de equipos. Durante años trabajé de cara al
            cliente, lo que me dio una mirada muy clara sobre sus necesidades
            reales y la importancia de la experiencia de usuario.
          </p>

          <p>
            Mi camino en tecnología comenzó con <strong>Power Apps</strong>,
            creando soluciones internas para optimizar procesos. Ese interés me
            llevó a formarme en{" "}
            <strong>Desarrollo Web, JavaScript y React</strong>, trabajando
            también con herramientas como{" "}
            <strong>GitHub, Bootstrap y Vite</strong>.
          </p>

          <p>
            Me definen la proactividad, la capacidad de adaptación y el
            compromiso. Disfruto aprender cosas nuevas, trabajar en equipo y
            transformar ideas en interfaces claras y funcionales.
          </p>

          <div className="badges">
            <span className="badge">Front-End</span>
            <span className="badge">Power Apps</span>
            <span className="badge">Experiencia en clientes</span>
            <span className="badge">Aprendizaje constante</span>
          </div>
        </div>
      </div>
    </section>
  );
}
