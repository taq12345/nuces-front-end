FROM httpd:2.4
COPY . /usr/local/apache2/htdocs/

RUN apt-get update && apt-get install curl
RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps.shared-na4.na4.openshift.opentlc.com/g" {} \;
COPY ./my-httpd.conf /opt/rh/httpd24/root/etc/httpd.conf

EXPOSE 8080