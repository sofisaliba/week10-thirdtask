let offset = 0; //смещение от левого края
const slider = document.querySelector('.items');

document.querySelector('.next').addEventListener('click', function() {
    offset = offset + 32.25;
    if (offset > 64.7) {
        offset = 0;
    }
    slider.style.left = -offset + 'rem';
});

document.querySelector('.prev').addEventListener('click', function() {
    offset = offset - 32.25;
    if (offset < 0) {
        offset = 64.7;
    }
    slider.style.left = -offset + 'rem';
});