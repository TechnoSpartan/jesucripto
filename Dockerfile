# Etapa base
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias y paquetes
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando de arranque
CMD ["node", "dist/server.js"]