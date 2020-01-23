const sections = document.querySelectorAll('section')
const marcador = document.querySelector('.marcador')
const colors = [
  '#00bfff',
  '#ff1493',
  '#b22222'
]

const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(cb, options)

function cb(entries) {
  entries.forEach(entry => {
    const className = entry.target.className
    console.log(className)
    const activeLink = document.querySelector(`[data-page=${className}]`)
    const colorIndex = entry.target.getAttribute('data-index')

    const coords = activeLink.getBoundingClientRect()
    console.log(coords)
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    }

    if (entry.isIntersecting) {
      marcador.style.setProperty('left', `${directions.left}px`)
      marcador.style.setProperty('top', `${directions.top}px`)
      marcador.style.setProperty('width', `${directions.width}px`)
      marcador.style.setProperty('height', `${directions.height}px`)
      marcador.style.background = colors[colorIndex]
    }
  })
}

sections.forEach(section => {
  observer.observe(section)
})