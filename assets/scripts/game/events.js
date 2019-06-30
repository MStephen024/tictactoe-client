'use strict'

// Event Handler

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// use store to set up 'player value' = x or o
// set event.target.text to the player value
// function that switches player depending on X or O

// leads into if/else for empty space to not have same value on same space

const onStartGame = event => {
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.gameMove = 0
  api.startGame(event)
    .then(ui.showBoard)
}

const onGridChoice = event => {
  event.preventDefault()

  // check if the field is empty if empty continue with game
  const square = event.target
  if ($(square).text() === '') {
    // store index of empty soon to be filled box
    store.index = $(event.target).attr('id')
    // Determine if we put an X or and O
    if (store.gameMove % 2 === 0) {
      store.player = 'X'
      store.gameMove++
    } else {
      store.player = 'O'
      store.gameMove++
    }
    store.cells[store.index] = store.player
    checkForWinner()
    ui.clickSuccess(event)
  } else {
    ui.wrongInput()
  }
}

const checkForWinner = () => {
  console.log(store.cells)
  if (
    (store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') ||
    (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') ||
    (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') ||
    (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') ||
    (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') ||
    (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') ||
    (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') ||
    (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O')
  ) {
    ui.announceWinner()
  } else if (
    (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') ||
    (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O')
  ) {
    ui.announceWinner()
  } else {
    ui.nextTurn()
  }
}

module.exports = {
  onGridChoice,
  onStartGame,
  checkForWinner
}
