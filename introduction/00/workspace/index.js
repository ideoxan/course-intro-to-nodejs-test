function sum(a, b) {
    return a + b
}

let a = 1, b = 2
console.log(sum(a, b))

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
