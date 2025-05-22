# Etapa 1: Construcción del proyecto con Vite
FROM node:18-alpine AS builder

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos del proyecto
COPY . .

# Compilar el proyecto para producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar archivos estáticos compilados al directorio público de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Nginx inicia automáticamente, no necesitas CMD adicional
