
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Reemplaza 'NOMBRE_DE_TU_REPOSITORIO' con el nombre real de tu repo en GitHub
// Si tu repo es mi-usuario.github.io, usa base: '/'
export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist',
  }
});
