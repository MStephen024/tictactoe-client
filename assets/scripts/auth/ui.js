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

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('You failed to sign up')
}

const signInSuccessful = responseData => {
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#index-games').removeClass('hide')
  $('#start-game').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  successMessage('You signed in successfully')
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const signOutSuccessful = () => {
  successMessage('You signed out successfully')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-out').addClass('hide')
  $('#change-password').addClass('hide')
  $('#index-games').addClass('hide')
  $('#start-game').addClass('hide')
  store.user = null
}

const signOutFailure = () => {
  failureMessage('Failed to sign out')
}

const changePasswordSuccessful = responseData => {
  successMessage('Successfully changed password!')
}

const changePasswordFailure = () => {
  failureMessage('Password not changed')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordSuccessful,
  changePasswordFailure
}
