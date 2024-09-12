CREATE USER go_backend;

CREATE SCHEMA GQM;

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
    unit_messure varchar(100)y
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA GQM TO go_backend;

INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software is running', 'The Project is successfully Running');
INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software Errorless', 'The Project is Running without Errors');
INSERT INTO GQM.Goal(id,g_name,description) Values(DEFAULT,'Software Looking Nice', 'The Project is Looking nice');

INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Is the Frontend reachable?');
INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Is the Backend reachable?');
INSERT INTO GQM.Question(id,text) Values(DEFAULT,'Can both Frontend and Backend Communicate?');


INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Ping Abfrage', '0', 'verlorene Pakete');
INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Nutzerreviews - Positiv', '10', 'Anzahl');
INSERT INTO GQM.Metric(id,source,value,unit_messure) Values(DEFAULT,'Nutzerreviews - Negativ', '2', 'Anzahl');

