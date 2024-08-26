CREATE USER go_backend;

CREATE DATABASE MQL;

CREATE TABLE MQL.Goal (
    id int NOT NULL,
    g_name varchar(30),
    description varchar(400),
    PRIMARY KEY (ID)
)

CREATE TABLE MQL.Question (
    id int NOT NULL,
    text varchar(100),
    PRIMARY KEY (ID)
)

CREATE TABLE MQL.Metric (
    id int NOT NULL,
    source varchar(200)
    value varchar(100)
    unit_messure varchar(100)
    PRIMARY KEY (ID)
)

GRANT ALL PRIVILEGES ON MQL.* TO go_backend;
