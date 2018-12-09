require('dotenv').config();
const Twit = require('twit');

const configFile = module.exports = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const T = new Twit(configFile);

const params = {
    q: 'database',
    count: 5
};

module.exports.getTweetData = (req, res) => {
    T.get('search/tweets', params, (err, data) => {
        if (err) return console.log(err);
        res.json(data);
    });
};
