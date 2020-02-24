const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const wrapper = document.querySelector('.canvas-wrapper');

console.log()
const scale = 12;

canvas.width = wrapper.offsetWidth;
canvas.height = wrapper.offsetHeight;


canvas.addEventListener('mousedown', function(event) {
    let mousePosition = getMousePosition(canvas, event);
    ctx.beginPath();
    ctx.rect(mousePosition.x, mousePosition.y, 6, 6);
    ctx.fillStyle = '#000';
    ctx.fill();
})

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function pointerDown(event) {
    console.log(`x: ${mousePosition.x} y: ${mousePosition.y}`)
}

document.querySelector('.canvas-wrapper').appendChild(canvas);