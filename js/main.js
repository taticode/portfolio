


let bucket = document.getElementsByClassName('bucket')[0];
let lastScrollTop = 0;
let ticking = false;


function doSomething(currentScrollPosition) {
    // Hacer algo con la posición del scroll


}

window.addEventListener('scroll', function (e) {
    lastScrollTop = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {

            if (lastScrollTop > 50) {
                //console.log(lastScrollTop);
                bucket.classList.add('appear');
            }

            else if (lastScrollTop <= 50) {
                bucket.classList.remove('appear');
            }

            doSomething(lastScrollTop);

            ticking = false;
        });
    }

    ticking = true;
});




let headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
let mainContent = document.getElementsByTagName('main')[0];

function replaceMainContent() {



    //AÑADIR ANIMACIÓN DEL HEADER TRANSLATE Y



    let marginMain = parseInt(getComputedStyle(mainContent).marginTop);
    let setMainMargin = marginMain = headerHeight + 'px';


    console.log(marginMain);

    console.log(setMainMargin);
}
replaceMainContent();



