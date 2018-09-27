window.onload = function(){
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
  const myAudio = document.getElementById('my_audio') // 获取audio资源
  var analyser = audioCtx.createAnalyser(); // 创建一个AnalyserNode 节点

  var source = audioCtx.createMediaElementSource(myAudio); // 关联声源
  
  var gainNode = audioCtx.createGain();
  source.connect(analyser); // 将AnalyserNode节点连接到声源
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  analyser.fftSize = 256; // AnalyserNode 将在一个特定的频率域里使用Fast Fourier Transform (FFT) )来捕获音频数据，这取决于你给 AnalyserNode.fftSize 属性赋的值（如果没有赋值，默认值为2048）。
  var bufferLength = analyser.fftSize
  var dataArray = new Uint8Array(bufferLength);
  // setInterval(()=>{
  //   analyser.getByteTimeDomainData(dataArray); // 要正确检索数据并把它复制到我们的数组里，就要调用我们想要的数据收集方法，把数组作为参数传递给它
  //   console.log(dataArray)
  // },1000)
  const canvas = document.getElementById('my_canvas')
  const  canvasCtx = canvas.getContext("2d");
  console.log(111, canvasCtx)
  const WIDTH = canvasCtx.canvas.width;
  const HEIGHT = canvasCtx.canvas.height;
  console.log("AAAA", WIDTH, HEIGHT)
  
  

  function draw() {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    drawVisual = requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };
  draw();
}

function setGainNode(){
  let value = 0
   const timer =  setInterval(()=>{
    value += 0.1
     if(value >=1){
       clearInterval(timer)
     }
    gainNode.gain.value = value
    console.log("声音大小", gainNode.gain.value)
  },1000)
  gainNode.gain.valeu = 1
}