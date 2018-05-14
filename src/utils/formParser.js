// Parses the value from a form and assigns it the form field
export default (event) => {
  let result = null

  if (!event) {
    return result
  }
  if (event.value && event.label) {
    result = event.value
  } else if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    if (event.target.type === 'file') {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        if (event.target.files < 1) reject(new Error('Canceled'))
        let file = event.target.files[0]

        reader.onloadend = () => {
          resolve(file)
        }
        reader.readAsDataURL(file)
      })
    } else if (event.target.type !== 'checkbox') {
      result = event.target.value
    } else {
      if (isFunction(event.target.getAttribute)) {
        result = !event.target.getAttribute('checked')
      }
    }
  } else if (isFunction(event.target.getAttribute)) {
    let target = event.target
    if (event.target.tagName === 'IMG' || event.target.tagName === 'TEXT') {
      target = event.target.parentElement
    }
    result = target.getAttribute('mode')
  }

  return result
}

function isFunction (functionToCheck) {
  let getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}
