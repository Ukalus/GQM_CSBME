package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

type Goal struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Question struct {
	ID   string `json:"id"`
	Text string `json:"text"`
}

type Metric struct {
	ID          string `json:"id"`
	Source      string `json:"source"`
	Value       string `json:"value"`
	UnitMessure string `json:"unitmessure"`
}

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

func getGoals(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	rows, err := db.Query("SELECT * FROM GQM.goal;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Fatal(err)
	}
	defer rows.Close()
	var goals []Goal
	for rows.Next() {
		var goal Goal
		if err := rows.Scan(&goal.ID, &goal.Name, &goal.Description); err != nil {
			http.Error(w, "Failed to scan database result", http.StatusInternalServerError)
			return
		}
		goals = append(goals, goal)
	}
	if err := rows.Err(); err != nil {
		http.Error(w, "Failed to retrieve database rows", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(goals)
}

func insertGoal(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// Parse the JSON request body
	var goal Goal
	if err := json.NewDecoder(r.Body).Decode(&goal); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := `INSERT INTO GQM.goal (id, g_name, description) VALUES ($1, $2, $3)`
	_, err := db.Exec(query, goal.ID, goal.Name, goal.Description)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Goal inserted successfully"})
}

func getQuestions(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	rows, err := db.Query("SELECT * FROM GQM.question;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Fatal(err)
	}
	defer rows.Close()
	var questions []Question
	for rows.Next() {
		var question Question
		if err := rows.Scan(&question.ID, &question.Text); err != nil {
			http.Error(w, "Failed to scan database result", http.StatusInternalServerError)
			return
		}
		questions = append(questions, question)
	}
	if err := rows.Err(); err != nil {
		http.Error(w, "Failed to retrieve database rows", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(questions)
}

func insertQuestion(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// Parse the JSON request body
	var question Question
	if err := json.NewDecoder(r.Body).Decode(&question); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := `INSERT INTO GQM.question (id, text) VALUES ($1, $2)`
	_, err := db.Exec(query, question.ID, question.Text)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Question inserted successfully"})
}

func getMetrics(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	rows, err := db.Query("SELECT * FROM GQM.metric;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Fatal(err)
	}
	defer rows.Close()
	var metrics []Metric
	for rows.Next() {
		var metric Metric
		if err := rows.Scan(&metric.ID, &metric.Source, &metric.Value, &metric.UnitMessure); err != nil {
			http.Error(w, "Failed to scan database result", http.StatusInternalServerError)
			return
		}
		metrics = append(metrics, metric)
	}
	if err := rows.Err(); err != nil {
		http.Error(w, "Failed to retrieve database rows", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(metrics)
}

func insertMetric(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// Parse the JSON request body
	var metric Metric
	if err := json.NewDecoder(r.Body).Decode(&metric); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := `INSERT INTO GQM.metric (id, source, value, unit_messure) VALUES ($1, $2, $3, $4)`
	_, err := db.Exec(query, metric.ID, metric.Source, metric.Value, metric.UnitMessure)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Metric inserted successfully"})
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func dbHandler(db *sql.DB, handler HandlerWithDB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(w, r, db)
	}
}

func main() {
	var db *sql.DB = connectToDB()
	println(db)
	http.HandleFunc("/", handler)

	http.HandleFunc("/goals", dbHandler(db, getGoals))
	// http.HandleFunc("/goal/id", dbHandler(db, getGoal(id)))
	// http.HandleFunc("/goal/id/questions", dbHandler(db, getQuestionsFromGoal(GoalId)))

	// http.HandleFunc("/goal/id/delete", dbHandler(db, deleteGoal(id)))
	http.HandleFunc("/goals/add", dbHandler(db, insertGoal))

	http.HandleFunc("/questions", dbHandler(db, getQuestions))
	http.HandleFunc("/questions/add", dbHandler(db, insertQuestion))

	http.HandleFunc("/metrics", dbHandler(db, getMetrics))
	http.HandleFunc("/metrics/add", dbHandler(db, insertMetric))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
