const svgJs = document.querySelector('.svg-js')
const r = parseInt(svgJs.getAttribute('r'), 10)
const percent = 30

let timer: any

const dasharray = (2 * Math.PI * r) / (100 / percent) + ' ' + (2 * Math.PI * r) / (100 / (100 - percent))
const dashoffset = (2 * Math.PI * r) / (100 / 25) - (2 * Math.PI * r) / (100 / 70)

svgJs.setAttribute('fill', 'transparent')
svgJs.setAttribute('stroke', 'rgb(75, 192, 192)')
svgJs.setAttribute('stroke-width', '15')
svgJs.setAttribute('stroke-dasharray', dasharray)
svgJs.setAttribute('stroke-dashoffset', dashoffset.toString())

svgJs.addEventListener('mouseenter', function() {
  setStroke(20)
})

svgJs.addEventListener('mouseleave', function() {
  setStroke(15)
})

function setStroke(width: number): void {
  let strokeWidth = parseFloat(svgJs.getAttribute('stroke-width'))

  if (width > strokeWidth) {
    timer = setInterval(() => {
      if (width > strokeWidth) {
        strokeWidth += 0.2
        svgJs.setAttribute('stroke-width', strokeWidth.toString())
      } else {
        clearInterval(timer)
      }
    }, 10)
  } else if (width < strokeWidth) {
    timer = setInterval(() => {
      if (width < strokeWidth) {
        strokeWidth -= 0.2
        svgJs.setAttribute('stroke-width', strokeWidth.toString())
      } else {
        clearInterval(timer)
      }
    }, 10)
  }
}
