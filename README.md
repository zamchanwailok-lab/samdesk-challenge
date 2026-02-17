# Samdesk Challenge – Advent of Code 2024 Day 2 (Red-Nosed Reports)

This repo contains my solution for **Advent of Code 2024 – Day 2**.

It computes:
- **Part 1:** Number of *safe* reports  
- **Part 2:** Number of *safe* reports when a **single “Problem Dampener” removal** is allowed

---

## Approach

### Part 1
1. Parse each line into an array of integers.
2. A report is **safe** if:
   - Levels are strictly **increasing** or strictly **decreasing**
   - Each adjacent difference is **between 1 and 3 (inclusive)**

### Part 2 (Problem Dampener)
- If a report is unsafe, try removing **one level** (each index once).
- If **any** removal makes it safe, the report counts as safe.

---

## How to Run

```bash
npm install
npm run start
```

---

## Notes

- The `isSafeReport` function performs validation for a single report.
- Part 2 reuses the same validator and checks all single-removal variants.
