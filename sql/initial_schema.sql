CREATE USER go_backend;

CREATE SCHEMA GQM;

CREATE TABLE GQM.Projects(
    id SERIAL PRIMARY KEY,
    project_name varchar(30)
);

CREATE TABLE GQM.Goal (
    id SERIAL PRIMARY KEY,
    g_name varchar(30),
    description varchar(400)
);

CREATE TABLE GQM.Question (
    id SERIAL PRIMARY KEY,
    text varchar(100)
);

CREATE TABLE GQM.Metric (
    id SERIAL PRIMARY KEY,
    source varchar(200),
    value varchar(100),
    unit_messure varchar(100)
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA GQM TO go_backend;

INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software is running', 'The Project is successfully running');
INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software Errorless', 'The Project is running without errors');
INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software Looking Nice', 'The Project is looking nice');

INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Is the Frontend reachable?');
INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Is the Backend reachable?');
INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Can both Frontend and Backend communicate?');

INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Pingabfrage', '0', 'Verlorene Pakete');
INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Nutzerreviews - Positiv', '10', 'Anzahl');
INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Nutzerreviews - Negativ', '2', 'Anzahl');

INSERT INTO GQM.Projects(id,project_name) Values(DEFAULT,'Cooles Projekt 0');
INSERT INTO GQM.Projects(id,project_name) Values(DEFAULT,'Cooles Projekt 1');
INSERT INTO GQM.Projects(id,project_name) Values(DEFAULT,'Cooles Projekt 3');