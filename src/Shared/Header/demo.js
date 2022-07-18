const body = window.document.querySelector('body'),
      sidebar = window.querySelector('nav'),
      toggle = window.querySelector(".toggle"),
      searchBtn = window.querySelector(".search-box"),
      modeSwitch = window.querySelector(".toggle-switch"),
      modeText = window.querySelector(".mode-text");



modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
})