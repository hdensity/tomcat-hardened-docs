let fs = require('fs');
let dockerHubAPI = require('docker-hub-api');

var obj = {
    short: fs.readFileSync('README.short', 'utf8'),
    full: fs.readFileSync('README.md', 'utf8')
};

dockerHubAPI.login(process.env.DOCKER_USERNAME, process.env.DOCKER_PASSWORD).then(function (info) {
    dockerHubAPI.setRepositoryDescription('samschmit','tomcat-hardened', obj);
})
