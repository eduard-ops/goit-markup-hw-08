const cards = document.querySelectorAll('.portfolio__item');

const radioButtons = document.querySelector('.filter');

radioButtons.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (!e.target.classList.contains('filter__button')) return;
  let filterClass = e.target.dataset['f'];
  cards.forEach(cards => {
    cards.classList.remove('anime');
    if (!cards.classList.contains(filterClass) && filterClass !== 'all') {
      cards.classList.add('anime');
    }
  });
}
