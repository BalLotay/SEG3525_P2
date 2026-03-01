import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "home/index.html"),
        services: resolve(__dirname, "services/index.html"),
        photographers: resolve(__dirname, "photographers/index.html"),
        location: resolve(__dirname, "location/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        booking1: resolve(__dirname, "booking1/index.html"),
        booking2: resolve(__dirname, "booking2/index.html"),
        booking3: resolve(__dirname, "booking3/index.html")
      }
    }
  }
});
