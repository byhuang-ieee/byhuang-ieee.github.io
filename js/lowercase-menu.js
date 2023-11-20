document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(function(link) {
    var words = link.textContent.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() !== 'and') {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      } else {
        words[i] = words[i].toLowerCase();
      }
    }
    link.textContent = words.join(' ');
  });
});
