function toggleActive() {
  const image = document.getElementById("boneco");
  image.classList.toggle("active"); // Alterna a classe "active" na imagem

  const tirar = document.getElementById("aranha");
  tirar.classList.toggle("active");
}