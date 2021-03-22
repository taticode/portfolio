



const HEADER = document.getElementsByTagName('header')[0];
const MAINCONTENT = document.getElementsByTagName('main')[0];
let headerValues = HEADER.values;

if (ResizeObserver) {
    const ro = new ResizeObserver(entries => {
        for (let entry of entries) {

            headerValues = parseInt(HEADER.values = entry.borderBoxSize[0].blockSize);
            MAINCONTENT.style.transform = `translate(0,` + headerValues + `px)`;

        }

    })
    ro.observe(HEADER);

}


window.addEventListener('scroll', scrollEffect);

function scrollEffect() {

    // si el scroll-top del elemento es mayor que la posición inferior de la ventana NO SE VE
    // si es menor, SÍ SE VE

    let intros = document.getElementsByClassName('intro');
    let windowTop = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;


    for (let intro of intros) {
        let indexBottom = parseInt(intro.getBoundingClientRect().bottom);
        let indexTop = parseInt(intro.getBoundingClientRect().top);
        //let alturaElemento = intro.offsetHeight;
        let elementPositionBottom = indexBottom + indexTop;
        let windowBottom = windowTop + windowHeight;

        if (elementPositionBottom >= windowBottom) {
            intro.classList.remove('appear');


        }
        else if (elementPositionBottom <= windowBottom) {
            intro.classList.add('appear');

        }

    }
}




