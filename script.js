function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //img.setAttribute("alt")
    //se tiver light mode, adicionar a imagem light
    //img.setAttribute("src", "./assets/eu-escuro.jpg")
  } else {
    //se tiver sem o light mode, manter imagem normal
    //img.setAttribute("src", "./assets/EU2.jpg")
  }
}
