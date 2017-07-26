const btn = document.querySelector('.button')

btn.addEventListener('click', loadContent)
function loadContent() {
  fetch('fetch.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem: ' + response.status)
        return
      }
      response.json()
      .then(function (data) {
        var newContent = ''
        for(var i = 0; i < data.cars.length; i++){
          newContent += '<div>'
          newContent += '<img src="' + data.cars[i].image +'"'
          newContent += 'alt="' + data.cars[i].model + '">'
          newContent += '<p><strong>' + data.cars[i].model +'</strong><br>'
          newContent += data.cars[i].year + '<br>'
          newContent += '<span>' + data.cars[i].make + '</span></p>'
          newContent += '</div>'
        }
        document.querySelector('#content').innerHTML = newContent
      })
    }
  )
  .catch( function (err) {
    console.log('Fetch Error: ' + err)
  })
}
