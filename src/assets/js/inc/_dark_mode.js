
exports.dark_mode = function DarkMode_Run(){
    
    const radio_buttons = document.querySelectorAll('.light-dark-switch input');    
    let mode = localStorage.getItem("light-dark-mode")
    
    radio_buttons.forEach(element => {
        if (element.value == mode) {
            element.checked = true;
        }
         
        element.addEventListener("change", e=> {
            if (e.target.checked) {
                mode = e.target.value;
                localStorage.setItem("light-dark-mode", mode);
            }
        })
    });
}
