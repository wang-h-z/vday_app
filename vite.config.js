import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      cors: true, // Ensure external access
      allowedHosts: [
        // Add your specific ngrok host here
        "46d6-2406-3003-2006-d34e-e084-77a0-1a9f-d0.ngrok-free.app"
      ]
    },
    define: {
      "process.env": env, // Ensure environment variables are accessible
    }
  };
});

