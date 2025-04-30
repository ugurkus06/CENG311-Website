$(document).ready(function () {
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function () {
                $(this).dialog("close");
            }
        }
    });

    $("#contact-form").on("submit", function (e) {
        e.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        // check
        if (!name) {
            $("#name").effect("shake");
            return;
        }
        if (!emailPattern.test(email)) {
            $("#email").effect("shake");
            return;
        }
        if (!message) {
            $("#message").effect("shake");
            return;
        }

        // successful pop
        $("#dialog-message").html(`Thank you <strong>${name}</strong>, we will get back to you at <strong>${email}</strong> soon!`);
        $("#dialog").dialog("open");

        // reset
        $("#contact-form")[0].reset();
    });
});
