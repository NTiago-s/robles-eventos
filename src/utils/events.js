// Datos simulados — Podés moverlos a un archivo externo luego
export const events = [
  {
    image: "/images/Evento-15.jpg",
    title: "Evento 15 años de jazmin",
    description:"Fiesta de 15 años de jazmin"
  },
  {
    title: "Evento Fiesta Empresarial 2024",
    image: "/images/Evento-15.jpg",
    description: "Evento corporativo de fin de año con música y catering.",
  },
  {
    title: "Cumpleaños Sorpresa de Ana",
    image: "/images/Evento-15.jpg",
    description: "Fiesta sorpresa con amigos, decoración y comida especial.",
  },
];

// Slugify para generar URLs amigables
export const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Exportamos los slugs disponibles
export async function getStaticPaths() {
  return events.map((event) => ({
    params: { slug: slugify(event.title) },
  }));
}
