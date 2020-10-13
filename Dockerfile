FROM httpd:2.4

#COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
#COPY . /usr/local/apache2/htdocs/
# FROM httpd:2.4



# # USER root
# # COPY ./my-httpd.conf /etc/apache2/conf/httpd.conf
# # RUN apt-get update && apt-get install curl

# RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps-crc.testing/g" {} \;
# # RUN systemctl restart httpd

#EXPOSE 8080