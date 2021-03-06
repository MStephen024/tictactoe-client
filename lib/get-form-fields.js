'use strict'

const addNestedValue = require('./add-nested-value')

//  Creating function to handle form fields. Takes in the info/attributes from a form field
const getFormFields = (form) => {
  //  Creating an empty object to hold the results of the form field
  const target = {}

  //  Make an 'elements' variable binded to the elements of the form field, or an empty array
  const elements = form.elements || []
  //  Loop through each of the elements of the user's information sent in using the form field
  for (let i = 0; i < elements.length; i++) {
    //  'e' will hold each of the elements at the time of i's value from the loop
    const e = elements[i]
    //  if the 'name' attribute is missing from the form field then it will stop here (b/c a name attribute is required to continue)
    //  but if
    if (!e.hasAttribute('name')) {
      continue
    }

    let type = 'TEXT'
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type
        break
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase()
        break
    }

    const name = e.getAttribute('name')

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addNestedValue(target, name, e[i].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      addNestedValue(target, name, e.value)
    }
  }

  return target
}

module.exports = getFormFields
