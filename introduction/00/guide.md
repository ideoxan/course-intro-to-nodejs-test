---
name: "What is NodeJS?"

environment:
  type: "editor_interactive"
  tesseract: true
  on: "node_latest"
  commands: |
    npm install
    node .
  working_directory: "/home/node/"
  viewport: false
  console: true

tasks:
  - instructions: "Run the project"
    completed_by_default: false
    conditions:
      - type: "file_local"
        in: "index.js"
        is: "equals"
        value: "./resources/index_solution_1.js"

      # Successful run
      - type: "run"
        in: "stderr"
        is: "equals"
        value: ""

content:
  workspace: "./workspace/"

---

## Introduction
Hello, World! This is a testing sample used by Ideoxan to test the IDE. It has one lesson runs a basic Node.js project.

## How It Works
This lesson runs a basic Node.js project. It uses the Tesseract Runsystem to execute code in a safe, remote environment and returns the output.
