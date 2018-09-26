window.onload = function(){
  const data = Array(20).fill(null)
  data.forEach((key,index) => {
    data[index] = Math.ceil(Math.random()*100)
  });
  console.log(data)
  const canvas = document.getElementById('myCanvas')
  canvas.addEventListener('mousemove', (event) =>{
    
    const x = event.clientX
    const y = event.clientY
    // showInfo(x,y, context)
  })
  const showInfo = (x,y,ctx) => {
    // ctx.clearRect(x,y, 100,50)
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.fillRect(x,y, 100, 50)
  }
  const width = canvas.width
  const height = canvas.height
  const context = canvas.getContext('2d')
  console.log(width)
  console.log(height)
  context.moveTo(60,50)
  context.strokeStyle = "gray";
  for(let i = 0; i<= 5; i++){
    // context.lineTo(0, i * 30)
    context.font = '24px serif';
    context.textBaseline = 'middle'
    context.fillText(`${100 - i*20}`, 20, i*60 +50)
    context.lineTo(width,i*60 + 50)
    context.moveTo(60, (i+1) * 60 + 50)
    context.stroke()
  }
  context.beginPath()
  
  context.moveTo(60,350)
  context.lineTo(width,350)
  context.lineWidth = 5;
  context.stroke()
  context.textBaseline = 'top'
  context.font = '12px serif';
  for(let i = 0; i<=5; i++){
    context.fillText(`9-25${i+1}`, 100 + i * 200, 350)
  }
  for(let i = 0; i<= data.length; i++){
    context.beginPath()
    
    context.arc(100 + i * 50, 350 - data[i]*3, 5, 2* Math.PI, false)
    context.fillStyle = 'red'
    context.fill()
  }
  context.moveTo(100, 350 - data[0]*3)
  context.lineWidth = 1;
  for(let i = 0; i<=data.length; i++){
    context.lineTo(100 + i * 50, 350 - data[i]*3)
    context.strokeStyle = 'blue'
    context.stroke()
  }
  // context.beginPath()
  // context.moveTo(100, 350)
  // for(let i = 0; i<=data.length; i++){
  //   context.lineTo(100 + i * 50, 350 - data[i]*3)
  // }
  // context.fillStyle = 'pink'
  //   context.fill()  // 填充区域
}