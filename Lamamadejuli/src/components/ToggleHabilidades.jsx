
import React, { useState } from "react";
import Habilidades from "./HABILIDADES";

export default function ToggleHabilidades({ habilidades }) {
  const [mostrar, setMostrar] = useState(true);

  const handleToggle = () => {
    setMostrar((prev) => !prev);
  };

  return (
    <section>
      <button onClick={handleToggle}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
    </section>
  );
}   