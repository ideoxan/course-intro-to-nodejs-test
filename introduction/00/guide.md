---
name: "What is NodeJS?"
description: "Learn about NodeJS and how it works."

environment:
  type: "editor_interactive"
  tesseract: true
  on: "node:latest"
  commands: |
    npm install
    node .
  working_directory: "/home/node/"
  viewport: false
  console: true
  # tcp only by default
  ports:
    - 3000

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
