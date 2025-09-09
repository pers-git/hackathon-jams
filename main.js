const likeliness = Object.freeze({
  VERY_UNLIKELY: "VERY_UNLIKELY",
  UNLIKELY: "UNLIKELY",
  LIKELY: "LIKELY",
  VERY_LIKELY: "VERY_LIKELY"
});
var rating = likeliness.LIKELY;
const myResult = document.getElementById("likeliness-result");
myResult.textContent = rating;


function upload() { 
  const cancel = document.getElementById('cancel');
  const confirm = document.getElementById('confirm');
  const image = document.getElementById('image');

  image.style.visibility = "visible";
  cancel.style.visibility = "visible";
  confirm.style.visibility = "visible";
}

function cancel_upload() {
  const cancel = document.getElementById('cancel');
  const confirm = document.getElementById('confirm');
  const image = document.getElementById('image');  
  image.style.visibility = "hidden";
  cancel.style.visibility = "hidden";
  confirm.style.visibility = "hidden";
}
