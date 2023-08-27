let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.content');
let slider = document.querySelector('.slider');

function showTabContent(index) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[index].classList.add('active');

    tabContent.forEach(content => content.classList.remove('active'));
    tabContent[index].classList.add('active');

    // Move the slider   to the active tab
    let activeTab = tabs[index];
    let sliderOffset = activeTab.offsetTop - activeTab.parentElement.offsetTop;
    slider.style.transform = `translateY(${sliderOffset}px)`;
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        showTabContent(index);
    });
});

showTabContent(0); // Show the first tab content by default


// -----------------------------------------------------------------------------------------
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
