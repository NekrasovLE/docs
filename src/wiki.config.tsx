import { defineWikiConfig } from "@life-exe/wiki-engine";
import { Magnet, Rocket, Cpu, Layers, ExternalLink, Code2 } from "lucide-react";

export const wikiConfig = defineWikiConfig({
  siteTitle: "PointSnap — Документация плагина для Unreal Engine",
  brand: {
    title: "PointSnap",
    subtitle: "Unreal Engine Plugin",
    showAccentDot: true,
    homeLink: "/",
  },
  defaultLanguage: "ru",
  supportedLanguages: ["ru"],
  headerLinks: [
    {
      label: "Купить на FAB",
      url: "https://www.fab.com/sellers/NekrasovLE",
      external: true,
    },
    {
      label: "GitHub автора",
      url: "https://github.com/NekrasovLE",
      external: true,
    },
  ],
  icons: {
    plugin: <Magnet size={17} />,
    start: <Rocket size={17} />,
    component: <Layers size={17} />,
    physics: <Cpu size={17} />,
    api: <Code2 size={17} />,
    external: <ExternalLink size={17} />,
  },
  sectionCategories: {
    pointsnap: [
      { id: "start", label: { ru: "Начало работы" }, from: "01", to: "01" },
      { id: "components", label: { ru: "Компоненты" }, from: "02", to: "04" },
      { id: "advanced", label: { ru: "VR, физика и события" }, from: "05", to: "06" },
      { id: "api", label: { ru: "Справочник" }, from: "07", to: "07" },
    ],
  },
  cookieConsent: { enabled: false },
});
