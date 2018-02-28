const github = require('./github');

const userName = process.argv[2];

github.getRepos(userName, (error, repos) => {
    if (error)
        return console.log(`Ошибка: ${error.message}`);

    repos.forEach(repo => console.log(repo.name));
});