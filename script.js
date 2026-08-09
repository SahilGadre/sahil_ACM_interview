// show a message when the form is submitted
function sendMessage(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var msg = document.getElementById("msg");

  msg.innerHTML = "Thank you " + name + "! Your message has been sent.";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// smooth scroll for the navbar links
var links = document.querySelectorAll(".navbar a");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault();
    var id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
}