'use strict'

// Event Listener

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// Enter the HTML elements and attach an event (click/submit/mouseover) that the
// Event Handler (events.js) needs to function

$(() => {
  // User
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Games
  $('#start-game').on('click', gameEvents.onStartGame)
  $('.square').on('click', gameEvents.onPlayGame)
  $('#index-games').on('click', gameEvents.onGetGames)
})
