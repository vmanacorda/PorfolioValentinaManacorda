function Skills() {
  return (
    <section id="habilidades" className="skills-section">
      <div className="section-header">
        <div className="section-title">
          <h2>Habilidades</h2>
          <span>Mi stack técnico y herramientas principales.</span>
        </div>
      </div>

      <div className="skills-grid">
       
        <div className="skill-card">
          <h3>Front-End</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>SASS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vite</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Back-End & APIs</h3>
          <ul>
            <li>APIs RESTful</li>
            <li>Node.js (básico)</li>
            <li>Firebase (Auth / Firestore)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Power Platform</h3>
          <ul>
            <li>Power Apps (Canvas Apps)</li>
            <li>SharePoint Online (listas y permisos)</li>
            <li>Optimización de procesos</li>
            <li>Diseño de interfaces</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Herramientas</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Microsoft 365</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Proactividad</li>
            <li>Comunicación</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Formación en curso</h3>
          <ul>
            <li>
              <strong>Curso completo de IA generativa: ChatGPT, Midjourney y más</strong>
            </li>
            <li>Uso profesional de ChatGPT y GPTs personalizados</li>
            <li>Prompt Engineering (básico y avanzado)</li>
            <li>Modelos de Lenguaje (LLMs) aplicados a negocio</li>
            <li>Midjourney, DALL·E, Claude, Copilot</li>
            <li>Automatización y creación de soluciones con IA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
