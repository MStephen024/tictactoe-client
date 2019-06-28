'use strict'

const config = require('../config')
const store = require('../store')

const gridChoice = formData => {
  console.log('It worked?')
}
// explain what and why. info comes from game api but copy/paste. should
// formData change to something that relates to gameActions? changed to gameData
const gameActions = gameData => {
  return $.ajax({
    url: config.apiUrl + '/games[?over=]',
    data: gameData,
    method: 'GET'
  })
}

const createGame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: formData,
    method: 'POST'
  })
}


module.exports = {
  gridChoice,
  gameActions
}
