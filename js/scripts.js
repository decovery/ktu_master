window.onload = function() {
  var button = document.querySelector('.js-nav_button');
  var nav = document.querySelector('.b-nav-sidebar');

  button.addEventListener('click', function(){
    if (nav.classList.contains('is-active')) {
      console.log('active');
      nav.classList.remove('is-active');
    } else {
      console.log('not');
      nav.classList.add('is-active');
    }
  });
}