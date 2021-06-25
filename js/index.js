/* ---- TOP BUTTON ---- */
const topButton = document.getElementById("topButton");

// Al bajar 20px se hace visible el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// Funcion de scroll hacia el top de la pag
function goToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para los demas
}

/* ---- SKILLS ANIMATION ---- */

const boxes = document.querySelectorAll(".animated");

const showScroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;

  for (const box of boxes) {
    let heightBox = box.offsetTop;
    let distance = heightBox - windowHeight + 150;

    if (distance < scrollTop) {
      box.style.opacity = 1;
      box.style.transition = "all 1s";
      box.style.animation = "slide 2s";
    }
  }
};

window.addEventListener("scroll", showScroll);
