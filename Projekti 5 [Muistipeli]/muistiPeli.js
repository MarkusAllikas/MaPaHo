const kortit = document.querySelectorAll('.memory-card');

let Pyöräytys = false;
let Lukitus = false;
let EkaKortti, toinenKortti;

function pyoraytaKortti() {
  if (Lukitus) return;
  if (this === EkaKortti) return;

  this.classList.add('flip');

  if (!Pyöräytys) {
    // first click
    Pyöräytys = true;
    EkaKortti = this;

    return;
  }

  // second click
  toinenKortti = this;

  onkoSama();
}

function KortitPois() {
  EkaKortti.removeEventListener('click', pyoraytaKortti);
  toinenKortti.removeEventListener('click', pyoraytaKortti);

  nollataTaulun();
}

function kaannaKortit() {
  Lukitus = true;

  setTimeout(() => {
    EkaKortti.classList.remove('flip');
    toinenKortti.classList.remove('flip');

    nollataTaulun();
  }, 1500);
}


function onkoSama() {
  let isMatch = EkaKortti.dataset.framework === toinenKortti.dataset.framework;

  isMatch ? KortitPois() : kaannaKortit();
}


function nollataTaulun() {
  [Pyöräytys, Lukitus] = [false, false];
  [EkaKortti, toinenKortti] = [null, null];
}

(function sekoita() {
  kortit.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

kortit.forEach(card => card.addEventListener('click', pyoraytaKortti));
