import { useState } from "react";

const CERTIFICACIONES = [
  {
    id: 1,
    titulo: "Desarrollo Web",
    detalle: "HTML - CSS -Maquetado - Responsive",
    grande: "/assets/certificaciones/cert-web.png",
  },
  {
    id: 2,
    titulo: "JavaScript",
    detalle: "Lógica - DOM - ES6+ - Asincronía",
    grande: "/assets/certificaciones/cert-js.jpeg",
  },
  {
    id: 3,
    titulo: "React",
    detalle: "Hooks - Props - Estado - Componentes",
    grande: "/assets/certificaciones/cert-react.jpeg",
  },
];

export default function Certifications() {
  const [certSeleccionada, setCertSeleccionada] = useState(null);

  return (
    <section id="certificaciones">
      <div className="section-header">
        <div className="section-title">
          <h2>Certificaciones</h2>
          <span>Formación y cursos completados.</span>
        </div>
      </div>

      <div className="cert-grid">
        {CERTIFICACIONES.map((cert) => (
          <button
            key={cert.id}
            className="cert-card"
            type="button"
            onClick={() => setCertSeleccionada(cert)}
          >
            <div className="cert-info">
              <span className="cert-title">{cert.titulo}</span>
              <span className="cert-detail">{cert.detalle}</span>
              <span className="cert-cta">Ver certificado</span>
            </div>
          </button>
        ))}
      </div>

      {certSeleccionada && (
        <div
          className="cert-modal-overlay"
          onClick={() => setCertSeleccionada(null)}
        >
          <img
            className="cert-modal-img"
            src={certSeleccionada.grande}
            alt={`Certificación de ${certSeleccionada.titulo}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
