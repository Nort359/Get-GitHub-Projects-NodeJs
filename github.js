const https = require('https');

function getRepos(userName, done) {
    const options = {
        hostname: 'api.github.com',
        path: `/users/${userName}/repos`,
        headers: { 'User-Agent': 'Nort359' }
    };

    https.get(options, res => {
        console.log(res.statusCode, res.statusMessage);
    });
}

module.exports = {
    getRepos
};
