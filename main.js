// eslint-disable-next-line no-unused-vars
function toggleSwitch () {
  document.body.classList.toggle('switch')
}
// eslint-disable-next-line no-unused-vars
function dropdown () {
  const container = document.querySelector('.dropdown')
  const content = document.querySelector('.nav-content-for-mobilenav-links-and-switch-button')
  container.classList.toggle('active')
  content.classList.toggle('active')
  if (content.style.display === 'none') {
    content.style.display = 'block'
  } else {
    content.style.display = 'none'
  }
}
