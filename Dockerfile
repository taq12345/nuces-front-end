FROM httpd:2.4
COPY . /opt/rh/httpd24/root/etc/httpd/htdocs/

RUN apt-get update && apt-get install curl
RUN find /opt/rh/httpd24/root/etc/httpd/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-backend-1-template-test.apps.shared-na4.na4.openshift.opentlc.com/g" {} \;
COPY ./my-httpd.conf /opt/rh/httpd24/root/etc/httpd/conf/httpd.conf

EXPOSE 8080