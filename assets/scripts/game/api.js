'use strict'

const config = require('../config')
const store = require('../store')

const gridChoice = event => {
  return event
}

// formData change to something that relates to gameActions? changed to gameData

const gameActions = gameData => {
  return $.ajax({
    url: config.apiUrl + '/games[?over=]',
    data: gameData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const startGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startGame,
  gridChoice,
  gameActions
}
