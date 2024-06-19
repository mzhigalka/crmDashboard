document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector(".menu__btn");
  const main = document.querySelector(".main__info");

  const animateElements = () => {
    sidebar.classList.toggle("aside-animation");
    main.classList.add("main-animation");
  };

  if (sidebar && menuBtn && main) {
    animateElements();

    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar--mobile");
    });
  } else {
    console.error("Error");
  }
});
