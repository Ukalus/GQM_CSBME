package main

import (
	"database/sql"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

func main() {
	var db *sql.DB = connectToDB()
	println(db)

	http.HandleFunc("/goals", dbHandler(db, getGoals))
	http.HandleFunc("/goals/add", dbHandler(db, insertGoal))
	http.HandleFunc("/goals/", dbHandler(db, getGoalById))
	http.HandleFunc("/goals/delete/", dbHandler(db, deleteGoalById))

	http.HandleFunc("/questions", dbHandler(db, getQuestions))
	http.HandleFunc("/questions/add", dbHandler(db, insertQuestion))
	http.HandleFunc("/questions/", dbHandler(db, getQuestionById))
	http.HandleFunc("/questions/delete/", dbHandler(db, deleteQuestionById))

	http.HandleFunc("/metrics", dbHandler(db, getMetrics))
	http.HandleFunc("/metrics/add", dbHandler(db, insertMetric))
	http.HandleFunc("/metrics/", dbHandler(db, getMetricById))
	http.HandleFunc("/metrics/delete/", dbHandler(db, deleteMetricById))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
