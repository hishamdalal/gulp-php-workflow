const SweetAlert = require("sweetalert");

exports.sweet_alert = function (){
    const alertBtns = document.querySelectorAll('.alert');

    alertBtns.forEach(btn=> {

        btn.addEventListener('click', (e)=> {
            console.log(e.target.dataset);
            const icon = e.target.dataset.alertType;
            const title = e.target.dataset.alertTitle;
            const msg = e.target.dataset.alertMsg;
            swal(title, msg, icon);
        })
    })
}
