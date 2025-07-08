import { urlsBianca, urlsClubPesca, urlsComplejoQuinta, urlsDelfina, urlsEmpresarial, urlsIngrid , urlsJazmin, urlsMichelin, urlsNose, urlsSyM} from "./images";

export const events = [
  {
    image: urlsIngrid[0],
    images:urlsIngrid,
    title: "Ingrid & Leo  Sociedad Rural",
    description: "Fiesta de 15 años",
    type: "Cumpleaños",
    date: "2025-04-23",
  },
  {
    image: urlsJazmin[0],
    images:urlsJazmin,
    title: "Cumpleaños 15 años de Jazmin",
    description: "Evento corporativo de fin de año con música y catering.",
    type: "Cumpleaños",
    date: "2025-04-06",
  },
  {
    image: urlsSyM[0],
    images:urlsSyM,
    title: "Boda Santi y mica",
    description: "Fiesta sorpresa con amigos, decoración y comida especial.",
    type: "Boda",
    date: "2025-03-10",
  },
  {
    image: urlsComplejoQuinta[0],
    images:urlsComplejoQuinta,
    title: "Concierto de Rock en el Teatro",
    description: "Concierto de rock en el teatro con música clásica.",
    type: "Empresarial",
    date: "2025-04-05",
  },
  {
    image: urlsBianca[0],
    images:urlsBianca,
    title: "Fiestas Infantiles en la Juventud",
    description: "Fiestas infantiles con juegos y actividades para la juventud.",
    type: "Cumpleaños",
    date: "2025-05-18",
  },
  {
    image: urlsMichelin[0],
    images:urlsMichelin,
    title: "Boda de Juan y Ana",
    description: "Boda con anfitrión y catering especial para las dos.",
    type: "Boda",
    date: "2025-06-22",
  },
  {
    image: urlsEmpresarial[0],
    images:urlsEmpresarial,
    title: "Evento de Desfile de Motocicletas",
    description: "Desfile emocionante de motocicletas con música y risas.",
    type: "Empresarial",
    date: "2025-07-10",
  },
  {
   image: urlsClubPesca[0],
    images:urlsClubPesca,
    title: "Club de pesca Huanguelen.",
    description: "Festival de música local con artistas locales.",
    type: "Festival-musica",
    date: "2025-08-03",
  },
  {
    image: urlsDelfina[0],
    images:urlsDelfina,
    title: "Maratón de Danza",
    description: "Maratón de danza con competencia y premios.",
    type: "Festival",
    date: "2025-09-14",
  },
  {
    title: "Concierto de Jazz en el Teatro",
    image: "/images/Evento-15.jpg",
    description: "Concierto de jazz en el teatro con música clásica.",
    type: "Festival",
    date: "2025-10-26",
  },
  {
    title: "Evento de Celebraciones de Aniversario",
    image: "/images/Evento-15.jpg",
    description: "Evento para celebraciones de aniversario con comida y música.",
    type: "Aniversario",
    date: "2025-11-30",
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
