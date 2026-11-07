(function () {
  var user = "support";
  var host = "kuvetra.co.ke";
  var buttons = document.querySelectorAll(".show-email");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var address = user + "@" + host;
      var link = document.createElement("a");
      link.href = "mailto:" + address;
      link.textContent = address;
      this.parentNode.replaceChild(link, this);
    });
  }
})();
