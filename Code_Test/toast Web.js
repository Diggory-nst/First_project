function ShowSucess() {
    toast({
        title: 'Success',
        message: 'Anyone with access can view your invited visitors',
        type: 'success',
        duration: 2000
    });
}

function ShowInfo() {
    toast({
        title: 'Info',
        message: 'Anyone with access can view your invited visitors',
        type: 'info',
        duration: 2000
    });
}

function toast({ title, message, type, duration }) {
    const main = document.querySelector('#toast');

    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-exclamation'
        }

        const delay = (duration / 1000).toFixed(2);
        const icon = icons[type];
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `<div class="toast__icon toast--${type}">
                           <i class="${icon}" ></i>
                           </div>
                           <div class="toast__body">
                           <h3 class="toast__title">${title}</h3>
                           <p class="toast__msg">Anyone with access can view your invited visitors</p>
                           </div>
                           <div class="toast__close">
                           <i class="fa-solid fa-xmark"></i>
                           </div>`;

        toast.classList.add('toast', `toast__border--${type}`);

        main.appendChild(toast);
    }
}