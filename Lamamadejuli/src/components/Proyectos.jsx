// src/components/Proyectos.jsx
import React from "react";

export default function Proyectos({ proyectos }) {
  if (!proyectos || proyectos.length === 0) {
    return (
      <section>
        <h3>Proyectos</h3>
        <p>No se han registrado proyectos.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Proyectos</h3>
      <ul>
        {proyectos.map(({ id, nombre, descripcion, enlace }) => (
          <li key={id} style={{ marginBottom: "8px" }}>
            <strong>{nombre}</strong>
            <p>{descripcion}</p>
            <a href={enlace} target="_blank" rel="noopener noreferrer">
              Ver repositorio
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
