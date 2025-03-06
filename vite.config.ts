import ReactComponentName from "react-scan/react-component-name/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ReactComponentName({})],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
