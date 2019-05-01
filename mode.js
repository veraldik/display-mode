if (window.localStorage.getItem('theme') === 'dark') {
  document.getElementById('lightcss').disabled = true
}
document.getElementById('theme').addEventListener('click', function () {
  var light = document.getElementById('lightcss')
  if (light.disabled === true) {
    light.disabled = false
    window.localStorage.removeItem('theme')
  } else {
    light.disabled = true
    window.localStorage.setItem('theme', 'dark')
  }
})
