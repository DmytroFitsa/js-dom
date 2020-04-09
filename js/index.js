const link = document.querySelector('a');

link.textContent = 'Love JavaScript.';
link.href = 'https://google.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';

//зробити 1000 парашрафів
// for (let i = 1; i <=1000; i++){
//     const p = document.createElement('p');
//     p.textContent = i + 'We hope you enjoyed the ride.';
//     sect.appendChild(p);
// }
//====
// [...Array(1000)].forEach( (_, i) => {
//     const p = document.createElement('p');
//     p.textContent = i + 1 + 'We hope you enjoyed the ride.';
//     sect.appendChild(p);
// });

//Поміняти місцями параграфи і зклонувати
const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

//видалення якогось елемента(linkpara)
//linkPara.parentNode.removeChild(linkPara);
//or
linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formated');//ав цсс зробити селектор .formated

//виведення годинника на сторінку
//як в системі-браузері
const clock = document.querySelector('.clock');
//24год формат
const option = {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
};//
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

//закривання і відкривання плавно картинки з заданим часом
$('.click').click( () => $('img').toggle(3000/*мс*/) );

//calculator
//cufru
const display = document.querySelector('.display');
document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    display.value += ev.target.innerText;
}
//operacii
document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', operPressed));
function operPressed(ev) {
    display.value += ev.target.innerText;
}
//button =
document.querySelector('.eq').addEventListener('click', calculate);
function calculate() {
    display.value = eval(display.value);
}