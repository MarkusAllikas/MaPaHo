// tarvittavat muuttujat
var nr = " ";
var count = " ";
var board = ['+','-','*','/','%'];
var index = 0;

// Kaikkien numeronäppäimien koodi
function add(count)
{
  nr+= count;
  document.getElementById("vastaus").innerHTML = nr;
}

// AC buttonin koodi
function reset()
{
  nr = '';
  document.getElementById("vastaus").innerHTML = nr;
}

// C buttonin koodi
function deletee()
{
  for (var i = 0; i < nr.length; i++)
  {
    for (var o = 0; o < board.length; o++)
    {
      if (nr[i] == board[o])
      {
        index = i;
      }
    }
  }
  nr = nr.substr(0, index);
  document.getElementById('vastaus').innerHTML = nr;
}

function answerr()
{
  var dex, row;
  if (nr.search("%") > 0)
  {
    row = nr.split("%");
    nr = row[0] * row[1] / 100;
    document.getElementById('vastaus').innerHTML = nr;
  } else
    {
    document.getElementById('vastaus').innerHTML = eval(nr);
    nr = eval(nr);
    }
  }
