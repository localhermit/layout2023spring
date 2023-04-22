var test = document.getElementsByClassName("currentscore")[0];

console.log(test.innerHTML)

setInterval(updatescore, 1000);

let currentscore=0;
function updatescore() {
    currentscore+=1;
    test.innerHTML=currentscore;

    let score = currentscore.toString();

    if (currentscore<=9999){
        score ="0"+score;
    }
    if (currentscore<=999){
        score ="0"+score;
    }
    if (currentscore<=99){
        score ="0"+score;
    }
    if (currentscore<=9){
        score ="0"+score;
    }

    test.innerHTML=score;
}

var berry = document.getElementsByClassName("ammoberry")[0];
setInterval(updateammo, 955);
let ammo=0;
function updateammo() {
    ammo+=1;
    berry.innerHTML=ammo;
}

$('.pulsa').on('click',()=>{
    $('.bullet').addClass('shot');
    setTimeout(()=>{
      $('.bullet').removeClass('shot');
    }, 1500);
  });