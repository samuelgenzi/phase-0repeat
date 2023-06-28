const projectsTab = document.getElementById("Projects");
const skillsTab = document.getElementById("Skills");
const projectsTitle = document.getElementById("p1");
const skillsTitle = document.getElementById("p2");

projectsTitle.addEventListener("click", function () {

projectsTab.style.display = "block";
skillsTab.style.display = "none";
projectsTitle.classList.add("active");
skillsTitle.classList.remove("active");
});


skillsTitle.addEventListener("click", function () {

skillsTab.style.display = "block";
projectsTab.style.display = "none";
skillsTitle.classList.add("active");
projectsTitle.classList.remove("active");
});