 
const Toastify  = require('toastify-js')

console.log('Vectors and icons by "Solar Icons" https://www.figma.com/community/file/1166831539721848736?ref=svgrepo.com"\nin CC Attribution License via SVG Repo -> https://www.svgrepo.com/');

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
              stopOnFocus: true,
              avatar: "assets/img/icons/"+type+".svg",
              className: type,
              // position: "left",
              gravity: "bottom", // `top` or `bottom`
              style: {
                //background: "linear-gradient(to right, #00b09b, #96c93d)",
              }
            }).showToast();

        });
    });
}
