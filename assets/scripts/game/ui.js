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

// const hideMessaging = () => {
//   setTimeout(function () {
//     $('#message').text('')
//     $('#message').hide()
//   }, 5000)
// }

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
}

const indexGamesSuccess = data => {
  successMessage('You have played a total of ' + data.games.length + ' games.')
  // data.games.forEach(function (game) {
  // const gameHtml = (`
  //   <p>ID: ${game.id}</p>
  //   <p>Games Played: ${}</p>
  //   <br>
  // `) // string interpolation
  // $('#games-display').append(gameHtml)
  // $('#message').text('You did it! Niceeee!')
  // $('#message').css('color', 'green')
  // $('#message').show()
  // hideMessaging()
  // })
}

const indexGamesFailure = error => {
  console.log('index games failure', error)
  $('#message').text('Index Games Failure!! Try again...')
  $('#message').css('color', 'red')
  $('#message').show()
  // hideMessaging()
}

const wrongInput = () => {
  failureMessage('Choose an empty square. This square already contains an input')
}

const showBoard = response => {
  $('#board').removeClass('hide-board')
  $('#replay').removeClass('hide')
  store.game = response.game
  $('.square').text('')
}

const announceWinner = () => {
  successMessage(`Winner is player ${store.player}!`)
}

const nextTurn = () => {
  $('#message').text(`Next move`)
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
  drawGame,
  indexGamesSuccess,
  indexGamesFailure
}
