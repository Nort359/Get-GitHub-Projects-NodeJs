const https = require('https');

function getRepos(userName, done) {
    if (!userName) return done(new Error('Необходимо указать имя пользователя'));

    const options = {
        hostname: 'api.github.com',
        path: `/users/${userName}/repos`,
        headers: { 'User-Agent': 'Nort359' }
    };

    const request = https.get(options, res => {
        res.setEncoding('utf-8');

        if (res.statusCode === 200) {
            let body ='';

            res.on('data', data => body += data);

            res.on('end', () => {
                try {
                    const result = JSON.parse(body);
                    done(null, result);
                } catch (error) {
                    done(new Error(`Не удалось обработать данные. Ошибка: (${error.message})`))
                }
            });
        } else {
            done(new Error(`Не удалось получить данные от сервера. Код: (${res.statusCode}). Сообщение: (${res.statusMessage})`));
        }
    });

    request.on('error', error => done(new Error(`Не удалось отправить запрос (${error.message})`)));
}

module.exports = {
    getRepos
};
