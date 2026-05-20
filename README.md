# Banreservas Performance Test

Performance testing solution for the REST API endpoint:

GET https://fakestoreapi.com/products/{ID}

---

# Objective

Validate API stability, response times, throughput, and error rates under concurrent load.

---

# Tools Used

- k6
- JavaScript
- CSV dynamic data

---

# Project Structure

```text
banreservas-performance-test/
│
├── data/
│   └── products.csv
│
├── scripts/
│   └── test.js
│
├── reports/
│
└── README.md
```

---

# Test Strategy

## Load Pattern

- Ramp-up: 10 users over 10 seconds
- Stable load: 10 users for 20 seconds
- Ramp-down: 10 seconds

---

# Dynamic Data

The test uses dynamic product IDs loaded from a CSV file.

---

# Execution

## Run test

```bash
k6 run scripts/test.js
```

---

# Thresholds

| Metric | Threshold |
|---|---|
| P95 Response Time | < 800ms |
| Average Response Time | < 500ms |
| Error Rate | < 1% |

---

# Results

## Successful Execution

- 100% checks passed
- 0% error rate
- Average response time: ~195ms
- P95 response time: ~447ms

---

# Senior SDET Best Practices Applied

- Dynamic test data
- Threshold validations
- Functional checks
- Ramp-up/ramp-down strategy
- Realistic user delays
- Maintainable structure
- Data-driven testing

---

# Possible Improvements

- HTML reporting
- CI/CD integration
- Docker support
- Grafana dashboards
- Distributed load testing