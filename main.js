const gridCanvas = document.querySelector("#gridCanvas");

let pixelCount = 8;

function createCanvas(pixelSize = pixelCount) {
  for (row = 0; row < pixelSize; row++) {
    for (col = 0; col < pixelSize; col++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      gridCanvas.style.setProperty(
        "grid-template-columns",
        `repeat(${pixelSize}, 1fr)`
      );
      gridCanvas.style.setProperty(
        "grid-template-rows",
        `repeat(${pixelSize}, 1fr)`
      );

      gridCanvas.appendChild(pixel);
    }
  }
}

createCanvas(pixelCount);
