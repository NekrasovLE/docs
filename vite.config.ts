import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Репозиторий: NekrasovLE/docs -> https://nekrasovle.github.io/docs/
// Для кастомного домена поменяйте base на "/".
export default defineConfig({
  base: "/docs/",
  plugins: [react(), tailwindcss()],
});
