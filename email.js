(function () {
  var user = "support";
  var host = "kuvetra.co.ke";
  var buttons = document.querySelectorAll(".show-email");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].title = "Contact us";
    buttons[i].addEventListener("click", function () {
      var address = user + "@" + host;
      var box = document.createElement("span");
      var text = document.createElement("strong");
      text.textContent = address;
      var open = document.createElement("button");
      open.type = "button";
      open.className = "mail-app";
      open.textContent = "Email us";
      open.title = "Email us";
      open.addEventListener("click", function () {
        window.location.href = "mailto:" + address;
      });
      box.appendChild(text);
      box.appendChild(document.createTextNode(" "));
      box.appendChild(open);
      this.parentNode.replaceChild(box, this);
    });
  }
})();
