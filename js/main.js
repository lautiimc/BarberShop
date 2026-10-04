// Logica principal de navegacion y menu responsive.

document.addEventListener("DOMContentLoaded", () => {
    // Elementos del menu hamburguesa
    const botonMenu = document.querySelector(".boton-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const enlacesMobile = document.querySelectorAll(".menu-mobile .enlace-nav");

    // Abrir o cerrar el menu al hacer clic en el boton hamburguesa
    if (botonMenu && menuMobile) {
        botonMenu.addEventListener("click", () => {
            const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
            
            // Alternar estado accesible
            botonMenu.setAttribute("aria-expanded", !estaAbierto);
            menuMobile.classList.toggle("activo");
        });

        // Cerrar el menu automaticamente al seleccionar cualquier enlace
        enlacesMobile.forEach((enlace) => {
            enlace.addEventListener("click", () => {
                botonMenu.setAttribute("aria-expanded", "false");
                menuMobile.classList.remove("activo");
            });
        });

        // Cerrar el menu si el usuario presiona la tecla Escape
        document.addEventListener("keydown", (evento) => {
            if (evento.key === "Escape" && menuMobile.classList.contains("activo")) {
                botonMenu.setAttribute("aria-expanded", "false");
                menuMobile.classList.remove("activo");
                botonMenu.focus();
            }
        });
    }
});
