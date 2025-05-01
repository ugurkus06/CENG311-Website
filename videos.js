$(function () {
    // Turn language buttons into jQuery UI buttons
    $("#lang-tr, #lang-en").button();

    // Group the language selector buttons
    $(".language-selector").controlgroup();

    // Handle language switching logic
    $(".language-selector a").click(function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Toggle active language state
        $(".language-selector a").removeClass("ui-state-active");
        $(this).addClass("ui-state-active");

        let lang = $(this).attr("id"); // 'lang-tr' or 'lang-en'

        // Update all text content based on selected language
        if (lang === "lang-tr") {
            $("#videos-title").text("Öne Çıkan Videolar");

            // Turkish video descriptions with <h3> and <div> for accordion
            $("#desc1").html(`<h3>Konser Bilgisi</h3><div><p>Atakan Altun - S. Koussevitzky Fa Diyez Minör Kontrbas Konçertosu (1. ve 2. bölümler)<br>Hacettepe Üniversitesi Senfoni Orkestrası<br>Şef: Bahadır Çokomay<br>Kontrbas: Atakan Altun<br>30.11.2023</p></div>`);
            $("#desc2").html(`<h3>Konser Bilgisi</h3><div><p>R. Glière - Tarantella<br>Atakan Altun - Kontrbas<br>Evrim Turan - Piyano</p></div>`);
            $("#desc3").html(`<h3>Konser Bilgisi</h3><div><p>Atakan Altun, Efil Özdemir - Bottesini Kontrbas Klarnet Gran Duo<br>Kontrbas: Atakan ALTUN<br>Klarnet: Efil ÖZDEMİR<br>Hacettepe Gençlik Senfoni Orkestrası</p></div>`);

            // Update footer and menu
            $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
            $("#contact-text-footer").text("Bana Ulaşın");
        } else {
            $("#videos-title").text("Featured Videos");

            // English video descriptions with <h3> and <div> for accordion
            $("#desc1").html(`<h3>Concert Info</h3><div><p>Atakan Altun - S. Koussevitzky Doublebass Concerto in F# Minor (1st and 2nd movements)<br>Hacettepe University Symphony Orchestra<br>Conductor: Bahadır Çokomay<br>Doublebass: Atakan Altun<br>30.11.2023</p></div>`);
            $("#desc2").html(`<h3>Concert Info</h3><div><p>R. Gliere - Tarantella<br>Atakan Altun - Doublebass<br>Evrim Turan - Piano</p></div>`);
            $("#desc3").html(`<h3>Concert Info</h3><div><p>Atakan Altun, Efil Özdemir Bottesini Doublebass Clarinet Gran Duo<br>Doublebass: Atakan ALTUN<br>Clarinet: Efil ÖZDEMİR<br>Hacettepe Youth Symphony Orchestra</p></div>`);

            // Update footer and menu
            $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
            $("#contact-text-footer").text("Contact Me");
        }

        // Destroy any existing accordions before reapplying
        $(".video-desc").each(function () {
            if ($(this).hasClass("ui-accordion")) {
                $(this).accordion("destroy");
            }
        });

        // Apply accordion to the currently visible description
        $('.video-desc:visible').accordion({
            collapsible: true,
            active: 0,
            heightStyle: "content"
        });
    });

    // Initialize Slick slider
    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: false,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
    });

    // On video change, update description and activate accordion
    $('.video-slider').on('afterChange', function (event, slick, currentSlide) {
        // Hide all descriptions
        $('.video-desc').hide();

        // Show the current one
        let $desc = $('.video-desc[data-index="' + currentSlide + '"]');
        $desc.fadeIn();

        // Destroy existing accordions
        $(".video-desc").each(function () {
            if ($(this).hasClass("ui-accordion")) {
                $(this).accordion("destroy");
            }
        });

        // Apply accordion only to the current one
        $desc.accordion({
            collapsible: true,
            active: 0,
            heightStyle: "content"
        });
    });

    // Initialize accordion on the first description on page load
    $('.video-desc[data-index="0"]').accordion({
        collapsible: true,
        active: 0,
        heightStyle: "content"
    });
});
