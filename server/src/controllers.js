const { dirname } = require('path');
const path = require('path');

const getHome = (req, res) => {
  const file = path.join(__dirname, '../client/index.html')
  res.sendFile(file);
}

module.exports = {
  getHome
}