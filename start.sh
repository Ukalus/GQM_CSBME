
docker run --name GQM_db -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=mysecretpassword -v ./sql/initial_schema.sql:/docker-entrypoint-initdb.d/init.sql -d postgres
