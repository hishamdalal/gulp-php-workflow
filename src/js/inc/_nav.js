function nav() {
    const toggle_checkbox = document.querySelector("#toggle");
    const nav_tools = document.querySelector(".tools");
    toggle_checkbox.addEventListener('change', (event)=> {
        nav_tools.classList.toggle('active');
    });
    
}
