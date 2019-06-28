'use strict'

const authEvents = require('./game/events')

$(() => {
  $('.square').on('click', authEvents.onGridChoice)
})
