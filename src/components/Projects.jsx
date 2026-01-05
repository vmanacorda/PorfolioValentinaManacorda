import { useState } from "react";
import PowerAppsDetailPage from "./PowerAppsDetailPage";

function Projects() {
  const [showPowerAppsDetail, setShowPowerAppsDetail] = useState(false);

  return (
    <section id="proyectos" className="projects-section">
      <div className="section-header">
        <div className="section-title">
          <h2>Proyectos</h2>
          <span>Algunas de las soluciones que desarrollé.</span>
        </div>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <div
            className="project-img"
            style={{
              backgroundImage: `url('/assets/certificaciones/proyectos/tienda.jpeg')`,
            }}
          />
          <h3>Tienda Online – React</h3>

          <p>
            Ecommerce desarrollado con React y Vite. Catálogo dinámico, carrito de compras,
            diseño responsive y deploy en Vercel.
          </p>

          <div className="project-buttons">
            <a
              href="https://mi-tienda-react-of3d.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver tienda
            </a>
            <a
              href="https://github.com/vmanacorda/mi-tienda-react"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <div
            className="project-img"
            style={{
              backgroundImage: `url('/assets/certificaciones/powerapps/powerApps.png')`,
            }}
          />
          <h3>Panel de Cobranzas - Power Apps</h3>

          <p>
            App empresarial con módulos para Asesores y Gerentes,
            integrada con SharePoint y Power Automate.
          </p>

          <div className="project-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setShowPowerAppsDetail(true)}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      {showPowerAppsDetail && (
        <div
          className="powerapps-modal-overlay"
          onClick={() => setShowPowerAppsDetail(false)}
        >
          <div
            className="powerapps-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="powerapps-close"
              onClick={() => setShowPowerAppsDetail(false)}
            >
              ✖ Cerrar
            </button>

            <PowerAppsDetailPage />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
