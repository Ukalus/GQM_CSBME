package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
)

func env(key, def string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return def
}

// SQL query functions
var (
	host     = env("POSTGRES_HOST", "localhost")
	port     = 5432
	user     = env("POSTGRES_USER", "admin")
	password = env("POSTGRES_PASSWORD", "mysecretpassword")
	dbname   = env("POSTGRES_DB", "admin")
)

type HandlerWithDB func(http.ResponseWriter, *http.Request, *sql.DB)

func connectToDB() *sql.DB {

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	println(psqlInfo)
	sqlClient, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	err = sqlClient.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
	return sqlClient
}

func dbHandler(db *sql.DB, handler HandlerWithDB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(w, r, db)
	}
}
