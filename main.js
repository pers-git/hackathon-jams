const likeliness = Object.freeze({
  VERY_UNLIKELY: "VERY_UNLIKELY",
  UNLIKELY: "UNLIKELY",
  LIKELY: "LIKELY",
  VERY_LIKELY: "VERY_LIKELY"
});
var rating = likeliness.LIKELY;
const myResult = document.getElementById("likeliness-result");
myResult.textContent = rating;