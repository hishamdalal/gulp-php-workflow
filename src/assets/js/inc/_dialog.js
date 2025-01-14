 
exports.dialog = function () {
    
    // https://stackoverflow.com/a/77827220   
    
    const open_dialog = document.querySelectorAll('.open_dialog');
    const close_dialog = document.querySelector(".close_dialog");
    const out_dialog_close = document.querySelector("dialog");
    
    open_dialog.forEach((element, i) => { 
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const target = element.getAttribute('for');
            console.log(target);
            const current_dialog = document.querySelector(target);
            
            current_dialog.showModal();
        });
    });
    
    close_dialog.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close();
    });
    
    out_dialog_close.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}
