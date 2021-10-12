FROM ubuntu:latest

RUN apt-get update -y

RUN apt-get install -y openssh-server
RUN mkdir /var/run/sshd

RUN echo 'root:root' |chpasswd

RUN sed -ri 's/^#?PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config

RUN mkdir /root/.ssh

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get update -y

RUN apt-get upgrade -y

RUN apt-get install git -y

RUN apt install nodejs -y

RUN apt install npm -y

RUN apt-get update -y

RUN apt-get upgrade -y

EXPOSE 22 3000 3001

CMD ["/usr/sbin/sshd", "-D"]