'use strict'

const config = require('../config')
const store = require('../store')

const gridChoice = event => {
  return event
}

const checkUserGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGames = data => {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.index,
          'value': store.player
        },
        'over': store.gameOver
      }
    }
  })
}

module.exports = {
  checkUserGames,
  createGame,
  showGames,
  updateGame,
  gridChoice
}
