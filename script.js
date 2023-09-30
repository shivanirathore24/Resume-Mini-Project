/* Way-1
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
//console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    //console.log(targetSectionID);

    var targetSection = document.getElementById(targetSectionID);
    //console.log(targetSection);

    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      //console.log(targetSectionCoordinates);
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}
*/

//Way-2
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    // interval = setInterval(scrollVertically, 20, targetSection);
    //OR
    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
