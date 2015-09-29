var popover = null

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.js-popover-trigger').addEventListener('click', function (event) {
    if (popover) {
      popover.close()
      return
    }
    var BrowserWindow = require('remote').require('browser-window')

    var button = event.target
    var windowPosition = BrowserWindow.getFocusedWindow().getPosition()

    var height = 380
    var width = 250
    var x = button.offsetLeft + windowPosition[0] - (width / 2) + (button.offsetWidth / 2)
    var y = button.offsetTop + windowPosition[1] + button.offsetHeight + 5

    popover = new BrowserWindow({
      width: width,
      height: height,
      frame: false,
      resizable: false,
      x: Math.round(x),
      y: Math.round(y)
    })
    popover.loadUrl('file://' + __dirname + '/popover.html')
    popover.focus()
    popover.on('closed', function () {
      popover = null
    })
  })
})
