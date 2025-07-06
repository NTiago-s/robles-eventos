export const events = [
  {
    image: "/images/Evento-15.jpg",
    title: "Evento 15 años de Jazmín",
    description: "Fiesta de 15 años de Jazmín",
    type: "Cumpleaños",
  },
  {
    title: "Evento Fiesta Empresarial 2024",
    image: "/images/Evento-15.jpg",
    description: "Evento corporativo de fin de año con música y catering.",
    type: "Empresarial",
  },
  {
    title: "Cumpleaños Sorpresa de Ana",
    image: "/images/Evento-15.jpg",
    description: "Fiesta sorpresa con amigos, decoración y comida especial.",
    type: "Cumpleaños",
  },
  {
    title: "Concierto de Rock en el Teatro",
    image: "/images/Evento-15.jpg",
    description: "Concierto de rock en el teatro con música clásica.",
    type: "Empresarial",
  },
  {
    title: "Fiestas Infantiles en la Juventud",
    image: "/images/Evento-15.jpg",
    description: "Fiestas infantiles con juegos y actividades para la juventud.",
    type: "Cumpleaños",
  },
  {
    title: "Boda de Juan y Ana",
    image: "/images/Evento-15.jpg",
    description: "Boda con anfitrión y catering especial para las dos.",
    type: "Boda",
  },
  {
    title: "Evento de Desfile de Motocicletas",
    image: "/images/Evento-15.jpg",
    description: "Desfile emocionante de motocicletas con música y risas.",
    type: "Festival",
  },
  {
    title: "Festival de Música Local",
    image: "/images/Evento-15.jpg",
    description: "Festival de música local con artistas locales.",
    type: "Festival-musica",
  },
  {
    title: "Maratón de Danza",
    image: "/images/Evento-15.jpg",
    description: "Maratón de danza con competencia y premios.",
    type: "Festival",
  },
  {
    title: "Concierto de Jazz en el Teatro",
    image: "/images/Evento-15.jpg",
    description: "Concierto de jazz en el teatro con música clásica.",
    type: "Festival",
  },
  {
    title: "Evento de Celebraciones de Aniversario",
    image: "/images/Evento-15.jpg",
    description: "Evento para celebraciones de aniversario con comida y música.",
    type: "Aniversario",
  },
];



export const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export async function getStaticPaths() {
  return events.map((event) => ({
    params: { slug: slugify(event.title) },
  }));
}
