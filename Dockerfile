FROM httpd
COPY . /usr/local/apache2/htdocs/

RUN apt-get update && apt-get install curl
RUN find /usr/local/apache2/htdocs/javascript/ -type f -exec sed -i -e "s/localhost:3000/nuces-frontend-1-template-test.apps.shared-na4.na4.openshift.opentlc.com/g" {} \;

EXPOSE 80