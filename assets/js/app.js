window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
      document.getElementById('navbar').classList.add('scrolled');
  }
}

const navbarToggler = document.getElementById("navbar-toggler")
navbarToggler.addEventListener("click", function() {
  document.getElementById('navbar').classList.add('scrolled');
})

// Animate On Scroll
AOS.init({
  duration: 750
});