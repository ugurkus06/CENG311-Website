$(function () {
    
    $("#lang-tr, #lang-en").button();
    $(".language-selector").controlgroup();

    let currentLang = "lang-en";   // default; will change on click

    function applyTranslations(lang) {
        if (lang === "lang-tr") {
            $("#videos-title").text("Öne Çıkan Videolar");
            $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
            $("#contact-text-footer").text("Bana Ulaşın");

            $("#desc0").html(`<h3>Konser Bilgisi</h3><div><p>Atakan Altun- Sarasate Zigeunerweisen<br>Kontrbas: Atakan Altun</p></div>`);
            $("#desc1").html(`<h3>Konser Bilgisi</h3><div><p>S. Koussevitzky Fa Diyez Minör Kontrbas Konçertosu (I-II)<br>HÜ Senfoni Ork., Şef: Bahadır Çokomay</p></div>`);
            $("#desc2").html(`<h3>Konser Bilgisi</h3><div><p>R. Glière - Tarantella<br>Kontrbas: Atakan Altun&nbsp;&nbsp;Piyano: Evrim Turan</p></div>`);
        } else {
            $("#videos-title").text("Featured Videos");
            $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
            $("#contact-text-footer").text("Contact Me");

            $("#desc0").html(`<h3>Concert Info</h3><div><p>Atakan Altun – Sarasate Zigeunerweisen<br>Double-bass: Atakan Altun</p></div>`);
            $("#desc1").html(`<h3>Concert Info</h3><div><p>S. Koussevitzky Double-bass Concerto in F♯ minor (I-II)<br>Hacettepe Univ. Symphony, cond. Bahadır Çokomay</p></div>`);
            $("#desc2").html(`<h3>Concert Info</h3><div><p>R. Glière – Tarantella<br>Double-bass: Atakan Altun&nbsp;&nbsp;Piano: Evrim Turan</p></div>`);
        }

        /* refresh accordion so the updated <div> tags are recognised */
        $(".video-desc.ui-accordion").accordion("refresh");
    }

    $(".language-selector a").on("click", function (e) {
        e.preventDefault();
        $(".language-selector a").removeClass("ui-state-active");
        $(this).addClass("ui-state-active");
        currentLang = this.id;
        applyTranslations(currentLang);
    });

    const API_KEY   = "AIzaSyAjmOEr_l5Ll8-CRu8L-vMDXQvsWh0r81Q"; // restricted access out of this site so it should be relatively safe to post it publicly
    const CHANNELID = "UCKOabxG4StnhJOVA9xcl25Q";
    const MAX       = 3;

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNELID}&part=snippet&order=date&maxResults=${MAX}&type=video`)
        .then(r => r.ok ? r.json() : Promise.reject(r))
        .then(addSlidesAndDescriptions)          // <- create markup first
        .then(initSliderAndAccordion)           // <- then activate plugins
        .then(() => applyTranslations(currentLang)) // <- finally translate
        .catch(err => {
            console.error("YouTube API error", err);
            
            if (currentLang == "lang-tr")
                $(".video-slider").text("Videolar yüklenemedi 😞");
            else
            $(".video-slider").text("Could not load videos 😞");
        });


    /** builds <div class="video-slide"> + <div class="video-desc"> */
    function addSlidesAndDescriptions(data) {
        data.items.forEach((item, idx) => {
            const videoId = item.id.videoId;

            /* slide */
            $(".video-slider").append(
                `<div class="video-slide">
                     <iframe src="https://www.youtube.com/embed/${videoId}"
                             allowfullscreen></iframe>
                 </div>`);

            /* matching description, hidden by default */
            $("#video-descriptions").append(
                `<div id="desc${idx}" class="video-desc" data-index="${idx}" style="display:none;"></div>`);
        });
    }

    /** activates Slick and the first accordion, and wires afterChange */
    function initSliderAndAccordion() {
        $('.video-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
            nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
        });

        /* show + accordion-ise the first description */
        $('.video-desc[data-index="0"]')
            .show()
            .accordion({ collapsible:true, active:0, heightStyle:"content" });

        /* when slide changes, swap description & re-initialise accordion */
        $('.video-slider').on('afterChange', function (e, slick, cur) {
            $('.video-desc').hide();
            let $cur = $('.video-desc[data-index="'+cur+'"]');
            $cur.fadeIn(0);

            /* (re)apply accordion */
            $(".video-desc.ui-accordion").accordion("destroy");
            $cur.accordion({ collapsible:true, active:0, heightStyle:"content" });
        });
    }
});
