// src/App.jsx
import React from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias,
  proyectos,
  habilidades
} from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/HABILIDADES";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Cabecera */}
      <CabeceraCV
        nombre={cabecera.nombre}
        profesion={cabecera.profesion}
      />

      {/* Perfil */}
      <Perfil texto={perfil.texto} />

      {/* Educación */}
      <Educacion estudios={educacion} />

      {/* Experiencia */}
      <Experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <StackTecnologias tecnologias={stackTecnologias} />

      {/* Proyectos (nuevo componente) */}
      <Proyectos proyectos={proyectos} />

      {/* Habilidades (nuevo componente) */}
      <Habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
