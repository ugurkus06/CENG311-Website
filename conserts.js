$(function () {
    let currentLang = "en"; // default language

    // initial load
    loadConcerts(currentLang);

    // language switch buttons
    $("#lang-tr, #lang-en").button();
    $(".language-selector").controlgroup();

    $(".language-selector a").click(function (e) {
        e.preventDefault();
        $(".language-selector a").removeClass("ui-state-active");
        $(this).addClass("ui-state-active");

        currentLang = $(this).attr("id") === "lang-tr" ? "tr" : "en";

        updateStaticText(currentLang);
        loadConcerts(currentLang);
    });

    // update static labels
    function updateStaticText(lang) {
        if (lang === "tr") {
            $("#upcoming-concerts-title").text("Gelecek Konserler");
            $("#previous-concerts-title").text("Geçmiş Konserler");
            $("#about-text").text("Hakkında");
            $("#concerts-text").text("Konserler");
            $("#videos-text").text("Videolar");
            $("#photos-text").text("Fotoğraflar");
            $("#contact-text").text("İletişim");
            $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
            $("#contact-text-footer").text("Bana Ulaşın");
        } else {
            $("#upcoming-concerts-title").text("Upcoming Concerts");
            $("#previous-concerts-title").text("Previous Concerts");
            $("#about-text").text("About");
            $("#concerts-text").text("Concerts");
            $("#videos-text").text("Videos");
            $("#photos-text").text("Photos");
            $("#contact-text").text("Contact");
            $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
            $("#contact-text-footer").text("Contact Me");
        }
    }

    // load concerts from correct JSON file
    function loadConcerts(lang) {
        const file = lang === "tr" ? "json_files/concerts_turkish.json" : "json_files/concerts.json";
        $.getJSON(file, function (data) {
            $("#upcoming-container").empty();
            $("#previous-container").empty();
            render("#upcoming-container", data.upcoming);
            render("#previous-container", data.previous);
        });
    }

    // render concert cards
    function render(selector, concerts) {
        const $container = $(selector);
        concerts.forEach((concert) => {
            const $card = $(`
        <div class="concert-card">
          <div class="summary">
            <strong>${formatDate(concert.date)}</strong><br>${concert.location}
          </div>
          <div class="details" style="display:none;"></div>
        </div>
      `);
            concert.program.forEach((item) =>
                $card.find(".details").append(`<p>${item}</p>`)
            );
            $card.on("click", () => $card.find(".details").slideToggle(200));
            $container.append($card);
        });
    }

    // convert date to readable format
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
});