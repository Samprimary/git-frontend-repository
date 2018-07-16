'use strict'

const events = require('./events')

$(() => {
  events.addHandlers()

  $('#dropdown-anchor').click('#show-sign-up', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='sign-up-form' class="forms">
        <input name="credentials[email]" type="email" placeholder="Enter Username">
        <input name="credentials[password]" type="password" placeholder="Enter Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit"  class="forms">Sign Up</button>
      </form>`)
    $('#sign-up-form').on('submit', events.onSignUp)
  })

  $('#dropdown-anchor-pw').click('#show-change-password', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='change-password-form' class="forms">
        <input name="passwords[old]" type="password" placeholder="Old Password">
        <input name="passwords[new]" type="password" placeholder="New Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit" class="forms">Change Password</button>
      </form>`)
    $('#change-password-form').on('submit', events.onChangePassword)
  })

  $('#sign-up-field').on('submit', '#change-password-form', events.onChangePassword)
  $('#sign-in-field').on('submit', '#sign-in-form', events.onSignIn)
  $('#sign-in-field').on('submit', '#sign-out-form', events.onSignOut)
})

// HIDE STUFF LIKE MIKE DID
$('#create-raider').hide()
$('#get-raider').hide()
$('#create-raider').on('submit', events.createRaider)
$('#get-raider').on('click', events.indexRaiders)
$('#find-raider').on('submit', events.findRaider)
// STANDARD API CALL
// .. does not work
// $('#create-button').on('submit', '#raider-create-field', events.createRaider)
// $('#find-raider').on('submit', events.findRaider)
// $('#get-button').on('click', '#raider-get-field', events.getRaider)
// // HANDLEBARS TEST
$('#raiders-content').on('click', '.delete-raider', events.deleteRaider)
$('#raiders-content').on('click', '.update-raider-list', events.updateRaiderList)
$('#raiders-content').on('submit', '.update-raider', events.updateRaider)
