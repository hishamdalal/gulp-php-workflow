exports.nav = function() {
    
    let getSiblings = function (e) {
        // for collecting siblings
        let siblings = []; 
        // if no parent, return no sibling
        if(!e.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = e.parentNode.firstChild;
        //console.log(sibling);
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling.children[0]);
                //console.log(sibling.children[0]);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };

    const toggle_checkbox = document.querySelector("#toggle");
    const nav_tools = document.querySelector(".tools");
    
    toggle_checkbox.addEventListener('change', (e)=> {
        e.target.checked ? nav_tools.classList.add('active') : nav_tools.classList.remove('active');
    });
    
    
    const dropdown_toggle = document.querySelectorAll(".nav-link");
    //const dropdown_menu = document.querySelector(".dropdown-menu");
    
    dropdown_toggle.forEach((element, i) => {
        //console.log(element);
        element.addEventListener('click', (e)=> {
            //console.log(e.target.classList);
            
            let tab_siblings = getSiblings(e.target.parentNode);
            console.log(tab_siblings);
            tab_siblings.map(el => el.classList.remove('show'));
      
            e.target.classList.toggle('show');
            //nav_tools.classList.remove('active');
        });
    });
    

    // https://stackoverflow.com/a/77235541
    
    document.addEventListener('click', (event) => {
        // Check if click done inside popover
        const container = event.target.closest('.dropdown-toggle');

        // Check if popover open/close button was clicked
        const buttonTarget = event.target.dataset.target;

        // Ensure all popovers are closed if not requested or clicked inside
        for (let popover of document.getElementsByClassName('dropdown-toggle')) {
            if (popover.id === buttonTarget && popover.style.display !== `block`) {
                popover.classList.add('show');
            } else if (!container) {
                popover.classList.remove('show');
            }
        }
    }, false);    
    
    //document.addEventListener('DOMContentLoaded', function() {
    //    console.log("checked:", toggle_checkbox.checked);
    //});
}
