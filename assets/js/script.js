function myScope() {
    const title = document.querySelector('#title01');
    const audio = document.querySelector('audio');
    const playSong = false;
    window.addEventListener('load', function() {
        this.setTimeout(function() {
            title.classList.add('anime');

        }, 500);
    });

    const elements = document.querySelectorAll('[anime]');

    const animaClass = 'anime';

    function creatA(href) {
        const a = document.createElement('a');
        a.setAttribute('href', href);
        return a;
    }


    function animeScroll() {
        const windowTop = window.pageYOffset + (window.innerHeight * 0.95);

        elements.forEach(function(element) {
            if (windowTop > element.offsetTop) {
                element.classList.add(animaClass);

                if (element.id === 'title-fim') {
                    const a = creatA('#fim');
                    playMusic()
                    a.click();
                }

            } else {
                element.classList.remove(animaClass);
            }


        });
    }

    function playMusic() {
        if (!playSong) {
            audio.play();
            playSong = true;
        }
    }

    let time;
    window.addEventListener('scroll', function() {
        clearTimeout(time);
        time = setTimeout(function() {
            console.log(3)
            animeScroll();
        }, 250);

    });

}

myScope();