import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "system-ui, sans-serif",
    },
  },
});

export const system = createSystem(defaultConfig, config);
