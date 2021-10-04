const path = require('path')
const express  = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html');
})
app.get('/about', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/about.html');
})
app.get('/contact', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/contact.html');
})

const PORT = process.env.PORT || 3300;
app.listen(PORT,function(){
    console.log('Server Started Listening on PORT: '+PORT);
});