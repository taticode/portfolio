


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


const header = document.getElementsByTagName('header')[0];
const mainContent = document.getElementsByTagName('main')[0];
let headerValues = header.values;

if (ResizeObserver) {
    const ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            //headerValues = header.values = entry.contentRect.height;
            headerValues = header.values = entry.borderBoxSize[0].blockSize;
            mainContent.style.transform = `translate(0,` + headerValues + `px)`;

            console.log(headerValues);
        }

    })
    ro.observe(header);
}

