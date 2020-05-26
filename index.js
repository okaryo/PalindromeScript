const header = document.getElementById('header')
const headerTexts = [
  'No lemon, no melon',
  'しんぶんし',
  'civic',
  'pull up',
  'なかきよの とおのねふりの みなめさめ なみのりふねの おとのよきかな',
  'にわのわに',
  'DVD'
]
const randomNum = Math.floor(Math.random() * headerTexts.length)
header.innerText = headerTexts[randomNum]

const inputForm = document.getElementById('input')
const palindromeDisplay = document.getElementById('palindrome_display')

inputForm.addEventListener('input', (e) => {
  const inputValue = e.target.value
  const palindromeText = inputValue + inputValue.split('').reverse().join('')

  palindromeDisplay.innerText = palindromeText
})
