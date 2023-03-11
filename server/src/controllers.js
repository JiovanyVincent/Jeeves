const getHome = (req, res) => {
  res.sendFile(__dirname + '../../chatbot/index.html');
}

module.exports = {
  getHome
}