let lis = document.querySelectorAll(".parent"),
  nested = document.querySelectorAll(".nested");

lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    nested[e.currentTarget.dataset.index].classList.toggle("active");
  });
});

let main = document.getElementById("main");
let bars = document.querySelector(".bars");

bars.onclick = () => {
  main.classList.toggle("active");
};
