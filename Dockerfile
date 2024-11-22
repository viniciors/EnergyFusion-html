FROM nginx:alpine

# Copiar o arquivo de configuração personalizado para o diretório padrão do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar todos os arquivos HTML, CSS e JavaScript para o diretório padrão do Nginx
COPY html /usr/share/nginx/html

# Expor a porta 8080
EXPOSE 8080

# Definir o comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
