'use strict'

// Event Handler
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onStartGame = event => {
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.gameTurn = 0
  api.createGame(event)
    .then(ui.showBoard)
}

const onPlayGame = event => {
  event.preventDefault()
  console.log(event)
  // check if the field is empty if empty continue with game
  const square = event.target
  if (!store.gameOver) {
    if ($(square).text() === '') {
      // store index of empty soon to be filled box
      store.index = $(event.target).attr('id')
      // Determine if we put an X or and O
      if (store.gameTurn % 2 === 0) {
        store.player = 'X'
        store.gameTurn++
      } else {
        store.player = 'O'
        store.gameTurn++
      }
      store.cells[store.index] = store.player
      store.gameOver = checkForWinner()
      api.updateGame(event)
        .then(ui.clickSuccess(event))
    } else {
      $(square).off(event.target)
    }
    console.log(store.gameTurn)
  } else {
    ui.announceWinner()
  }
}

const onGetGames = event => {
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const checkForWinner = () => {
  console.log(store.cells)
  if (
    (store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') ||
    (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O')
  ) {
    return true
  } else if (
    (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') ||
    (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O')
  ) {
    return true
  } else if (
    (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') ||
    (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O')
  ) {
    return true
  } else if (
    (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') ||
    (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O')
  ) {
    return true
  } else if (
    (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') ||
    (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O')
  ) {
    return true
  } else if (
    (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') ||
    (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O')
  ) {
    return true
  } else if (
    (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') ||
    (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O')
  ) {
    return true
  } else if (
    (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') ||
    (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O')
  ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onPlayGame,
  onStartGame,
  checkForWinner,
  onGetGames
}
