function tarkasta(form)
{
  if (etunimi.length < 3 | etunimi.length > 15) //tarkistaa syötetyn etunimen pituuden.
  {
    alert("Anna etunimi, jonka pituus on 3-15 kirjainta.");
    form.etunimi.focus();
    return false;
  }

  if (sukunimi.length < 3 | sukunimi.length > 15) //tarkistaa syötetyn sukunimen pituuden.
  {
    alert("Anna sukunimi, jonka pituus on 3-15 kirjainta.");
    form.sukunimi.focus();
    return false;
  }

  var ehdot = /\S+@\S+/; //tarkistaa, onko sähköpostiosoitteessa " @ " merkkiä.
  if(!ehdot.test(sahkoposti))
  {
    alert("Anna oikea sähköpostiosoite!");
    form.mail.focus();
    return false;
  }

  if(itse.length < 10) //tekstikentän tarkistus
  {
    alert("Et kirjoittanut tarpeeksi paljon");
    form.itse.focus();
    return false;
  }

  
}
