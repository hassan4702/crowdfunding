import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor_react: ["react", "react-dom"],
          vendor_router: ["react-router-dom"],
          vendor_thirdweb: ["@thirdweb-dev/react", "@thirdweb-dev/sdk", "ethers"],
          vendor_nextui: ["@nextui-org/react", "@nextui-org/tabs", "@nextui-org/card", "@nextui-org/input", "@nextui-org/radio", "@nextui-org/button"],
          vendor_carousel: ["react-slick", "slick-carousel"],
          vendor_misc: ["react-markdown", "react-toastify", "replyke"],
        },
      },
    },
  },
});
