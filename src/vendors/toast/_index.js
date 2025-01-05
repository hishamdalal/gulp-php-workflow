 
const Toastify  = require('toastify-js')


exports.toast = function () {
    const btns = document.querySelectorAll('[data-toast]');
    btns.forEach(element => {
        element.addEventListener('click', (e) => {
          console.log(e.target.dataset.msg);  
          const type = e.target.dataset.type;
            const msg = e.target.dataset.msg;
            
            Toastify({
              text: msg,
              duration: 30000,
              close: true,
              className: type,
              gravity: "bottom", // `top` or `bottom`
              style: {
                //background: "linear-gradient(to right, #00b09b, #96c93d)",
              }
            }).showToast();

        });
    });
}
