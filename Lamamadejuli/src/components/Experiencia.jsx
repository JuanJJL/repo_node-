// src/components/Experiencia.jsx
import React from "react";

export default function Experiencia({ trabajos }) {
  if (!trabajos || trabajos.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {trabajos.map(({ id, puesto, empresa, periodo }) => (
          <li key={id}>
            <strong>{puesto}</strong> - {empresa} ({periodo})
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
