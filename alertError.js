export const alerta = {
    element:  document.querySelector(".alerta"),

    open() {
        alerta.element.classList.add("open")
    },
    close() {
        alerta.element.classList.remove("open")
    }
}