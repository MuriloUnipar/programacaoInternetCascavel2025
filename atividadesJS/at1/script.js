const btSomar = document.querySelector("button")

btSomar.addEventListener("click", () => {
  const inputA = document.querySelector(".valueA")
  const inputB = document.querySelector(".valueB")

  let result = Number(inputA.value) + Number(inputB.value)  

  if (isNaN(result)) {
    result = "Valor Digitado Inválido!"
  } 

  const spanResult = document.querySelector("span")
  spanResult.textContent = result
})
