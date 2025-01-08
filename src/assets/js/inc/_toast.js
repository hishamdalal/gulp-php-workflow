const Toastify  = require('toastify-js')


exports.toast = function () {
    const btns = document.querySelectorAll('[data-toast]');
    btns.forEach(element => {
        element.addEventListener('click', (e) => {
          
            const type = e.target.dataset.type;
            const msg = e.target.dataset.msg;
            console.log(type, msg);  
            
            Toastify({
              duration: 93000,
              stopOnFocus: true,
              text: msg,
              className: type,
              gravity: "bottom", // `top` or `bottom`
              style: {
                //background: "linear-gradient(to right, #00b09b, #96c93d)",
                position: "absolute",
                bottom: 0,
              }
            }).showToast();

        });
    });
}
