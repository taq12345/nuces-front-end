FROM httpd
COPY . /usr/local/apache2/htdocs/

RUN apt-get update && apt-get install curl
RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps-crc.testing/g" {} \;

EXPOSE 8080
