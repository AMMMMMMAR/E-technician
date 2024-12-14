document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    alert("Sign-up successful!");
});
