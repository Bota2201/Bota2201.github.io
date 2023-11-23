const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills-level-item__percent'),
      lines = document.querySelectorAll('.skills-level-item__scale span');

percent.forEach( (item, i) => {
     lines[i].style.width = item.innerHTML;
});