// src/components/ToggleHabilidades.jsx
// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !tipo) return;

    const nuevaTecnologia = {
      id: Date.now(),
      nombre,
      tipo,
    };

    onAgregar(nuevaTecnologia);
    setNombre("");
    setTipo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Tecnología</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecciona tipo</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="base de datos">Base de datos</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
}

