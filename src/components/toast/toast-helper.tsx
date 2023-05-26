import './toast.css'

export function handleToast() {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function () { 
        x.className = x.className.replace("show", ""); 
    }, 3000); 
}