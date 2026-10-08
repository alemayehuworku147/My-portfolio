function showMessage() {
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    if (name.trim() === "") {
        document.getElementById("message").innerText = "Please enter your name";
        return;
    }

    if (email.trim() === "") {
        document.getElementById("message").innerText = "Please enter your email";
        return;
    }

    if (message.trim() === "") {
        document.getElementById("message").innerText = "Please write your message";
        return;
    }

    document.getElementById("message").innerText =
        "Message sent successfully!";
}
