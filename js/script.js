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
    let palabra = "";

document.addEventListener("keydown", (e) => {

    palabra += e.key.toUpperCase();

    if (palabra.length > 4) {
        palabra = palabra.slice(-4);
    }

    if (palabra === "PLAY") {
        document.getElementById("secret-game").style.display = "block";
    }

});
}