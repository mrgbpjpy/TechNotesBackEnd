const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', require('./routes/root'))

app.all('*', (req, res)=>{
    res.status(404)
    const accept = req.headers.accept || ''

    if(accept.includes('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (accept.includes('json')){
        res.json ({ message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})
//https://www.youtube.com/watch?v=CvCiNeLnZ00&t=42s  and we are at  25:31

app.listen(PORT,()=>{
    console.log(`Server is running on Port #:  ${PORT}`)
})