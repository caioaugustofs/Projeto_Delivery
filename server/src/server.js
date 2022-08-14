const express = require('express');
const allRoutes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors());


app.use(express.json());
app.use(allRoutes)

app.get('/add', (req, res) => {
    return res.json('up');
});



app.listen(3001, () => console.log('listening in 3001'));