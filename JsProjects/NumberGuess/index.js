const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuess = document.querySelector('.all-guess')
const submitBtn = document.querySelector('.submit-btn')
const userInput = document.querySelector('.user-input')
const startGameBtn = document.querySelector('.start-game')

function a() {
	const allGuessArray = []
	let randomNumber = Math.round(Math.random() * 100)
	form.addEventListener('submit', (e) => {
		e.preventDefault() // isse page refersh nhi hota hai submit krne pe
		const userInputValue = parseInt(userInput.value)
		if (userInputValue < randomNumber) {
			result.innerText = "To Low"
		} else if (userInputValue > randomNumber) {
			result.innerText = "To High"
		} else {
			result.innerText = `Congrats!.. Your perfect number is: ${userInputValue}`
			startGameBtn.disabled = false
			submitBtn.disabled = true
		}
		allGuessArray.push(userInputValue)
		allGuess.innerText = "Your Guesses: " + allGuessArray.join(', ')
		form.reset()
	})
	startGameBtn.addEventListener('click', () => {
		allGuess.innerText = ''
		result.innerText = ''
		submitBtn.disabled = false
		startGameBtn.disabled = true
		randomNumber = Math.round(Math.random() * 100)
	})
}
a()