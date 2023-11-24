const input = document.querySelector('input');
const preview = document.querySelector('img');

input.onchange = () => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    console.log(e.target)
    const base64 = reader.result;
    console.log(base64)
    preview.src = base64;
    // ! TODO 上传服务器
  }
  reader.readAsDataURL(file);
}