FROM httpd
COPY . /usr/local/apache2/htdocs/

RUN apt-get update && apt-get install curl
RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost/$(curl http://checkip.amazonaws.com)/g" {} \;

EXPOSE 80
