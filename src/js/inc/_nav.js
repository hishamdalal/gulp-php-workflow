exports.nav = function() {
    
    const toggle_checkbox = document.querySelector("#toggle");
    const nav_tools = document.querySelector(".tools");
    
    toggle_checkbox.addEventListener('change', (e)=> {
        e.target.checked ? nav_tools.classList.add('active') : nav_tools.classList.remove('active');
    });
    
}
