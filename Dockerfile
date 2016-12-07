# Use Official Docker Container for Node
FROM node:6.9.1
MAINTAINER Abhijeet

# Add CWD
COPY . /opt/myRetail

# Start AdaptiveUI Application
WORKDIR /opt/myRetail
RUN npm i --production
CMD ["--json"]