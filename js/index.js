// Function to show content for a given letter
function showContent(letter) {
  // First, hide all content
  hideAllContent();
  // Then, display the content for the given letter
  document.getElementById(letter).style.display = "block";
}

// Function to hide content for a given letter
function hideContent(letter) {
  document.getElementById(letter).style.display = "none";
}

// Function to hide all content
function hideAllContent() {
  // Get all elements with the class 'content'
  var contents = document.getElementsByClassName("content");
  // Loop through the elements and set their display style to 'none'
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
}
