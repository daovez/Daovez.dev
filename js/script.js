const person = document.querySelector(".person");
const card = document.querySelector(".card");

if (person && card) {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (rect.width / 2 - x) / 45;
        const moveY = (rect.height / 2 - y) / 45;

        person.style.transform = `
            translateX(-50%)
            translate(${moveX}px, ${moveY}px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        person.style.transform = "translateX(-50%) translate(0, 0)";
    });
}

/* EASTER EGG PLAY */

let palabra = "";

document.addEventListener("keydown", (e) => {
    palabra += e.key.toUpperCase();

    if (palabra.length > 4) {
        palabra = palabra.slice(-4);
    }

    if (palabra === "PLAY") {
        const secretGame = document.getElementById("secret-game");

        if (secretGame) {
            secretGame.style.display = "block";
        }
    }
});

/* TARJETAS DEL MENÚ */

document.addEventListener("DOMContentLoaded", function () {
    const btnSobreMi = document.getElementById("btn-sobre-mi");
    const btnContacto = document.getElementById("btn-contacto");

    const infoCard = document.querySelector(".info-card");
    const contactCard = document.querySelector(".contact-card");

    if (btnSobreMi && infoCard) {
        btnSobreMi.addEventListener("click", function (e) {
            e.preventDefault();

            infoCard.classList.toggle("activa");

            if (contactCard) {
                contactCard.classList.remove("activa");
            }
        });
    }

    if (btnContacto && contactCard) {
        btnContacto.addEventListener("click", function (e) {
            e.preventDefault();

            contactCard.classList.toggle("activa");

            if (infoCard) {
                infoCard.classList.remove("activa");
            }
        });
    }
});