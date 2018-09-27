window.onload = function(){
  const svg = document.getElementById('my_canvas')
  const width = svg.width
  const height = svg.height
  const data = Array(20).fill(null)
  data.forEach((key,index) => {
    data[index] = Math.ceil(Math.random()*100)
  });
  for(let i = 0 ; i <= 5; i++){
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', `M50 ${60 * i + 10} H 1000`)
    path.setAttribute('fill',"transparent")
    path.setAttribute('stroke', 'rgba(0,0,0,0.3)')
    svg.appendChild(path)
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('x', "0")
    text.setAttribute('y', `${60 * i + 10}`)
    text.innerHTML = `${100 - i * 20}`
    text.setAttribute('fill', 'rgba(0,0,0,0.3)')
    text.setAttribute('alignment-baseline', "middle")
    svg.appendChild(text)
  }
  console.log(data)
  const zhexian = []
  data.forEach((value, key) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    const x = key * 50 + 50
    const y = 310 - value * 3
    zhexian.push([x,y])
    circle.setAttribute('cx', `${x}`)
    circle.setAttribute('cy', `${y}`)
    circle.setAttribute('r', '5')
    circle.setAttribute('fill', 'red')
    svg.appendChild(circle)
  })
  const zhexianEle = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  const zhexianStr = zhexian.map((value,key) =>{
    return `L ${value[0]} ${value[1]}`
  }).join(' ')
  console.log("WWWW", zhexianStr)
  zhexianEle.setAttribute('d', `M${zhexian[0][0]} ${zhexian[0][1]} ${zhexianStr}`)
  zhexianEle.setAttribute('fill',"transparent")
  zhexianEle.setAttribute('stroke', 'rgb(192, 192, 192)')
  zhexianEle.setAttribute('stroke-linejoin', 'round')
  zhexianEle.setAttribute('visibility','visble')
  svg.appendChild(zhexianEle)
  const infoRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  const infoText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
  const infoG = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  infoG.appendChild(infoRect)
  infoG.appendChild(infoText)
  
  infoRect.setAttribute('x', 30)
  infoRect.setAttribute('y', 0)
  infoRect.setAttribute('width', 100)
  infoRect.setAttribute('height', 50)
  infoRect.setAttribute('fill', 'blue')
  svg.appendChild(infoG)
  const infoWidth = infoG.width
  const infoHeight = infoG.height
  svg.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const x_th = Math.floor((x) / 50)
    if(x_th >=20){
      x_th = 20
    }
    if(x_th <= 0){
      x_th = 0
    }
    console.log("xxx", x_th)
    infoRect.setAttribute('transform', `translate(${zhexian[x_th - 1][0]},${zhexian[x_th-1][1]})`)
    infoText.setAttribute('x', `${zhexian[x_th - 1][0] + 40}`)
    infoText.setAttribute('y', `${zhexian[x_th-1][1] + 25}`)
    infoText.innerHTML = `x:${zhexian[x_th - 1][0]} y:${zhexian[x_th-1][1]}`
    infoText.setAttribute('fill', 'red')
    infoText.setAttribute('alignment-baseline', "middle")
  })
}