// Todo el contenido vive aquí. Para cambiar textos o proyectos no tocas App.jsx.

export const profile = {
  name: 'Samuel Jonathan Pasquier Rios',
  role: 'Desarrollador web full stack',
  tagline:
    'Ingeniero mecatrónico que construye sitios y plataformas web con React y Django.',
  about:
    'Me formé como ingeniero mecatrónico y me enfoqué en el desarrollo web. Me gusta construir interfaces claras y sistemas que alguien use de verdad: desde landing pages hasta una plataforma de gestión académica.',
  email: 'pasquierrios@gmail.com',
  cv: '/cv-samuel-pasquier.pdf', // TODO: pon tu CV en /public con este nombre
};

// Para cada proyecto solo cambia title, description y url.
// La vista previa sale sola de la etiqueta og:image de tu sitio (la descarga
// scripts/fetch-previews.mjs cada vez que corres `pnpm dev` o `pnpm build`).
// Opcional: image: '/projects/nombre.webp' para usar tu propia captura (archivo en /public).
// "color" solo se usa si el sitio no tiene vista previa.
export const projects = [
  {
    title: 'Movies', // TODO: nombre real
    description: 'Descripción corta de qué es y para quién.', // TODO
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://moviesamu.pages.dev/', // TODO: URL real
    color: '#C2410C',
  },
  {
    title: 'Albergue de Mascotas Peluchin', // TODO
    description: 'Descripción corta de qué es y para quién.', // TODO
    stack: ['React', 'Vite', 'CSS'],
    url: 'https://alberguepeluchin.pages.dev/', // TODO
    color: '#0E7490',
  },
  {
    title: 'Salteñería El Hornito (Iniciativa)', // TODO
    description: 'Descripción corta de qué es y para quién.', // TODO
    stack: ['React', 'Vite', 'CSS'],
    url: 'https://salteneriaelhornito.pages.dev/', // TODO
    color: '#6B3FA0',
  },
  {
    title: 'Café Chulumani (Iniciativa)', // TODO
    description: 'Descripción corta de qué es y para quién.', // TODO
    stack: ['React', 'Vite', 'CSS'],
    url: 'https://cafechulumani.pages.dev/', // TODO
    color: '#1F6F9E',
  },
  {
    title: 'Café Copacabana (Iniciativa)', // TODO
    description: 'Descripción corta de qué es y para quién.', // TODO
    stack: ['React', 'Vite', 'CSS'],
    url: 'https://cafecopacabana.pages.dev/', // TODO
    color: '#0E7C66',
  },
  {
    title: 'Plataforma de gestión académica IMT UCB', // TODO: nombre real
    description:
      'Sistema web para reservar horarios extra-aula y gestionar licencias académicas.',
    stack: ['Django', 'PostgreSQL', 'REST'],
    url: 'https://imtlicencias.pythonanywhere.com/cidimec/licencias-imt/', // TODO: URL real
    color: '#2347F5',
  },
];

// De la más antigua a la más reciente.
export const experience = [
  {
    where: 'CIDIMEC',
    what: 'Pasantía full stack: plataformas web con Django y React, apps móviles e integración IoT.',
    when: '2023 – 2025',
  },
  {
    where: 'Viridian',
    what: 'Desarrollador backend (consultor) en sistemas bancarios con Java, Spring Boot y Docker.',
    when: '2025',
  },
  {
    where: 'BOO · Bolivia Opening Opportunities',
    what: 'Desarrollador full stack principal de la página web de la organización (voluntariado).',
    when: '2026 – presente',
  },
];

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Django',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MySQL',
  'Git',
];

// Color distintivo de cada tecnología (se usa suavizado en las etiquetas).
export const techColors = {
  HTML: '#E34F26',
  CSS: '#2965F1',
  JavaScript: '#F0B400',
  React: '#149ECA',
  Vite: '#8A5CF6',
  Django: '#0C7B5A',
  Python: '#3776AB',
  'Node.js': '#5FA04E',
  PostgreSQL: '#336791',
  MySQL: '#00758F',
  REST: '#7C5CBF',
  Git: '#F05032',
};