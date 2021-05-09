var taskInput = document.getElementById("uusi-tehtava");
var addButton = document.getElementsByTagName("button")[0]; 
var tehtavat = document.getElementById("tehtavat"); 
var tehdytTehtava = document.getElementById("tehdytTehtavat"); 


var luoUusiTehtava = function(tehtava) {

  var listItem = document.createElement("li");

  var checkBox = document.createElement("input"); 
  
  var label = document.createElement("label"); 

  var deleteButton = document.createElement("button"); 

  label.innerText = tehtava;
  checkBox.type = "checkbox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";


  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}



var lisaaTehtava = function() {

  var listItem = luoUusiTehtava(taskInput.value);

  tehtavat.appendChild(listItem);
  yhdistaListat(listItem, tehtavaTehty);


}



var poistaTehtava = function() {

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove the parent list item from the ul.
  ul.removeChild(listItem);

}


var tehtavaTehty = function() {

  var listItem = this.parentNode;
  tehdytTehtavat.appendChild(listItem);
  yhdistaListat(listItem, tehtavaEiTehty);

}


var tehtavaEiTehty = function() {

  var listItem = this.parentNode;
  tehtavat.appendChild(listItem);
  yhdistaListat(listItem, tehtavaTehty);
}


addButton.addEventListener("click", lisaaTehtava);

var yhdistaListat = function(listanTehtava, valintaRuutu) {
  var checkBox = listanTehtava.querySelector("input[type=checkbox]");
  var deleteButton = listanTehtava.querySelector("button.delete");


  deleteButton.onclick = poistaTehtava;
  checkBox.onchange = valintaRuutu;
}

//käydään läpi tehtävät
for (var i = 0; i < tehtavat.children.length; i++) {

  yhdistaListat(tehtavat.children[i], tehtavaTehty);
}




//käydään läpi tehdyt tehtävät
for (var i = 0; i < tehdytTehtavat.children.length; i++) {

  yhdistaListat(tehdytTehtavat.children[i], tehtavaEiTehty);
}


