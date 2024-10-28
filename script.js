function toggleActive() {
  const image = document.getElementById("boneco");
  image.classList.toggle("active"); 

  const tirar = document.getElementById("aranha");
  tirar.classList.toggle("active");

  const tirarButton = document.getElementById("esquerda");
  tirarButton.classList.toggle("active");

  const sumirButton = document.getElementById("direita");
  sumirButton.classList.toggle("active");
}