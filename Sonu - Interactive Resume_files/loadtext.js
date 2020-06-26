let letters = "Hello".split('');
const colToHex = (c) => {
  let color = (c < 75) ? c + 75 : c
  let hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (r,g,b) => {
  return "#" + colToHex(r) + colToHex(g) + colToHex(b);
}
const getRandomColor = () => {
  return rgbToHex(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255));
}
Array.prototype.randomColor = function() {
  let html = '';
  this.map( (letter) => {
    let color = getRandomColor();
    html +=
      "<span style=\"color:" + color + "\">"
      + letter +
      "</span>";
  }) 
  return html;
};
document.body.innerHTML = letters.randomColor();