class Hua{
  constructor(data = []){
    this.data = data;
    this.vituralArr = [];
    this.preStateArr = [];
    this.compareArr = []
    this.babel(data);
    this.animation();
    this.ctx = document.getElementById('my_canvas').getContext('2d')

  }
  babel(data){
    const max = data.length - 1
    this.vituralArr.push(data.slice())
    for(let i = 0 ; i< max; i++){
      for(let j = 0; j< max - i; j++){
        if(data[j] > data[j+1]){
          [data[j], data[j+1]] = [data[j+1], data[j]]
        }
        this.vituralArr.push(data.slice())
        this.compareArr.push([j,j+1])
      }
    }
  }
  draw(data, compare){
    const finalData = data.map((item, index) => {
      if(index === compare[0] || index === compare[1]){
        return {value: item , color: true}
      }else{
        return {value: item , color: false}
      }
    })
    const { ctx } = this
    const { width, height } = ctx.canvas;
    const kuan = 20;
    const block = 50;
    ctx.clearRect(0,0, width, height);
    finalData.forEach((item, index) => {
      if(item.color){
        ctx.fillStyle = 'red'
      }else{
        ctx.fillStyle = 'black'
      }
        ctx.fillRect(block * index, height - item.value, kuan, item.value )
    });
  }
  animation(){
    const interval = 2000;
    let index = 0;
    const max = this.vituralArr.length; 
    const timer = setInterval(() =>{
      if(index >= max){
        clearInterval(timer)
      }else{
        this.draw(this.vituralArr[index], this.compareArr[index])
      index++
      }
      
    }, interval)
  }
}
addEventListener('load', () =>{
    new Hua([100,90,80,70,60,50,40,30,20,10])
})