let upp = document.querySelector(".up");
let menu = document.querySelector(".menu");
let phone = document.querySelector("#phone-menu");
alert("Welcome to My Michigan capstone project");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    upp.classList.add("show");
  } else {
    upp.classList.remove("show");
  }
};
upp.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    // document.body.removeChild("loader");
  });
});
menu.addEventListener("click", () => {
  hmenu();
});
function hmenu() {
  menu.classList.toggle("is-active");
  phone.classList.toggle("is-active");
}
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("is-active");
    phone.classList.remove("is-active");
  })
);
