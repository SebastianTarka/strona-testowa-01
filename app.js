const welcome = document.querySelector('.welcome-page');
welcome.classList.add('show');
window.addEventListener('load', () => {
  	setTimeout(() => {
    	welcome.classList.remove('show');
  	}, 1500);
});
const hamburger = document.querySelector(".hamburger-navigation");
const nav = document.querySelector(".hamburger-navigation");
hamburger.addEventListener("click", () => {
	nav.classList.toggle("click-hamburger");
	});

const button = document.querySelector(".btn-toggle");
const darkmode = window.matchMedia("(dark-mode)");
	
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
	document.body.classList.toggle("dark-theme");
	} else if (currentTheme == "light") {
	document.body.classList.toggle("light-theme");
	}
button.addEventListener("click", function () {
	if (darkmode.matches) {
	document.body.classList.toggle("light-theme");
	var theme = document.body.classList.contains("light-theme")
		? "light"
		: "dark";
	} else {
	document.body.classList.toggle("dark-theme");
		var theme = document.body.classList.contains("dark-theme")
		? "dark"
		:"light";
	}
	localStorage.setItem("theme", theme);
});