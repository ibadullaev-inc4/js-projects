'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const   adv         = document.querySelectorAll('.promo__adv img'),
            adv_title   = document.querySelector('.promo__adv-title'),
            poster      = document.querySelector('.promo__bg'),
            genre       = poster.querySelector('.promo__genre'),
            movieList   = document.querySelector('.promo__interactive-list'),
            addForm     = document.querySelector('form.add'),
            addInput    = addForm.querySelector('.adding__input'),
            checkbox    = addForm.querySelector('[type="checkbox"]');

    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm   = addInput.value;
        const favorite  = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 10) {
                newFilm = `${newFilm.substring(0,10)}...`;
            }
            if (favorite) {
                console.log(favorite);
            };
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            creteMovieList(movieDB.movies, movieList);
        };
        event.target.reset();
    });

    const deleteAdv = (arr, adv_title) => {
        arr.forEach(item => item.remove());
        adv_title.remove();
    };
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray= (arr) => {
        arr.sort();
    };


    function creteMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film,i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach( (btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                creteMovieList(films, parent);
            });
        });

    }

    deleteAdv(adv, adv_title);
    makeChanges();
    creteMovieList(movieDB.movies, movieList);

});

