export default function Educacion() {
  const educacion = [
    {id: 1, titulo: "Aprendiz de Software", universidad: "SENA", periodo: "2024-2025"}

  ];

  return (
    <section>
    <h3>Educacion</h3>
    <ul>{educacion.map((edu) =>(
      <li key={edu.id}>
        <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo}) 
        </li>
    ))}</ul>
    </section>
  
  );
}