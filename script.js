// first bring in the elements you need. Note that there are more than one circles so you select all as a nodelist (similar to an array but not!)

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// so that's everything from the DOM that you want selected, selected

// this is like an 'index'??
let currentActive = 1

// add event listeners

// this adds 1 to whatever the curent active is at the time eg. if currently 1 it's going to be 2, if currently -1 it's going to be zero. The if part is because there are 4 circles you don't want the to keep adding 1 for ever, so it sets a max of 4. After these even listeners, we call the function update(), which is below them.
next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

// next the prev. This time are minusing 1. To stop it minusing for ever, the if section makes 1 the minimum. Again call the update() function after.
prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
    currentActive = 1
  }

  update()
})

// the update function. The circles are a node list which acts like an array in some ways, and we can use forEach and an arrow function
function update() {
  circles.forEach((circle, idx) => {
      if(idx < currentActive) {
          circle.classList.add('active')
      } else {
          circle.classList.remove('active')
      }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if(currentActive === 1) {
      prev.disabled = true
  } else if(currentActive === circles.length) {
      next.disabled = true
  } else {
      prev.disabled = false
      next.disabled = false
  }
}

