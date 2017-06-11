const Hapi = require('hapi');
const axios = require('axios');
const config = require('./config');

const server = new Hapi.Server();

function handleGetForecast(request, reply) {
  const { latitude, longitude } = request.query;
  axios
    .get(`${config.owmUrl}?lat=${latitude}&lon=${longitude}&units=${config.units}&appid=${config.owmApiKey}`)
    .then(response => {
      reply({ list: response.data.list, city: response.data.city });
    });
}

server.connection({ port: 4000, host: 'localhost' });
server.route({ method: 'GET', path: '/forecast', handler: handleGetForecast });
server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
