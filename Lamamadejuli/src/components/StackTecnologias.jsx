// src/components/StackTecnologias.jsx
import React from "react";

export default function StackTecnologias({ tecnologias }) {
  // Función para asignar colores según el tipo de tecnología
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      default:
        return "gray";
    }
  };

  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No se han registrado tecnologías.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map(({ id, nombre, tipo }) => (
          <li key={id} style={{ color: obtenerColor(tipo) }}>
            {nombre} - <em>{tipo}</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
