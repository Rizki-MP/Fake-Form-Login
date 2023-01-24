const button = document.getElementById('login')


const warning = document.querySelector('#container #warning')
const form = document.querySelector('#container form')

console.log(button)
warning.style.display = "none"

button.addEventListener("click", () => {
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value

	localStorage.setItem("username", username)
	localStorage.setItem("password", password)

	console.log(username)
})

if (localStorage.getItem("username") && localStorage.getItem("password")) {
	form.style.display = "none"
	warning.style.display = "block"
}