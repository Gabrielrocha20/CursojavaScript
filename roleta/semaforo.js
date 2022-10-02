const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;
let i = 0
let random = 0
const trafficLight = ( event ) => {
    random = Math.floor(Math.random() * (10 - 7) + 7)
    stopAutomatic();
    turnOn[event.target.id]();
    
}
const startRandom = ( event ) => {
    random = Math.floor(Math.random() * (10 - 7) + 7)
    stopAutomatic();
    turnOn[event]();
    
}
const stopRandom = ( cor ) => {
    stopAutomatic();
    turnOn[cor]();
    setTimeout(startRandom('automatic'), 1000)
    
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
    i ++
    
    console.log(i)
    console.log(random)
    if (i == random){
        i = 0
        return stopRandom(color)
    }
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 25 )
}

buttons.addEventListener('click', trafficLight );