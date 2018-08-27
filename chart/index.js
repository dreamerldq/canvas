const canvas = document.getElementById('canvas')
const img = new Image();
img.src="./ldq.png"
img.onload = () =>{
  var pat1 = ctx.createPattern(img, 'repeat');
}
const c = canvas.getContent('2d')

ctx.fillStyle = pat1;
ctx.fillRect(0, 0, 100, 100);

var pat2 = ctx.createPattern(img, 'repeat-y');
ctx.fillStyle = pat2;
ctx.translate(200, 0);
ctx.fillRect(0, 0, 100, 100);   