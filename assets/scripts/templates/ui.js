'use strict'

const store = require('../store')

const successMessage = message => {
  // we select a message element $('#message'), then changes its text
  $('#message').text(message)

  // change the styling of our message, remove *possible* previous failure
  // styling (red), and replace it with success styling (success)
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

// a method that is ran whenever our API request is successful
// it takes `responseData` so we can display information we got back
// from the API
const createExampleSuccessful = responseData => {
  // successMessage('You have created an example successfully')

  // call our `successMessage` helper function, and display that we created
  // an example. And show that example's text (responseData.example.text)
  successMessage(`Created: ${responseData.example.text}`)
}

// a method that is ran whenever our API request fails
const createExampleFailure = () => {
  failureMessage('Failed to create and example')
}

module.exports = {
  // We only export the functions that another files needs
  // Since no other file needs successMessage or failureMessage
  // we dont export them
  createExampleFailure,
  createExampleSuccessful
}
