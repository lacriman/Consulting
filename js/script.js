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

document.addEventListener('DOMContentLoaded', function() {
  const languageSwitcher = document.querySelector('.language-switcher');
  const languageMenu = document.getElementById('languageMenu');

  languageSwitcher.addEventListener('click', function(event) {
    languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
  });

  const languageOptions = document.querySelectorAll('.language-option');
  languageOptions.forEach(function(option) {
    option.addEventListener('click', function(event) {
      const selectedLanguage = document.querySelector('.selected-language');
      selectedLanguage.textContent = option.textContent;
      languageMenu.style.display = 'none';
      event.stopPropagation();
      // Здесь можно добавить логику для изменения языка 
    });
  });

  document.addEventListener('click', function() {
    languageMenu.style.display = 'none';
  });
});

// --------------------------------------------------------------------------------------------
