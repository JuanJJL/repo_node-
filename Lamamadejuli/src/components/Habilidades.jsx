    // src/components/Habilidades.jsx
import React from "react";

export default function Habilidades({ habilidades }) {
  if (!habilidades || habilidades.length === 0) {
    return (
      <section>
        <h3>Habilidades</h3>
        <p>No se han definido habilidades.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map(({ id, nombre, nivel }) => (
          <li key={id}>
            {nombre} <em>({nivel})</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
