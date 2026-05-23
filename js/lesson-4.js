// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
console.log(title);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll('[data-topic]');
console.log(topics);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopic = document.querySelector('[data-topic]');
console.log(firstTopic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastTopic = document.querySelectorAll('[data-topic]');
console.log(lastTopic[lastTopic.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleH1 = document.querySelector('h1');
console.log(titleH1.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allThirdTitle = document.querySelectorAll('h3');
console.log(allThirdTitle);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allThirdTitle.forEach(elem => elem.classList.add('active'));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const nav = document.querySelector('li[data-topic = "navigation"]');
console.log(nav);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
nav.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const par = nav.querySelector('p');
par.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const manip = document.querySelector(`[data-topic = "${currentTopic}"]`);
console.log(manip);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manip.style.backgroundColor = 'lightblue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedClass = document.querySelector('h3.completed');
console.log(completedClass);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedClass.parentNode.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
titleH1.insertAdjacentHTML(
  'afterend',
  "<p>Об'єктна модель документа (Document Object Model)</p>"
);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити
// їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і
// готову LI закинути у кінець списку
const newLi = document.createElement('li');
const newLiH3 = document.createElement('h3');
const newLiP = document.createElement('p');

newLiH3.textContent = 'Властивість innerHTML';
newLiP.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';
newLi.append(newLiH3, newLiP);
list.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newHTMLContent = `<h3>${newLiH3.textContent}</h3><p>${newLiP.textContent}</p>`;
list.insertAdjacentHTML('beforeend', newHTMLContent);
// 20 - очисти список
list.innerHTML = '';
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const containerNumbers = document.querySelector('.number-container');

const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const block = document.createElement('div');
  block.classList.add('number');

  const num = randomNumber();
  block.textContent = num;

  if (num % 2 === 0) {
    block.classList.add('even');
  } else {
    block.classList.add('odd');
  }

  fragment.append(block);
}

containerNumbers.append(fragment);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector('.js-username-input');

input.addEventListener('input', onInput);

function onInput({ target }) {
  const inputValue = target.value;

  if (inputValue.length >= 6) {
    target.classList.add('success');
    target.classList.remove('error');
  } else {
    target.classList.add('error');
    target.classList.remove('success');
  }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener('focus', onFocus);

function onFocus(event) {
  if (event.target.value.trim() === '') {
    event.target.style.outline = '3px solid red';
  } else {
    event.target.style.outline = '3px solid green';
  }
}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener('blur', onBlur);

function onBlur(event) {
  if (event.target.value.trim() === '') {
    event.target.style.outline = '3px solid red';
  } else {
    event.target.style.outline = '3px solid lime';
  }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const checkbox = document.querySelector('.js-policy-checkbox');
const output = document.querySelector('.js-username-output');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.userName.value;
  const checkbox = event.target.elements.accept;
  const data = { userName: '' };

  if (name.trim() !== '' && checkbox.checked === true) {
    data.userName = name.trim();
    console.log(data);
  } else {
    alert('Введіть ім`я та поставте +');
    return;
  }
  output.textContent = 'Anonymous';
  form.reset();
}

input.addEventListener('input', changeOutput);

function changeOutput(event) {
  output.textContent = event.target.value.trim() || 'Anonymous';
}

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const decrease = document.querySelector('.js-decrease');
const increase = document.querySelector('.js-increase');

function changeSize(number) {
  const newSize = box.offsetWidth + number;
  if (newSize >= 20) {
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
  }
}

increase.addEventListener('click', () => changeSize(20));
decrease.addEventListener('click', () => changeSize(-20));
