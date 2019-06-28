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
  console.log('responseData is ', responseData)
  successMessage('You signed in successfully')

  // Keeping track of the user so we can have the token for the API
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const signOutSuccessful = () => {
  successMessage('You signed out successfully')

  // Keeping track of the user so we can have the token for the API
  // we use 'store' so we can access the token in any file
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
