const card = document.getElementById('card');
const info = document.getElementById('info');
const toggle = document.getElementById('toggle');
const contacts = document.getElementById('contacts');

card.addEventListener('click', () => {
  card.classList.toggle('active');
  info.innerText = card.classList.contains('active')
    ? 'Figma • JS • HTML • CSS'
    : 'Нажми, чтобы узнать больше';
});

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  contacts.classList.toggle('show');
  toggle.innerText = contacts.classList.contains('show')
    ? 'Скрыть контакты'
    : 'Показать контакты';
});