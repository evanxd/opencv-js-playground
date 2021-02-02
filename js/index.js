(() => {
  const controlPanel = document.querySelector('#control-panel')
  const fileUploader = document.querySelector('#file-uploader')
  const image = document.querySelector('#image')

  fileUploader.addEventListener('change', e => {
    image.src = URL.createObjectURL(e.target.files[0])
  }, false)

  image.onload = () => {
    const input = cv.imread(image)
    const result = new cv.Mat()
    cv.cvtColor(input, input, cv.COLOR_RGB2GRAY, 0)
    cv.Canny(input, result, 70, 180, 3, false)
    cv.imshow('canvas', result)
    result.delete()
    input.delete()
  }

  window.onOpenCvReady = () => {
    document.querySelector('#message').remove()
    controlPanel.removeAttribute('hidden')
  }
})()
