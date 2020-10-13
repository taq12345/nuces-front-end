FROM centos:8
RUN chgrp -R 0 /run && chmod -R g=u /run
RUN yum -y install httpd
COPY . /var/www/html/
# RUN sed "s/Listen 80/Listen 8080/" /etc/httpd/conf/httpd.conf
COPY ./my-httpd.conf /etc/httpd/conf/httpd.conf
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
EXPOSE 8080

# FROM httpd:2.4

# USER ROOT

# COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

# COPY . /usr/local/apache2/htdocs/

# # USER root
# # COPY ./my-httpd.conf /etc/apache2/conf/httpd.conf
# # RUN apt-get update && apt-get install curl

# RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps-crc.testing/g" {} \;
# # RUN systemctl restart httpd

#EXPOSE 8080