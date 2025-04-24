import { defineConfig } from 'tsup';
import dotenv from 'dotenv';

export default defineConfig({
    entry: ['src/server.ts'],
    env: dotenv.config().parsed,
    outDir: 'dist',
    format: ['esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    target: 'es2020',
    skipNodeModulesBundle: true,
});
