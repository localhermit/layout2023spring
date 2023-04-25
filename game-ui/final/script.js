var test = document.getElementsByClassName("currentscore")[0];

console.log(test.innerHTML)

setInterval(updatescore, 1000);

let currentscore = 0;
function updatescore() {
    currentscore += 1;
    test.innerHTML = currentscore;

    let score = currentscore.toString();

    if (currentscore <= 9999) {
        score = "0" + score;
    }
    if (currentscore <= 999) {
        score = "0" + score;
    }
    if (currentscore <= 99) {
        score = "0" + score;
    }
    if (currentscore <= 9) {
        score = "0" + score;
    }

    test.innerHTML = score;
}

var berry = document.getElementsByClassName("ammoberry")[0];
setInterval(updateammo, 955);
let ammo = 0;
function updateammo() {
    ammo += 1;
    berry.innerHTML = ammo;
}

$('.pulsa').on('click', () => {
    $('.bullet').addClass('shot');
    setTimeout(() => {
        $('.bullet').removeClass('shot');
    }, 1500);
});

$(document).keypress((shoots) => {
    if (shoots.which == 13) {
        $('.bullet').addClass('shot');
        setTimeout(() => {
            $('.bullet').removeClass('shot');
        }, 1500);
    }
});

$(document).keypress((event) => {
    if (event.which == 32) {
        $('.mc').addClass('jumping');
        $('.bullet').addClass('jumping');
        setTimeout(() => {
            $('.mc').removeClass('jumping');
            $('.bullet').removeClass('jumping');
        }, 1500);
    }
});


// game over
$(document).keypress((end) => {
    if (end.key == 'q') {
        $('.over').css('display', 'flex');
        $('.bush').removeClass('move');
        $('#berry').removeClass('move');
        $('.monster').removeClass('move');
    }
});

$('.close').on('click', () => {
    $('.over').css('display', 'none');
    $('.bush').addClass('move');
    $('#berry').addClass('move');
    $('.monster').addClass('move');
});
