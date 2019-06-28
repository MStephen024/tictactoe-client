'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// require store
// use store to set up 'player value' = x or o
// set event.target.text to the player value
// function that switches player depending on X or O

// leads into if/else for empty space to not have same value on same space
const onGridChoice = event => {
  // const player = event.target.text()

  event.preventDefault()

  store.player = 'X'
  store.gameMove = 0

  console.log(event.target)
}

module.exports = {
  onGridChoice
}
