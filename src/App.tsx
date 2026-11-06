import { WikiApp } from "@life-exe/wiki-engine";
import { wikiConfig } from "./wiki.config";
import { wikiData } from "./wikiData";

export default function App() {
  return (
    <WikiApp
      config={wikiConfig}
      data={wikiData}
      basename={import.meta.env.BASE_URL.replace(/\/$/, "")}
    />
  );
}
