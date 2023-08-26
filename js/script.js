const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

function showTabContent(index) {
  tabs.forEach(tab => tab.classList.remove('active'));
  tabs[index].classList.add('active');

  contents.forEach(content => content.classList.remove('active'));
  contents[index].classList.add('active');
}

showTabContent(0); // Show the first tab content by default

// --------------------------------------------------------------------------------------------
const burgerMenu = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu__list');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});
