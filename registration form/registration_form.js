document.getElementById("role").addEventListener("change", function () {
    const technicianFields = document.getElementById("technician-fields");
    if (this.value === "technician") {
        technicianFields.style.display = "block";
    } else {
        technicianFields.style.display = "none";
    }
});

document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration form submitted successfully!");
});
