export const modal = {
    
    modalwaper: document.querySelector(".container2"),
    titulo: document.querySelector(".container2 main h2"),
    butonClose: document.querySelector(".container2 button.close"),

    open() {
        this.modalwaper.classList.add('open')
    },

    close() {
        this.modalwaper.classList.remove("open")
    }
}


modal.butonClose.onclick = function() {
    modal.close()
}

window.addEventListener('keydown', handlekeydown)

function handlekeydown(event) {
    if(event.key === 'Escape') {
        modal.close()
    }
}