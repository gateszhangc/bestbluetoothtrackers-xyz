const drawBrandMark = (canvas, size = 128) => {
  if (!canvas) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = size * ratio;
  canvas.height = size * ratio;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const gradient = ctx.createLinearGradient(12, 12, size - 10, size - 6);
  gradient.addColorStop(0, "#276ef1");
  gradient.addColorStop(0.52, "#006c67");
  gradient.addColorStop(1, "#f6b64c");

  ctx.fillStyle = "#f7f7f2";
  ctx.beginPath();
  ctx.roundRect(4, 4, size - 8, size - 8, 26);
  ctx.fill();

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.31, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = size * 0.055;
  ctx.strokeStyle = "rgba(0, 108, 103, 0.28)";
  [0.46, 0.62, 0.78].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * radius, -0.82, 0.82);
    ctx.stroke();
  });

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(size * 0.41, size * 0.39, size * 0.075, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#162124";
  ctx.font = `900 ${size * 0.2}px Inter, system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("BT", size / 2, size * 0.55);
};

drawBrandMark(document.getElementById("brandLogo"), 44);

const faviconCanvas = document.createElement("canvas");
drawBrandMark(faviconCanvas, 128);
const faviconLink = document.querySelector("link[rel='icon']");
if (faviconLink && faviconCanvas.toDataURL) {
  faviconLink.href = faviconCanvas.toDataURL("image/png");
  faviconLink.type = "image/png";
}
