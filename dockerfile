from nginx:latest

#configuration
copy ./nginx.conf   /etc/nginx/nginx.conf

#content
copy ./html         /usr/share/nginx/html/html
copy ./css          /usr/share/nginx/html/css
copy ./js           /usr/share/nginx/html/js