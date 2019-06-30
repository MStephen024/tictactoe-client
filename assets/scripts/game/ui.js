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
  console.log(store.cells)
}

const wrongInput = () => {
  failureMessage('Block already has an input')
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

module.exports = {
  clickSuccess,
  wrongInput,
  showBoard,
  announceWinner,
  nextTurn
}
