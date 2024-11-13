FROM golang:1.23-bookworm

WORKDIR /usr/src/app

COPY . .

RUN go build

CMD ["/usr/src/app/main"]