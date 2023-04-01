const inputFileEl = document.getElementById("userimage");
const imagePreviewEl = document.getElementById("image-preview");

inputFileEl.addEventListener("change", function() {
  const files = inputFileEl.files;
  if (!files || files.length === 0) {
    imagePreviewEl.style.display = "none";
    return;
  }

  const file = files[0];
  imagePreviewEl.src = URL.createObjectURL(file); // 파일 경로
  imagePreviewEl.style.display = "block";
})