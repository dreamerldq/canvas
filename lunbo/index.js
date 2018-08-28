
addEventListener('load', () => {
  const wrap = document.getElementById('wrap');
  let timer;
  const container = document.getElementById('container');
  const dotGroup = document.getElementsByClassName('dotGroup')[0];
  const leftArr = document.querySelector('.leftArr');
  const rightArr = document.querySelector('.rightArr');
  rightArr.addEventListener('click', () => {
    const left =  parseInt(wrap.style.left);
    wrap.style.left = left - 400 + 'px'
    if(left === -1200){
      wrap.style.left = 0 + 'px'
    }
  })
  leftArr.addEventListener('click', () => {
    const left =  parseInt(wrap.style.left);
    wrap.style.left = left + 400 + 'px'
    if(left === 0){
      wrap.style.left = -1200 + 'px'
    }
  })
  dotGroup.addEventListener('click', (e) => {
    const { id } = e.target.dataset
    wrap.style.left = `-${id*400}px`
  })
  for(let i = 0; i < 4; i++){
    const dot = document.createElement('li');
    dot.className = 'dot'
    dot.setAttribute('data-id', i)
    dotGroup.appendChild(dot)
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = i + 1;
    wrap.appendChild(box)
  }
  const createTimer = () => {
    return setInterval(() =>{
    let left = parseInt(wrap.style.left, 10)
    if(parseInt(wrap.style.left, 10) <=-1200){
      wrap.style.left = 0 + 'px'
    }else{
      left -= 400
    wrap.style.left = left + 'px'
    }
  },2000)
  }
  timer = createTimer()
  container.addEventListener('mouseover', () =>{
    clearInterval(timer)
  })
  container.addEventListener('mouseleave', () =>{
    timer = createTimer()
  })
})