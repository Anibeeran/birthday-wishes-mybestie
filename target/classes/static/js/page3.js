const savedName = localStorage.getItem("birthdayName");

if(savedName){
    document.getElementById("displayName").textContent = savedName;
}

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {

let x = Math.random() * canvas.width;
let y = Math.random() * (canvas.height / 2);

for(let i=0; i<100; i++){

    particles.push({
        x: x,
        y: y,
        radius: 2,
        color: `hsl(${Math.random()*360},100%,60%)`,
        speedX: (Math.random()-0.5)*8,
        speedY: (Math.random()-0.5)*8,
        life: 100
    });

}

}

function animate(){

requestAnimationFrame(animate);

ctx.fillStyle = "rgba(0,0,0,0.15)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if(p.life <= 0){
        particles.splice(index,1);
    }
});

}

setInterval(createFirework, 800);
animate();

// open page 4 

function goNextPage(){
window.location.href = "page4.html";
}

window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

document.addEventListener("visibilitychange", () => {

    if (!document.hidden) {

        particles = [];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

});
// open page 5
function openWishes(){
    window.location.href = "page5.html";
}



