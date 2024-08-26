docker run --name some-mysql -v sql/init.sql:/docker-entrypoint-initdb.d  -e MYSQL_ROOT_PASSWORD=mysecretpassword -d mysql:9.0.1
