import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@service", replacement: "/src/service" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@reducers", replacement: "/src/reducers" },
      { find: "@store", replacement: "/src/store" },
      { find: "@", replacement: "/src" },
    ],
  },
})
