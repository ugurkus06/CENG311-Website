$(document).ready(function () {

    let currentLanguage = "lang-en";
    
    // Turn links into UI buttons
    $("#lang-tr, #lang-en").button();
    $(".language-selector").controlgroup();
  
    // Click logic
    $(".language-selector a").click(function(e) {
      e.preventDefault();
      $(".language-selector a").removeClass("ui-state-active");
      $(this).addClass("ui-state-active");
  
      let lang = $(this).attr("id"); // lang-tr or lang-en
      currentLanguage = $(this).attr("id");
      // Language-specific text logic
      if (lang === "lang-tr") {
        $("#contact-me-logo").text("Bana Ulaşın");
        $("#label-name").text("İsmi:");
        $("#label-message").text("Mesajınız:");
        $("#send-button").text("Yolla");

        $("#dialog").dialog("option", "title", "Mesaj Yollandı");
        
        
        $("#about-text").text("Hakkında");
        $("#concerts-text").text("Konserler");
        $("#videos-text").text("Videolar");
        $("#photos-text").text("Fotoğraflar");
        $("#contact-text").text("İLETİŞİM");
        $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
        $("#contact-text-footer").text("Bana Ulaşın");
    } else {
        $("#contact-me-logo").text("Contact Me");
        $("#label-name").text("Name:");
        $("#label-message").text("Message:");
        $("#send-button").text("Send");

        $("#dialog").dialog("option", "title", "Message Sent");
        
        $("#about-text").text("About");
        $("#concerts-text").text("Concerts");
        $("#videos-text").text("Videos");
        $("#photos-text").text("Photos");
        $("#contact-text").text("Contact");
        $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
        $("#contact-text-footer").text("Contact Me");
    }
    });


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
        if (currentLanguage === "lang-tr"){
            $("#dialog-message").html(`Teşekkürler <strong>${name}</strong>, ${email}</strong> adresine en kısa zamanda geri dönüş yapacağım!`);
        }
        else{
            $("#dialog-message").html(`Thank you <strong>${name}</strong>, we will get back to you at <strong>${email}</strong> soon!`);

        }
        $("#dialog").dialog("open");

        // reset
        $("#contact-form")[0].reset();
    });

});
