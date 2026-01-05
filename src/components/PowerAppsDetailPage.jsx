import React from "react";

function PowerAppsDetailPage() {
  return (
    <div className="powerapps-page">

      <section className="section-box">
        <p className="section-tag">Proyecto destacado</p>
        <h1 className="section-title">Solución de Cobranzas - Power Apps</h1>

        <p className="section-subtitle">
          Aplicación empresarial desarrollada para gestionar y automatizar el proceso
          de cobranzas de la empresa. Incluye módulos separados para Asesores, Gerentes
          y Recolectores, integrados con SharePoint y Power Automate.
        </p>
      </section>

      <div className="powerapps-block">
        <h3>Descripción general</h3>
        <p>
          La solución permite digitalizar todo el flujo operativo: asignación de fichas,
          registro de pagos, control semanal, recolección de montos y reportes para gerencia.
          Cada rol accede a una vista personalizada según sus permisos.
        </p>
      </div>

      <div className="powerapps-block">
        <h3>Mi rol</h3>
        <ul>
          <li>Diseño UX/UI completo en formato responsive (simulador iPhone).</li>
          <li>Implementación de galerías dinámicas y lógica de negocio.</li>
          <li>Integración con listas de SharePoint.</li>
          <li>Documentación y soporte al cliente.</li>
        </ul>
      </div>

      <div className="powerapps-block">
        <h3>Funcionalidades clave</h3>
        <ul>
          <li>Plan semanal totalmente automatizado.</li>
          <li>Control de fichas, pagos y porcentajes de cobranza.</li>
          <li>Flujo de autorización entre Asesor → Recolector → Gerente.</li>
          <li>Indicadores visuales por estado de pago.</li>
          <li>Subida de archivos Excel para actualización masiva.</li>
        </ul>
      </div>

      <div className="powerapps-block">
        <h2>Pantalla de Login</h2>
        <p>
          El usuario ingresa seleccionando su rol: Asesor, Gerente o Recolector.
          Cada rol redirige automáticamente a su módulo correspondiente.
        </p>

        <div className="module-images">
          <img
            className="module-img-main"
            src="/assets/certificaciones/powerapps/login.png"
            alt="Pantalla login escritorio"
            onClick={() =>
              window.open("/assets/certificaciones/powerapps/login.png", "_blank")
            }
          />

          <img
            className="module-img-mobile"
            src="/assets/certificaciones/powerapps/responsive-login.jpeg"
            alt="Pantalla login en modo responsive"
            onClick={() =>
              window.open(
                "/assets/certificaciones/powerapps/responsive-login.jpeg",
                "_blank"
              )
            }
          />
        </div>
      </div>

      <div className="powerapps-block">
        <h2>Módulo Asesor</h2>
        <p>
          El asesor accede a su plan semanal, donde puede visualizar el estado de cada grupo,
          porcentajes cobrados, número de fichas, montos pendientes y estado general.
        </p>
        <p>
          Desde el detalle del grupo puede registrar pagos, ver historial,
          controlar fichas, validar pagos totales o parciales y actualizar estados.
        </p>

        <div className="module-images">
          <img
            className="module-img-main"
            src="/assets/certificaciones/powerapps/asesor-galeria.png"
            alt="Pantalla de cobranza semanal del asesor"
            onClick={() =>
              window.open(
                "/assets/certificaciones/powerapps/asesor-galeria.png",
                "_blank"
              )
            }
          />
        </div>
      </div>

      <div className="powerapps-block">
        <h2>Módulo Pago</h2>
        <p>
         En esta sección el asesor puede registrar y gestionar los pagos semanales del grupo, contando con toda la información necesaria para realizar la cobranza de forma correcta y ordenada.

Aquí se visualiza un resumen completo del grupo, incluyendo el estado del crédito, la ficha semanal, seguro, ahorro, saldo pendiente, pagos realizados y estado de la semana.
Estos datos permiten identificar rápidamente cuánto corresponde cobrar y si existen atrasos.
<ul>
Desde el Modo Pago el asesor puede:

<li>Registrar pagos totales o parciales correspondientes a la semana.</li>

<li>Actualizar automáticamente el monto cobrado, el saldo pendiente y el estado del pago.</li>

<li>Consultar el historial de pagos para verificar movimientos anteriores.</li>

<li>Acceder al control de pagos para el seguimiento semanal del grupo.</li>
</ul>

El objetivo de este módulo es facilitar la cobranza diaria, reducir errores en el registro de pagos y mantener una trazabilidad clara y confiable de toda la información financiera del grupo.
        </p>

        <div className="module-images">
          <img
            className="module-img-main"
            src="/assets/certificaciones/powerapps/pago.jpeg"
            alt="Pantalla de pago en escritorio"
            onClick={() =>
              window.open("/assets/certificaciones/powerapps/pago.jpeg", "_blank")
            }
          />
         
          
        </div>
      </div>

      <div className="powerapps-block">
        <h2>Módulo Gerente</h2>
        <p>
          El gerente accede al panel general de seguimiento y a las automatizaciones
          del sistema, incluyendo la carga del plan semanal y el control global.
        </p>

        <div className="module-images">
          <img
            className="module-img-main"
            src="/assets/certificaciones/powerapps/gerente-menu.png"
            alt="Pantalla principal del módulo Gerente"
            onClick={() =>
              window.open(
                "/assets/certificaciones/powerapps/gerente-menu.png",
                "_blank"
              )
            }
          />
          <img
            className="module-img-mobile"
            src="/assets/certificaciones/powerapps/responsive-gerente.jpeg"
            alt="Vista responsive del módulo Gerente"
            onClick={() =>
              window.open(
                "/assets/certificaciones/powerapps/responsive-gerente.jpeg",
                "_blank"
              )
            }
          />
        </div>
      </div>

      <div className="powerapps-block">
        <h2>Módulo Automatizaciones</h2>
        <p>
          El Gerente puede cargar el plan semanal mediante un archivo Excel,
          actualizando automáticamente fichas, grupos y montos en SharePoint.
        </p>
        <p>
          También permite resetear datos para iniciar nuevos ciclos de cobranza.
        </p>

        <div className="module-images">
          <img
            className="module-img-main"
            src="/assets/certificaciones/powerapps/automatizaciones.png"
            alt="Pantalla de carga del plan semanal"
            onClick={() =>
              window.open(
                "/assets/certificaciones/powerapps/automatizaciones.png",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PowerAppsDetailPage;
