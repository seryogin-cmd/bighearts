window.addEventListener("DOMContentLoaded", () => {
  const requestsList = document.querySelector(".requests__list");
  const requestBtns = requestsList.querySelectorAll("button");

  requestBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
  });
});
