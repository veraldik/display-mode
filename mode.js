var buttonElement = document.getElementById('toggle')

buttonElement.addEventListener('click', function () {
  var theme = window.localStorage.getItem('theme')
  if (theme === null || theme === 'day-theme') {
    document.body.setAttribute('class', 'night-theme')
    window.localStorage.setItem('theme', 'night-theme')
  } else {
    document.body.setAttribute('class', 'day-theme')
    window.localStorage.setItem('theme', 'day-theme')
  }
})

var theme = window.localStorage.getItem('theme')
if (theme === null) {
  document.body.setAttribute('class', 'night-theme')
} else {
  document.body.setAttribute('class', theme)
}
var count = window.localStorage.getItem('tracker')
if (count === null) {
  count = 0
}
count++
window.localStorage.setItem('tracker', count)
window.alert('You have visited this page ' + count + ' times!')
