let acountDrop=document.querySelector('.Acount-dropdown');
let btndrop=document.querySelector('#btn1');
acountDrop.style.display='none';
btndrop.addEventListener('click',togglemenu)
function togglemenu(){
    if(acountDrop.style.display=='none'){
        acountDrop.style.display='grid';
    }else{
        acountDrop.style.display='none';
    }
}
// do scroll x with click
let room=document.querySelector('.creat-room div');
let arrowR=document.querySelector('.arrow.right');
let arrowL=document.querySelector('.arrow.left');
// let y=room.style.transform.translateX;
var d=0;





function newFunction_1() {
    arrowL.addEventListener('click', () => {
        d = d + 10;
        room.style.transform = "translateX(" + d + "%)";
        newFunction();
        // return d;
    });
    arrowR.addEventListener('click', () => {
        d = d - 10;
        room.style.transform = "translateX(" + d + "%)";
        newFunction();
    });
    return d
}
newFunction_1();
function newFunction() {
    if (d == 0) {
        arrowL.style.display = 'none';
        arrowR.style.display = 'block';
    } else if (0 > d > -60) {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
    }else{
        arrowL.style.display = 'block';
        arrowR.style.display = 'none';
    }
    
}


console.log(room.style.transform="translateX("+d+"%)");
