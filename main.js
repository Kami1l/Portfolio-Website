$(document).ready(function(){
    positionSkill();
    slideUp();
    rain();

})


function slideUp(){
    $('section .strip .first').on('click',()=>{
        $('.section .first').parent().toggleClass('toLeft');
    })
    $('section .strip .sec').on('click',()=>{
        $('.section .sec').parent().toggleClass('toLeft');
    })
    $('section .strip .thre').on('click',()=>{
        $('.section .thre').parent().toggleClass('toLeft');
    })
}

function rain() {
    let amount = 30; // ilość kropli max
    let header = document.querySelector('header'); // miejsce gdzie są krople
    let i = 0; // początowa ilość
    while (i < amount) {
        let drop = document.createElement('i'); // tworzenie elementu i

        let size = Math.random() * 5; // rozmiar
        let height = Math.random() * 80 // wysokosc
        let posX = Math.floor(Math.random() * window.innerWidth); // pozycja X

        let delay = Math.random() * -20; // delay 
        let speed = Math.random() * 10; // Duration

        drop.style.height = 30 + height + 'px';
        drop.style.width = 0.2 + size + 'px'; // css szerokość
        drop.style.left = posX + 'px'; // css pozycja
        drop.style.animationDelay = delay + 's'; // css delay
        drop.style.animationDuration = 1 + speed + 's'; // css duration


        header.appendChild(drop); // dodanie elementu drop jako dziecko header
        i++;
    }
}

function positionSkill(){
    let i=2;
    while (i<6){
        let Value = $('#sectionTwo .container:nth-child('+i+') input')[0].value;
        let Meter = $('#sectionTwo .container:nth-child('+i+') .selector .prog');
        let Selector = $('#sectionTwo .container:nth-child('+i+') .selector');

        Meter.html(Value)
        Selector.css('left',Value +'%');
        i++;
    }

}