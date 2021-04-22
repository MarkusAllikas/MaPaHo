function tarkasta(form)
{

  var etunimi = form.etunimi.value;
  var sukunimi = form.sukunimi.value;
  var sahkoposti = form.mail.value;
  var check = form.tanaan;
  var itse = form.itse.value;
  var pallo = form.kyllaei;


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
    alert("Et kirjoittanut tarpeeksi paljon itsestäsi");
    form.itse.focus();
    return false;
  }

  var vastaus = false; //radio buttoneiden tarkistus
  for (var i = 0; i < pallo.length; i++)
  {
    if (pallo[i].checked == true)
    {
        vastaus = true;
    }
  }
  if (vastaus == false)
  {
    alert("et vastannut kohtaan löytyykö sinulta ajokortti");
    return false;
  }

  var checkV = false; // checkboxien tarkistus
  for (var c = 0; c < check.length; c++) {
    if (check[c].checked == true)
    {
      checkV = true;
    }
  }

  if (checkV == false)
  {
    alert("Vastaa, mitä olet tehnyt tänään.");
    return false;
  }
  else
  {
      alert("Kiitos vastaamisesta!");
  }

  function tyhjenna(form)
  {
  var clean = form.value;
  if (!confirm("Haluatko tyhjentää tiedot?"))
    {
    return false;
    }
  }

}
