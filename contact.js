
$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        // check empty
        if (!name || !email || !message) {
            $("#form-response").text("Please fill out all fields.");
            return;
        }

        // check format
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            $("#form-response").text("Please enter a valid email address.");
            return;
        }

        // successful
        $("#form-response").html(`Thank you <strong>${name}</strong>, we will get back to you at <strong>${email}</strong> soon!`);
        $("#contact-form")[0].reset(); // reset
    });
});
