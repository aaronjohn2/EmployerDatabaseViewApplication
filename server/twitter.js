const Twit = require('twit');

const configFile = module.exports = {
    consumer_key: '####',
    consumer_secret: '####',
    access_token: '####',
    access_token_secret: '####'
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
