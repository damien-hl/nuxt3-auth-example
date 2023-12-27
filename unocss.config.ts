import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { readFile } from "node:fs/promises";

export default defineConfig({
  shortcuts: [],
  preflights: [
    {
      getCSS: () => readFile("./node_modules/@unocss/reset/tailwind.css", "utf-8"),
      layer: "preflights",
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
