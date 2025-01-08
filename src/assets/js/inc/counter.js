let x = 1;

function count() {
    const btn = document.querySelector("#button");
    btn.addEventListener('click', ()=> {
        btn.textContent  = 'Counter: ' + x++;
    });
    
}

exports.count = count;