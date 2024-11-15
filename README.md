# GQM_CSBME
The best, blazingly fast solution for your GQM needs

## Planung
### Verteilung
- Planung (Lasse - nachträglich eingestiegen)
- Frontend (Nico)
- Backend (Lucas)
- DevOps bzw. CI/CD und allg. Unterstützung (Jean-Philippe)
- Qualitätsmanagement( Lucas )
- Design (Anton (Ursprünglich geplant), Jean-Philippe, Nico)

### Techstack
- PostgreSQL (Datenbank) 
- Kubernetes (Deployment)
  - Deployment (Front-/Backend)
  - Service (Front-/Backend)
  - Ingress (Frontend)
- GitHub (CI/CD, Security)
  - Renovate Bot (Security)
  - Workflow (CI/CD-Pipeline)
- Angular (Frontend)
- Postgraphile (Backend)
  - ursprünglich Go (Backend)

## Anforderungsanalyse (Nico, Lasse, Philippe, Anton, Lucas)
[Link zu Anforderungstabelle](doku/userstories.ods)

## Ablaufdiagramm (Lasse & Nico)
#### Nico
![aktuelle_implementierung](doku/Ablaufdiagramme/current_implementation.png)

#### Lasse
![volle_implementierung](doku/Ablaufdiagramme/full_program.png)

### ER-Diagramm (Lucas)
![er-diagram](doku/Datenbank/ERD.png)

### Wireframes (Nico, Philippe)
![login-draft](doku/Wireframes/login_first-draft.png)
![dev1](doku/Wireframes/dev_unselected-goal.png)
![qs1](doku/Wireframes/qs_selected-goal.png)
![qs2](doku/Wireframes/qs_selected-question.png)
![qs3](doku/Wireframes/gqm_qs_all-selected.png)
![qsa](doku/Wireframes/gqm_qsa.png)
![add](doku/Wireframes/add_gqm.png)
![edit](doku/Wireframes/edit_gqm.png)
![delete](doku/Wireframes/delete_gqm.png)

### Mockups (Nico, Philippe)
![login1](doku/Mockups/login_first-draft.png)

#### Nico
![login2](doku/Mockups/login_final.png)
![dev](doku/Mockups/gqm_dev.png)
![qsa](doku/Mockups/gqm_qsa.png)

### UML Diagram (Nico)
![doku/gqm_mockup.png](doku/UML/UML_gqm.png)

### CI/CD und Systeme (Philippe)
### Produktiv
Backend < --- > https://gqm-backend.darkoro.org/

Frontend < --- > https://gqm.darkoro.org/

### Development
Backend < --- > https://gqm-backend-dev.darkoro.org/

Frontend < --- > https://gqm-dev.darkoro.org/

Diese App wird auf einem privaten Kubernetes-Cluster ausgerollt und ist öffentlich erreichbar.

Dafür wurde ein für diese Anwendungen entwickeltes [HelmChart](https://github.com/jpkraemer-mg/helmcharts/tree/main/charts/gqm) genutzt, welches sich um das Ausrollen des Front- und Backends sowie einer PostgreSQL-Datenbank kümmert.

In diesem Repository getätigte Änderungen triggern einen GitHub-Workflow, welcher Front- und Backend-Ordner (./FrontEnd-Angular/GQM/ bzw. ./go_backend/) auf Änderungen prüft und bei vorhandenen Änderungen ein neues Image baut.
Dieses jeweilige Image wird vom Kubernetes-Cluster durch die Nutzung des Flux Helm Controllers und der dort integrierten Image Update Automation automatisiert neu ausgerollt.

### Ressourcen in der Einzelübersicht
![deployment](doku/CI-CD/deployments.png)
![statefulset](doku/CI-CD/statefulset.png)
![pods](doku/CI-CD/pods.png)
![services](doku/CI-CD/services.png)
![ingresses](doku/CI-CD/ingresses.png)
