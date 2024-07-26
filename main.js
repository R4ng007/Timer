const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function mostrarSegundos(segundo) {
  const data = new Date(segundo * 1000);
  return data.toLocaleTimeString('pt-AO', {
    hour12: false,
    timeZone: 'UTC'
  });
}

let segundos = 0;
let timer;

function iniciarSegundos() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = mostrarSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciarSegundos();
});

pausar.addEventListener('click', function (event) {
  clearInterval(timer);
  pausar.classList.add('pausado');
});

zerar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});