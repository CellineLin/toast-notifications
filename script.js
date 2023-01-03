const notif = document.querySelector(".notif"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer : 3000,

    success: {
        icon : "fa-circle-check",
        text : "Success: Success Toast!"
    },
    error: {
        icon : "fa-solid fa-circle-xmark",
        text : "Error : Something wrong here!"
    },
    warning: {
        icon : "fa-solid fa-triangle-exclamation",
        text : "Warning : your toast in danger!"
    },
    info: {
        icon : "fa-solid fa-circle-info",
        text : "Info : i got message for you!"
    },

}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {
    const {icon, text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick = "removeToast(this.parentElement)"></i>`;
  notif.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});