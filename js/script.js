var link = document.querySelector(".btn-write");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".form-communication");
var user = popup.querySelector("[id=signature]");
var mail = popup.querySelector("[id=e-mail]");
var storage = localStorage.getItem("user");
link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if (storage) {
		user.value = storage;
		mail.focus();
	}
	else {
		user.focus();
	}
	user.focus();
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (event) {
	if (!user.value || !mail.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	}
	else {
		localStorage.setItem("user", user.value);
	}
});
window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		}
	}
});