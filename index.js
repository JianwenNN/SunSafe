import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', async (req, res) => {
    const response = await axios.get('https://api.openuv.io/api/v1/uv', {
        headers: {
            'x-access-token': 'openuv-11t2aerm7tv51k3-io',
        },
        params: {
            'lat': req.body.latitude,
            'lng': req.body.longitude,
        }
    })


    if (response.data.result.uv > 3) {
        res.render('index.ejs', {
            imageURL: 'sunscreen.jpg',
            urlStr: 'sunscreen',
            suggestion: 'You need to use sunscreen now.',
        })
    }
    else {
        res.render('index.ejs', {
            imageURL: 'cloudy.jpg',
            urlStr: 'cloudy',
            suggestion: 'You are safe to go out without sunscreen.',
        });
    }
});

app.listen(port, () => {
    console.log(`Start listening on port ${port}.`);
});