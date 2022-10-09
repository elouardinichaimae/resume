const anchor = document.getElementById('anchor')
document.addEventListener('mousemove', (e)=> {

    console.log(e)

    const mouseX = e.clientX; 
    const mouseY = e.clientY; 

    const angleDeg = angle(mouseX, mouseY, 0, 0);

    console.log(angleDeg)

    const a = ['a','b','c']
    

    a.forEach(e => {

        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    })

})
function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;

}