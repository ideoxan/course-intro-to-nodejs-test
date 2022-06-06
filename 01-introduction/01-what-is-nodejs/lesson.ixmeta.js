const metadata = {
    name: "What is NodeJS?",
    type: "editor_interactive",
    environment: {
        tesseract: true,
        on: "node:latest",
        commands: [
            "npm install"
        ],
        viewport: false, // false || { url: "https://..."}
        console: true,
    },
    guide: "/resources/guide.md",
    tasks: [
        {
            instructions: "Run the project",
            completedByDefault: false,
            conditions: [
                {
                    type: "file",
                    file: "index.js",
                    content: "/resources/correct_index.js",
                    is: "equal",
                },
                {
                    type: "run",
                    successful: true,
                    stdout: ""
                }
            ]
        }
    ]
}

export default metadata
