window.onload = () => {
    // Obtener nombre desde localStorage
    const nombre = localStorage.getItem("nombreCliente") || "cliente";
    // Colocar nombre en el modal
    document.getElementById("nombreCliente").textContent = nombre;
    // Colocar nombre en el Hero
    document.getElementById("nombreHero").textContent = nombre;
    // Mostrar el modal
    document.getElementById("modalBienvenida").style.display = "flex";
};

function cerrarModal() {
    document.getElementById("modalBienvenida").style.display = "none";
}

function togglePerfilMenu() {
    const menu = document.getElementById("menuPerfil");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Cierra el menú si se hace clic fuera
window.addEventListener("click", function (e) {
    const perfilIcon = document.querySelector(".icono-perfil");
    const menu = document.getElementById("menuPerfil");
    if (!perfilIcon.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }
});

function cerrarSesion() {
    // Limpia los datos de sesión/localStorage
    localStorage.clear();
    // Redirige a la página de login
    window.location.href = "/index.html";
}

//Opcion para evitar que otros usuarios que no han iniciado sesion, ingresen a la pagina de cliente
/* 
window.onload = () => {
    const nombre = localStorage.getItem("nombreCliente");

    if (!nombre) {
        window.location.href = "/index.html"; // Redirige si no hay sesión
        return;
    }

    document.getElementById("nombreCliente").textContent = nombre;
    document.getElementById("nombreHero").textContent = nombre;
    document.getElementById("modalBienvenida").style.display = "flex";
};
*/
