// Grab DOM elements

const toggle = document.getElementById("toggle")
const signup = document.getElementById("open")
const closes = document.getElementById("close")
const modal = document.getElementById("modal")

// Toogle nav

toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav")
})

// Show modal

signup.addEventListener("click", () => modal.classList.add('show-modal'))

// Hide modal

closes.addEventListener("click", () => modal.classList.remove('show-modal'))

// Hide modal on outside click

window.addEventListener("click", e => e.target == modal ? modal.classList.remove('show-modal') : false)
