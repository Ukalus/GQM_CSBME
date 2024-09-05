CREATE USER go_backend;

CREATE SCHEMA GQM;

CREATE TABLE GQM.Goal (
    id int NOT NULL,
    g_name varchar(30),
    description varchar(400),
    PRIMARY KEY (id)  
);

CREATE TABLE GQM.Question (
    id int NOT NULL,
    text varchar(100),
    PRIMARY KEY (id) 
);

CREATE TABLE GQM.Metric (
    id int NOT NULL,
    source varchar(200),
    value varchar(100),
    unit_messure varchar(100),
    PRIMARY KEY (id)
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA GQM TO go_backend;