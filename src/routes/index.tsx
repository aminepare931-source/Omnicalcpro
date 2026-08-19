import { createFileRoute } from "@tanstack/react-router";

// L'application complète est un fichier HTML autonome (CSS + JS intégrés)
// servi depuis /calculatrice.html et affiché ici en plein écran.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Calc — Calculatrice pro, grapheur & calcul symbolique" },
      {
        name: "description",
        content:
          "Application tout-en-un : calculatrice simple et scientifique, grapheur interactif, intégrales, dérivées symboliques, statistiques, matrices, convertisseur et équations différentielles.",
      },
      {
        property: "og:title",
        content: "Nexus Calc — Calculatrice pro, grapheur & calcul symbolique",
      },
      {
        property: "og:description",
        content:
          "Calculatrice scientifique, grapheur, intégrales, dérivées symboliques, statistiques, matrices et convertisseur universel dans une seule application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/calculatrice.html"
      title="Nexus Calc — application de calcul tout-en-un"
      style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
    />
  );
}
