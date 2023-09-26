const path = require('path');
const express = require('express')
const app = express()
const port = 3000

console.log(path.join(__dirname, 'public/javascripts'));

const staticPath = path.join(__dirname, 'public/javascripts');

//builltin middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath , 'index.html')); 
    //in django we use render(request, 'index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
