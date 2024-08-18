# Используем образ Node.js
FROM node:alpine as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем все остальные файлы в контейнер
COPY . .

# Сборка приложения
RUN npm run build


# Используем образ nginx
FROM nginx:stable-alpine

# Копируем собранные файлы в nginx контейнер
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфиг nginx в контейнер
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет использоваться приложением
EXPOSE 3000

# Команда для запуска nginx-сервера
CMD ["nginx", "-g", "daemon off;"]