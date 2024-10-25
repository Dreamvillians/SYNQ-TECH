let zoomLevel = 1;

function zoomImage(zoomFactor) {
  zoomLevel += zoomFactor;
  document.getElementById('profileImage').style.transform = `scale(${zoomLevel})`;
}

document.getElementById('uploadInput').addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById('profileImage').src = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});
