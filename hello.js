// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(3000);

const express= require('express')
const app= express()

app.get('/', (req,res) =>{
    res.send('hello')
})
app.listen(3000);

