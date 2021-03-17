var myArray = [ "The secret of getting ahead is getting started.", "All our dreams can come true, if we have the courage to pursue them.", "You can either experience the pain of discipline or the pain of regret. The choice is yours." ];
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
document.body.innerHTML = randomItem;

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
