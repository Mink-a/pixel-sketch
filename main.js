const gridCanvas = document.querySelector("#gridCanvas");
const color = document.getElementById("myColor");
const clear = document.getElementById("clear");
const gridPixelSize = document.getElementById("gridPixelSize");
const showPixel = document.getElementById("showPixel");

let pixelCount = 8;

function createCanvas(pixelSize = pixelCount) {
  for (row = 0; row < pixelSize; row++) {
    for (col = 0; col < pixelSize; col++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");

      pixel.addEventListener("mousemove", () =>
        pixel.style.setProperty("background", color.value)
      );

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

// clear canvas to draw new things.

function clearCanvas() {
  gridCanvas.innerHTML = "";
  createCanvas(pixelCount);
}

clear.addEventListener("click", clearCanvas);

gridPixelSize.addEventListener("mouseup", function () {
  pixelCount = this.value;
  gridCanvas.innerHTML = "";
  showPixel.textContent = `${this.value} X ${this.value}`;
  createCanvas(pixelCount);
});
