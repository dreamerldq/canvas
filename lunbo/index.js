
addEventListener('load', () => {
  const wrap = document.getElementById('wrap');
  let timer;
  const container = document.getElementById('container');
  const dotGroup = document.getElementsByClassName('dotGroup')[0];
  const leftArr = document.querySelector('.leftArr');
  const rightArr = document.querySelector('.rightArr');
  const addTransition = () => {
    wrap.style.transition = '0.5s left'
  }
  const removeTransition = () => {
    wrap.style.transition = 'none'
  }
  rightArr.addEventListener('click', () => {
    //console.log("AAAA")
   //let currentLeft = -400
   let left =  parseInt(wrap.style.left) - 400;
   wrap.style.left = left + 'px'
   if(left == -2000){
       removeTransition()
       wrap.style.left = -400 + 'px'
       left = -400
      if(left == -400){
        removeTransition()
        console.log(wrap.style.left)
        wrap.style.left = -800 + 'px'
        addTransition()
      }
      
  }else{
    addTransition()
  }
    // const timer = setInterval(() => {
    //   if(timeCount >= 2000){
    //     clearInterval(timer)
    //   }
    //   const left =  parseInt(wrap.style.left);
    //     wrap.style.left = left - 4 +'px'
    //     currentLeft -= 4
    //     timeCount += 20
    // },20)
  })




  // leftArr.addEventListener('click', () => {
  //   const left =  parseInt(wrap.style.left);
  //   wrap.style.left = left + 400 + 'px'
  //   if(left === 0){
  //     removeTransition()
  //     wrap.style.left = -1600 + 'px'
  //     addTransition()
  //   }
  // })
  dotGroup.addEventListener('click', (e) => {
    const { id } = e.target.dataset
    wrap.style.left = `-${id*400}px`
  })
  // for(let i = 0; i < 6; i++){
  //   const box = document.createElement('div');
  //   box.className = 'box';
  //   box.innerText = i;
  //   wrap.appendChild(box)
  // }
  for(let i = 0; i < 3; i++){
    const dot = document.createElement('li');
    dot.className = 'dot'
    dot.setAttribute('data-id', i)
    dotGroup.appendChild(dot)
  }
  // const createTimer = () => {
  //   return setInterval(() =>{
  //   let left = parseInt(wrap.style.left, 10)
  //   if(parseInt(wrap.style.left, 10) <=-1600){
  //     removeTransition()
  //     wrap.style.left = -400 + 'px' 
  //   }else{
  //     addTransition()
  //     left -= 400
  //   wrap.style.left = left + 'px'
  //   }
  // },2000)
  // }
  // timer = createTimer()
  // container.addEventListener('mouseover', () =>{
  //   clearInterval(timer)
  // })
  // container.addEventListener('mouseleave', () =>{
  //   timer = createTimer()
  // })
})