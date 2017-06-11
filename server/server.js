const Hapi = require('hapi');
const axios = require('axios');
const config = require('./config');

const server = new Hapi.Server();

function handleGetForecast(request, reply) {
  const { latitude, longitude } = request.query;
  axios
    .get(`${config.owmUrl}?lat=${latitude}&lon=${longitude}&units=${config.units}&appid=${config.owmApiKey}`)
    .then(response => {
      const { list, city } = response.data;
      // const days = {};
      // let i = 5;
      // while (list.length > 0) {
      //   days[i] = list.splice(-8);
      //   i--;
      // }
      reply({ forecast: list, city });
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
