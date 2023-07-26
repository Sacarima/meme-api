/* SERVER SETTING ----> DEPENDENCIES */
console.log('testing server 1, 2..');
const express = require('express');
const app = express();
const path = require('path');
const data = require('./data')
const PORT = process.env.PORT || 8001;


app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/:name', (req, res) => {
    const memeName = req.params.name.toLowerCase();
    if( data[memeName] ) {
        res.json(data[memeName])
    }else {
        res.json(data['unknown']);
    }
    res.json(data);
    console.log(testing)
})


app.listen(PORT, () => {
    console.log('The server is now live')
})
