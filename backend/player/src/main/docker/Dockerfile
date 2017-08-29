FROM java:8-jre
MAINTAINER Ruslan Kondrashin <ruzzland@gmail.com>
ADD ./target/@project.build.finalName@.@project.packaging@ /app/
CMD ["java", "-Xmx300m", "-jar", "/app/@project.build.finalName@.@project.packaging@"]
EXPOSE 9999
