import Welcome from '../pages/Welcome.jsx';
import AnimalOverview from '../pages/animals/overview/AnimalOverview.jsx';
import About from '../pages/About.jsx';
import AnimalDetailOverview from "../pages/animals/details/AnimalDetailOverview.jsx";

export const RouteConfig = [
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/zu-den-tieren",
    element: <AnimalOverview />
  },
  {
    path: "/zu-den-tieren/voegel",
    element: <AnimalDetailOverview title="Vögel" description="Beschreibung Vögel" subtitle=""/>
  },
  {
    path: "/zu-den-tieren/katzen",
    element: <AnimalDetailOverview title="Katzen" description="Beschreibung Katzen" subtitle="" descriptionPflegeplatzTemp="Wenn eine Katze ängstlich, krank, alt ist oder ein Katzenbaby, die/das wir nirgends dazu setzen können, suchen wir einen Pflegeplatz. Das heißt, die Katze befindet sich nicht im Tierheim sondern ist bei jemanden Zuhause bis sie vermittelt ist. Deshalb setzen Sie sich bitte, wenn sie diese Katze kennenlernen möchten, vorab mit uns in Verbindung, damit wir einen Termin vereinbaren können.
"/>
  },
  {
    path: "/zu-den-tieren/hunde",
    element: <AnimalDetailOverview title="Hunde" description="Beschreibung Hunde" subtitle="" descriptionPflegeplatzTemp="Wenn ein Hund ängstlich, krank, alt ist oder ein Welpe, den wir nirgends dazu setzen können, suchen wir einen Pflegeplatz. Das heißt, der Hund befindet sich nicht im Tierheim sondern ist bei jemanden Zuhause bis er vermittelt ist. Deshalb setzen Sie sich bitte, wenn sie diesen Hund kennenlernen möchten, vorab mit uns in Verbindung, damit wir einen Termin vereinbaren können."/>
  },
  {
    path: "/zu-den-tieren/kleintiere",
    element: <AnimalDetailOverview title="Kleintiere" description="Beschreibung Kleintiere" subtitle=""/>
  },
  {
    path: "/zu-den-tieren/sonstige-tiere",
    element: <AnimalDetailOverview title="sonstige Tiere" description="Beschreibung Sonstige Tiere" subtitle=""/>
  },
  {
    path: "/about",
    element: <About />
  }
];