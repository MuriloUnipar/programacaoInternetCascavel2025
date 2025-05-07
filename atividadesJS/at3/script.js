const btReajustar = document.querySelector("button")

btReajustar.addEventListener("click", () => {
  const input = document.querySelector("input")
  const result = Number(input.value) + Number(input.value) * 0.01
  if (isNaN(result)) {
    result = "Valor digitado invalido"
  }

  const spanResult = document.querySelector("span")
  spanResult.textContent = result
})
