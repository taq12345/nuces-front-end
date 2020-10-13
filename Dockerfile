FROM httpd:2.4

# USER root
# COPY ./my-httpd.conf /etc/apache2/conf/httpd.conf
COPY . /etc/apache2/htdocs/

# RUN apt-get update && apt-get install curl
# RUN find /etc/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps-crc.testing/g" {} \;
# RUN systemctl restart httpd

EXPOSE 8080