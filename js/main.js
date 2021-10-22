const home = document.querySelector(".home-link");
const projects = document.querySelector(".projects-link");
const certificates = document.querySelector(".certificates-link");
const experiences = document.querySelector(".experiences-link");
const about = document.querySelector(".about-link");
const header = document.getElementsByTagName("header")[0];

home.addEventListener("click", () => {
    if (home.classList.length === 1) {
        home.classList.add("active");
        projects.classList.remove("active");
        certificates.classList.remove("active");
        experiences.classList.remove("active");
        about.classList.remove("active");
        header.style.backgroundColor = "rgb(10,10,10)";
    }
});
projects.addEventListener("click", () => {
    if (projects.classList.length === 1) {
        projects.classList.add("active");
        home.classList.remove("active");
        certificates.classList.remove("active");
        experiences.classList.remove("active");
        about.classList.remove("active");
        header.style.backgroundColor = "rgb(15,15,15)";
    }
});
certificates.addEventListener("click", () => {
    if (certificates.classList.length === 1) {
        certificates.classList.add("active");
        home.classList.remove("active");
        projects.classList.remove("active");
        experiences.classList.remove("active");
        about.classList.remove("active");
        header.style.backgroundColor = "rgb(20,20,20)";
    }
});
experiences.addEventListener("click", () => {
    if (experiences.classList.length === 1) {
        experiences.classList.add("active");
        home.classList.remove("active");
        projects.classList.remove("active");
        certificates.classList.remove("active");
        about.classList.remove("active");
        header.style.backgroundColor = "rgb(25,25,25)";
    }
});
about.addEventListener("click", () => {
    if (about.classList.length === 1) {
        about.classList.add("active");
        home.classList.remove("active");
        projects.classList.remove("active");
        certificates.classList.remove("active");
        experiences.classList.remove("active");
        header.style.backgroundColor = "rgb(30,30,30)";
    }
});

const getCurrentStyle = () => {
    const links = {
        "home":"rgb(10,10,10)",
        "projects":"rgb(15,15,15)",
        "certificates":"rgb(20,20,20)",
        "experiences":"rgb(25,25,25)",
        "about":"rgb(30,30,30)"
    };
    const loc = document.location.href.split("#")[1];
    header.style.backgroundColor = links[loc];
    
    const menus = [home, projects, certificates, experiences, about];
    let bool = false;
    menus.forEach(menu => {
        if (menu.toString().includes(loc)) {
            menu.classList.add("active");
            bool = true;
        }
    });
    if (!bool) {
        home.classList.add("active");
    }
};

window.addEventListener("load", () => {
    getCurrentStyle();
});