import { defineWikiConfig } from "@life-exe/wiki-engine";
import { Plug, Rocket } from "lucide-react";

export const wikiConfig = defineWikiConfig({
  siteTitle: "NekrasovLE Plugins — Документация",
  brand: { title: "NEKRASOVLE.DOCS", showAccentDot: true, homeLink: "/" },
  defaultLanguage: "ru",
  supportedLanguages: ["ru"],
  headerLinks: [
    { label: "GitHub", url: "https://github.com/NekrasovLE" },
  ],
  icons: {
    plugin: <Plug size={17} />,
    start: <Rocket size={17} />,
  },
  // Каждый новый плагин = новая секция "NN-имя.md" + папка "NN-имя/".
  // Здесь группируем страницы внутри секции плагина.
  sectionCategories: {
    pointsnap: [
      { id: "start", label: { ru: "Начало работы" }, from: "01", to: "01" },
      { id: "components", label: { ru: "Компоненты" }, from: "02", to: "04" },
      { id: "advanced", label: { ru: "Расширенное" }, from: "05", to: "07" },
    ],
  },
  cookieConsent: { enabled: false },
});
