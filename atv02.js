let medusa = document.querySelector("#medusa");
let medusaImg = document.querySelector("#medusa img");
let medusaX = 250;
let medusaY = 175;
let medusaAltura = 110;
let medusaLargura = 90;
let movimento = 10;

let alturaContainer = 450;
let larguraContainer = 600;

addEventListener("keydown", movimentar);
addEventListener("keyup", parar);

function movimentar(evento) {
    evento.preventDefault();

    let tecla = evento.key;

    switch (tecla) {
        case 'ArrowUp':
            medusaImg.classList.add("movimento");
            medusaY -= movimento;
            if (medusaY <= 0) {
                medusaY = 0;
            }
            medusa.style.top = medusaY + "px";
            break;

        case 'ArrowDown':
            medusaImg.classList.add("movimento");
            medusaY += movimento;
            if (medusaY >= alturaContainer - medusaAltura) {
                medusaY = alturaContainer - medusaAltura;
            }
            medusa.style.top = medusaY + "px";
            break;

        case 'ArrowRight':
            medusaImg.classList.add("movimento");
            medusaImg.classList.remove("esquerda");
            medusaX += movimento;
            if (medusaX >= larguraContainer - medusaLargura) {
                medusaX = larguraContainer - medusaLargura;
            }
            medusa.style.left = medusaX + "px";
            break;

        case 'ArrowLeft':
            medusaImg.classList.add("movimento", "esquerda");
            medusaImg.classList.remove("direita");
            medusaX -= movimento;
            if (medusaX <= 0) {
                medusaX = 0;
            }
            medusa.style.left = medusaX + "px";
            break;
    }
}

function parar(evento) {
    evento.preventDefault();

    let tecla = evento.key;

    switch (tecla) {
        case ("ArrowUp"):
        case ("ArrowDown"):
        case ("ArrowRight"):
        case ("ArrowLeft"):
            medusaImg.classList.remove("movimento");
            break;
    }
}