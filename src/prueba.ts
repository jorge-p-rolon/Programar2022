function dibujarLinea() {
  let guion: string = "-";
  for (let cont: number = 0; cont <= 5; cont++) {
    guion = guion + guion;
  }
  console.log(guion);
}
