// src/data/cvData.js

export const cabecera = {
  nombre: "Juan José Jaramillo",
  profesion: "Desarrollador UI Frontend"
};

export const perfil = {
  texto:
    "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web."
};

export const educacion = [
  {
    id: 1,
    titulo: "Tecnologo en mantenimiento de equipos",
    universidad: "SENA",
    periodo: "2019-2021"
  }
];

export const experiencia = [
  {
    id: 1,
    puesto: "Hacer paginitas random xd",
    empresa: "mi casa",
    periodo: "2022-2024"
  }
];

export const stackTecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "python", tipo: "frontend" },
  { id: 4, nombre: "TURSO(SQLITE)", tipo: "base de datos" }
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "Web E-commerce",
    descripcion: "Plataforma de venta de productos en línea con carrito de compras.",
    enlace: "https://github.com/usuario/proyecto-ecommerce"
  },
  {
    id: 2,
    nombre: "App de Tareas",
    descripcion: "Aplicación móvil para gestionar tareas diarias con React Native.",
    enlace: "https://github.com/usuario/app-tareas"
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" }
];
