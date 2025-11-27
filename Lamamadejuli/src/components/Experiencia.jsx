export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Desarrollador de software", empresa: "Mi casa", periodo: "2023-2025" },
    { id: 2, puesto: "Instructor de gatos", empresa: "Mi casa", periodo: "2020-2022" }
  ];

  if (experiencia.length === 0 ){
    return (
      <h3>No Tengo experiencia</h3>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
  
}
    