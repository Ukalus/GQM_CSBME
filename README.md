# GQM_CSBME
The best, blazingly fast solution for your GQM needs

## Planung 

### Verteilung

- Frontend (Nico)
- Backend (Lucas)
- DevOps (Jean-Philippe)
- Design (Anton)

### Techstack

- PostgreSQL (Datenbank) 
- Kubernetes (Deployment)
  - Deployment (Front-/Backend)
  - Service (Front-/Backend)
  - Ingress (Frontend)
- Angular (Frontend)
- Go (Backend)

### Use-Case-Diagramm

### ER-Diagramm
![doku/ER_Diagram.drawio.svg](doku/ER_Diagram.drawio.svg)
## Frontend 

### Sitemaps

### Wireframes 

## Backend

### Datenstrukturen

### API

## Deployment

### Kubernetes
Diese App wird auf einem privaten Kubernetes-Cluster ausgerollt und ist öffentlich erreichbar.

Dafür wurden einzelne Deployments mit zugehörigem Service und Ingress für das Backend und das Frontend und ein HelmRelease für eine PostgreSQL-Datenbank angelegt und ausgerollt.
Darüber hinaus befindet sich auf dem Cluster ein HelmRelease für wichtige Cluster-Management-Resourcen wie z.B. eine Grafana-, eine Prometheus- und eine Traefik-Instanz.