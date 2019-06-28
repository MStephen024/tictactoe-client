'use strict'

const store = require('../store')

const clickSuccess = response => {
  $('#square').text(response)
  return ('It worked!')
}

module.exports = {
  clickSuccess
}
