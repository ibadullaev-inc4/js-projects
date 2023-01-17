const   btns     = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');


const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click',deleteElement,{once: true});
});


const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

