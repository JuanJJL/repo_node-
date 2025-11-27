// src/App.jsx
import React, { useState } from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias as tecnologiasIniciales,
  proyectos,
  habilidades,
} from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [...prev, nueva]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <CabeceraCV {...cabecera} />
      <Perfil {...perfil} />
      <Educacion estudios={educacion} />
      <Experiencia trabajos={experiencia} />
      <StackTecnologias tecnologias={tecnologias} />

      {/* Componente con evento + estado */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />

      {/* Componente con renderizado condicional */}
      <ToggleHabilidades habilidades={habilidades} />

      <Proyectos proyectos={proyectos} />
    </div>
  );
}

export default App;