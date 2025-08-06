import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BAE_PATH,
};
