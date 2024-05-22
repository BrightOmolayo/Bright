// eslint-disable-next-line no-unused-vars
// function dropdown () {
//   const kebabContent = document.getElementById('linksAndSwitchIcon')

//   if (kebabContent.style.display === 'none') {
//     kebabContent.style.display = 'block'
//   } else {
//     kebabContent.style.display = 'none'
//   }
// }

const kebabIcon = document.getElementById('kebabIcon')
kebabIcon.addEventListener('click', function () {
  const kebabContent = document.getElementById('linksAndSwitchIcon')

  if (kebabContent.style.display === 'none') {
    kebabContent.style.display = 'inline-block'
  } else {
    kebabContent.style.display = 'none'
  }
})
