# Banreservas Performance Test

Solución de pruebas de performance desarrollada con k6 para evaluar el endpoint REST:

GET https://fakestoreapi.com/products/{ID}

---

# Objetivo

Validar la estabilidad, tiempos de respuesta, throughput y tasa de errores de la API bajo carga concurrente.

---

# Herramientas utilizadas

* k6
* JavaScript
* CSV para datos dinámicos

---

# Estructura del proyecto

```text
banreservas-performance-test/
│
├── data/
│   └── products.csv
│
├── docs/
│   └── Performance_Test_Report.pdf
│
├── reports/
│
├── scripts/
│   └── test.js
│
├── .gitignore
│
└── README.md
```

---

# Estrategia de prueba

## Patrón de carga

* Ramp-up: incremento progresivo de usuarios
* Carga estable concurrente
* Ramp-down controlado

---

# Datos dinámicos

La prueba utiliza IDs dinámicos obtenidos desde un archivo CSV.

---

# Ejecución

## Ejecutar prueba

```bash
k6 run scripts/test.js
```

---

# Thresholds configurados

| Métrica           | Threshold |
| ----------------- | --------- |
| P95 Response Time | < 800ms   |
| Avg Response Time | < 500ms   |
| Error Rate        | < 1%      |

---

# Resultados obtenidos

* 100% de checks exitosos
* 0% de error rate
* Avg response time: ~195ms
* P95: ~447ms

---

# Buenas prácticas aplicadas

* Data-driven testing
* Threshold validations
* Functional checks
* Ramp-up y ramp-down
* Simulación realista de usuarios
* Código mantenible
* Estructura escalable

---

# Posibles mejoras

* Reportes HTML
* Integración CI/CD
* Dockerización
* Dashboards con Grafana
* Pruebas distribuidas
