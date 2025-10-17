import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
  server: {
   host: "0.0.0.0", // 👈 allows access via IP
    port: 5173, // optional, customize if needed
  },
})
