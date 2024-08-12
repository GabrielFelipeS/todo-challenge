FROM nginx:alpine
LABEL authors="Gabriel Santos"

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]