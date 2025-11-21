// ----------------------------------------------------
// LOGIN VALIDATION (login.html)
// ----------------------------------------------------

function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();

    const modal = document.querySelector(".modal");

    // Hardcoded credentials (change later)
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html";
    } else {
        modal.style.display = "block"; // show modal
    }
}

function dismissModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}



// ----------------------------------------------------
// SIDEBAR TOGGLE (index.html)
// ----------------------------------------------------

let navOpen = false;

function toggleNav() {
    const sidebar = document.querySelector(".nav-sidebar");
    const menuBtn = document.querySelector(".btn-toggle-nav");
    const sidebarList = sidebar.querySelector("ul");

    if (!navOpen) {
        sidebar.style.width = "272px";
        sidebarList.style.visibility = "visible";

        menuBtn.style.transform = "rotate(90deg)";

        navOpen = true;
    } else {
        sidebar.style.width = "50px";
        sidebarList.style.visibility = "hidden";

        menuBtn.style.transform = "rotate(0deg)";

        navOpen = false;
    }
}
