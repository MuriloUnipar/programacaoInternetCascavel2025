const meuh1 = document.querySelector("h1")
const meuInput = document.querySelector(".meuInput")
const meuBT = document.querySelector("button")

meuBT.addEventListener("click", (e) => {
  meuh1.innerText = meuInput.value
})

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault())
