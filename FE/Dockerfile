FROM node:16.13.1

# 소스 이동
COPY . /app
WORKDIR /app

# npm install 설정
RUN \
    npm install -g serve

# 3000 포트 허용
EXPOSE 3000

CMD ["serve", "-s", "build"]
