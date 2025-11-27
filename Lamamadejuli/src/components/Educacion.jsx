// src/components/Educacion.jsx
import React from "react";

export default function Educacion({ estudios }) {
  if (!estudios || estudios.length === 0) {
    return (
      <section>
        <h3>Educación</h3>
        <p>No se ha registrado formación académica.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {estudios.map(({ id, titulo, universidad, periodo }) => (
          <li key={id}>
            <strong>{titulo}</strong> - {universidad} ({periodo})
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}