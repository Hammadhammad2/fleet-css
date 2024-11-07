import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()].filter(Boolean),

    server: {
        host: true,
        port: 3000,
    },

    build: {
        sourcemap: true,
    },
});
