'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // Clear out our forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // Clear out our forms
  $('form').trigger('reset')
}

const clickSuccess = response => {
  const square = response.target
  $(square).text(store.player)
  if (store.gameOver === true) {
    announceWinner()
  } else if (store.gameTurn === 9 && store.gameOver === false) {
    drawGame()
  } else {
    nextTurn()
  }
  console.log(store.cells)
}

const wrongInput = () => {
  failureMessage('Choose an empty square. This square already contains an input')
}

const showBoard = function (response) {
  $('#board').removeClass('hide')
  store.game = response.game
}

const announceWinner = () => {
  successMessage(`Winner is player ${store.player}!`)
}

const nextTurn = () => {
  $('#message').text(`Next move`)

  // Clear out our forms
  $('form').trigger('reset')
}

const drawGame = () => {
  $('#message').text(`It's a draw!`)
}

module.exports = {
  clickSuccess,
  wrongInput,
  showBoard,
  announceWinner,
  nextTurn,
  drawGame
}
