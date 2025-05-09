$(document).ready(function () { // site now loads videos from youtube api instead of using iframe


    $("#lang-tr, #lang-en").button();            // turn into jQuery-UI buttons
    $(".language-selector").controlgroup();      // group them

    let currentLang = "lang-en";                 // default language

    // one function that (re)writes all translatable text
    function applyTranslations(lang) {
        if (lang === "lang-tr") {
            $("#videos-title").text("Öne Çıkan Videolar");
            $("#desc1").html(`<h3>Konser Bilgisi</h3><div><p>Atakan Altun - S. Koussevitzky Fa Diyez Minör Kontrbas Konçertosu (1. ve 2. bölümler)<br>Hacettepe Üniversitesi Senfoni Orkestrası<br>Şef: Bahadır Çokomay<br>Kontrbas: Atakan Altun<br>30.11.2023</p></div>`);
            $("#desc2").html(`<h3>Konser Bilgisi</h3><div><p>R. Glière - Tarantella<br>Atakan Altun - Kontrbas<br>Evrim Turan - Piyano</p></div>`);
            $("#desc3").html(`<h3>Konser Bilgisi</h3><div><p>Atakan Altun, Efil Özdemir - Bottesini Kontrbas Klarnet Gran Duo<br>Kontrbas: Atakan ALTUN<br>Klarnet: Efil ÖZDEMİR<br>Hacettepe Gençlik Senfoni Orkestrası</p></div>`);
            $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
            $("#contact-text-footer").text("Bana Ulaşın");
        } else {
            $("#videos-title").text("Featured Videos");
            $("#desc1").html(`<h3>Concert Info</h3><div><p>Atakan Altun - S. Koussevitzky Double-bass Concerto in F# Minor (1st & 2nd movements)<br>Hacettepe University Symphony Orchestra<br>Conductor: Bahadır Çokomay<br>Double-bass: Atakan Altun<br>30 Nov 2023</p></div>`);
            $("#desc2").html(`<h3>Concert Info</h3><div><p>R. Glière - Tarantella<br>Atakan Altun - Double-bass<br>Evrim Turan - Piano</p></div>`);
            $("#desc3").html(`<h3>Concert Info</h3><div><p>Atakan Altun, Efil Özdemir - Bottesini Double-bass Clarinet Gran Duo<br>Double-bass: Atakan ALTUN<br>Clarinet: Efil ÖZDEMİR<br>Hacettepe Youth Symphony Orchestra</p></div>`);
            $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
            $("#contact-text-footer").text("Contact Me");
        }

        
        $("#desc1,#desc2,#desc3").accordion?.("refresh");
    }

    // click handler toggles active state & reapplies text
    $(".language-selector a").on("click", function (e) {
        e.preventDefault();
        $(".language-selector a").removeClass("ui-state-active");
        $(this).addClass("ui-state-active");
        currentLang = this.id;               // "lang-tr" or "lang-en"
        applyTranslations(currentLang);
    });  
  
  
  const API_KEY = 'AIzaSyAjmOEr_l5Ll8-CRu8L-vMDXQvsWh0r81Q';  // the api key was restricted to be only usable in this website 
                                                                // which makes it protected
    const CHANNEL_ID = 'UCKOabxG4StnhJOVA9xcl25Q';
    const MAX_RESULTS = 3;
  
    const videoSlider = $('.video-slider');
    const videoDescriptions = $('#video-descriptions');
  
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search`,
      method: 'GET',
      data: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        part: 'snippet',
        order: 'date',
        maxResults: MAX_RESULTS,
        type: 'video'
      },
      success: function (response) {
        response.items.forEach((item, index) => {
          const videoId = item.id.videoId;
          const title = item.snippet.title;
          const description = item.snippet.description;
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
          // Add video iframe to slider
          videoSlider.append(`
            <div>
              <iframe src="${embedUrl}" allowfullscreen></iframe>
            </div>
          `);
  
          // Add video description
          videoDescriptions.append(`
            <div class="video-desc" data-index="${index}" ${index > 0 ? 'style="display:none;"' : ''}>
              <h3>${title}</h3>
              <div>
                <p>${description}</p>
              </div>
            </div>
          `);
        });
  
        // Optional: initialize slick slider if needed
        $('.video-slider').slick();
      },
      error: function () {
        console.error('Failed to fetch videos from YouTube API');
      }
    });



  });
  