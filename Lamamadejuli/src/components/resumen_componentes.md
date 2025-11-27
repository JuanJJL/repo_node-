# Resumen de Componentes

## CabeceraCV.jsx
```jsx
export default function CabeceraCV({nombre, profesion}) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{profesion}</h2> 
      <hr />
    </header>
  );
}
```

## Educacion.jsx
```jsx
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
```

## Experiencia.jsx
```jsx
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
```

## Perfil.jsx
```jsx
import React from "react";

export default function Perfil({ texto }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{texto}</p>
      <hr />
    </section>
  );
}
```

## StackTecnologias.jsx
```jsx
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
```
