package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
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

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "https://gqm.darkoro.org https://gqm-dev.darkoro.org http://localhost:4200 http://localhost:8080")
}

func getGoals(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	rows, err := db.Query("SELECT * FROM GQM.goal;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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

func getGoalById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/goals/"
	if strings.HasPrefix(r.URL.Path, path) {
		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)

	rows, err := db.Query("SELECT * FROM GQM.goal WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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
	enableCors(&w)
	// Parse the JSON request body
	var goal Goal
	if err := json.NewDecoder(r.Body).Decode(&goal); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := "INSERT INTO GQM.goal (g_name, description) VALUES ($1, $2);"
	_, err := db.Exec(query, goal.Name, goal.Description)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		log.Println(err)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Goal inserted successfully"})
}

func deleteGoalById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/goals/delete/"
	if strings.HasPrefix(r.URL.Path, path) {
		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)

	ans, err := db.Query("DELETE FROM GQM.goal WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
	}
	if ans != nil {
		fmt.Println(ans)
	}
}

func getQuestions(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	rows, err := db.Query("SELECT * FROM GQM.question;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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

func getQuestionById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/questions/"
	if strings.HasPrefix(r.URL.Path, path) {
		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)
	rows, err := db.Query("SELECT * FROM GQM.question WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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
	enableCors(&w)
	// Parse the JSON request body
	var question Question
	if err := json.NewDecoder(r.Body).Decode(&question); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := "INSERT INTO GQM.question (text) VALUES ($1);"
	_, err := db.Exec(query, question.Text)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Question inserted successfully"})
}

func deleteQuestionById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/questions/delete/"
	if strings.HasPrefix(r.URL.Path, path) {
		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)

	ans, err := db.Query("DELETE FROM GQM.question WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
	}
	if ans != nil {
		fmt.Println(ans)
	}
}

func getMetrics(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	rows, err := db.Query("SELECT * FROM GQM.metric;")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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

func getMetricById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/metrics/"
	if strings.HasPrefix(r.URL.Path, path) {
		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)
	rows, err := db.Query("SELECT * FROM GQM.metric WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
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
	enableCors(&w)
	// Parse the JSON request body
	var metric Metric
	if err := json.NewDecoder(r.Body).Decode(&metric); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Prepare the SQL statement
	query := "INSERT INTO GQM.metric (source, value, unit_messure) VALUES ($1, $2, $3);"
	_, err := db.Exec(query, metric.Source, metric.Value, metric.UnitMessure)
	if err != nil {
		http.Error(w, "Failed to insert into database", http.StatusInternalServerError)
		return
	}

	// Return a success message
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Metric inserted successfully"})
}

func deleteMetricById(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	enableCors(&w)
	var slug string
	const path = "/metrics/delete/"
	if strings.HasPrefix(r.URL.Path, path) {

		slug = r.URL.Path[len(path):]
	}
	fmt.Println("the slug is: ", slug)

	ans, err := db.Query("DELETE FROM GQM.metric WHERE id =" + slug + ";")
	if err != nil {
		fmt.Println("Query didn't work")
		log.Println(err)
	}
	if ans != nil {
		fmt.Println(ans)
	}
}
