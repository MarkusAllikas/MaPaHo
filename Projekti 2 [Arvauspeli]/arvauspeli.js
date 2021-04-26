
// Patrikin kirjoittama koodi
/*function Arvaus() {
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("tulos");

    if (guess == sattunainenLuku) {
        guesses.value = guesses.value + "\r" + "sinä arvasit oikein! ("+guess+")";
    } else if (guess > sattunainenLuku) {
        guesses.value = guesses.value + "\r" + "arvasit liian korkean!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "arvasit liian matalan!("+guess+")";
    }
}

function eraseText() {
    document.getElementById("tulos").value = "";
    sattunainenLuku = Math.floor(Math.random()*100);
}


var sattunainenLuku = Math.floor(Math.random()*100);*/
// Patrikin kirjoittama koodi loppuu tähän.
//tämä ei toiminut mut en halunnut poistaakaan toisen työtä -Markus


var sattunainenLuku = Math.floor(Math.random()*10)+1; // luo satunnaisen luvun 1-10
var arvausKerrat = 0;

window.onload= function alusta() //tekee napit 1-10
{
  var napit10 = '';

  for(var i = 1; i <=10; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      napit10 += '<button class= "napit" type="button" name="' + i +'" onclick="arvaa(this)" value = '+i+'>'+i+'</button>';
      if(i < 10 && j != 2)
      {
        i++;
      }
      else
      {
        j=3;
      }

    }
    napit10+= '<br>';
  }
  document.getElementById('napit').innerHTML = napit10;

}

/*Tarkistaa onko käyttäjän arvaama luku oikea,
liian pieni vai liian iso ja tarkistaa myös sen,
että kuinka monessa kerrassa luku arvattiin, jos se arvattiin.*/
function arvaa(arpa)
{
  arvausKerrat++;
  var arvaus = arpa.value;
  if(arvausKerrat <= 3)
  {
    if(arvaus < sattunainenLuku)
    {
      alert("arvasit liian matalan!");
      var x = '';
      for(var luvut = 1; luvut < arvaus; luvut++)
      {
        x = document.getElementsByName('' + luvut + '');
        console.log(x);
        x.style.nayta = "none";
      }
    }
    else if(arvaus > sattunainenLuku)
    {
      alert("arvasit liian korkean!");
    }
    else if (arvaus == sattunainenLuku)
    {
      alert("Sinä arvasit oikein, käytit " + arvausKerrat + " kertaa!");
    }
    else
    {
      alert('Käytit kaikki kertasi');
    }
  }

}
