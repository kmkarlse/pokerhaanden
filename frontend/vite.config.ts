import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // listen on all interfaces
    port: 5173,
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: {
      // On Docker Desktop for Windows, this tells the client
      // where to connect back for updates:
      host: "localhost",
      port: 5173,
    },
  },
});
