document.getElementById("myBtn").onclick = function(){
  var thimbles = documentgetElementByID("thimbles").value;
  var swords = documentgetElementById("swords").value;
  var thimtot = Number("thimbles")*1;
  var swordstot = Number("swords")*37;
  var total = thimtot + swordstot;
document.getElementByID("the-total").textContent = total;
}
