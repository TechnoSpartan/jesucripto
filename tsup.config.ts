import { defineConfig } from 'tsup';
import dotenv from 'dotenv';

dotenv.config(); // cargar .env directamente por claridad

export default defineConfig({
    entry: ['src/server.ts'],
    outDir: 'dist',
    format: ['esm'],
    target: 'es2020',
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    skipNodeModulesBundle: true,
    env: process.env, // hereda todas, no solo .parsed
    shims: false,
    treeshake: true
});
