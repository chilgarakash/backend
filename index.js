require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello Akash!')
})
app.get('/login', (req, res) => {
    res.send('<h1>Please Login to Sunsky Page</h1>')
})

app.get('/api/employee-list', (req, res) => {
  const employeeList = [
    {
      id:1,
      name:'Akash Chilgar'
    },
    {
      id:2,
      name:'Yogesh Bhosake'
    },
    {
      id:3,
      name:'Pavan Gajakosh'
    },
    {
      id:4,
      name:'Sujit Sahoo'
    },
    {
      id:5,
      name:'Akash Swain'
    }
  ]
  res.json(employeeList);
  // res.send('<h1>Please Login to Sunsky Page</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port:${port}`)
})