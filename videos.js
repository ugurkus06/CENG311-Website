$(function() {
    // Turn links into UI buttons
    $("#lang-tr, #lang-en").button();
    $(".language-selector").controlgroup();
  
    // Click logic
    $(".language-selector a").click(function(e) {
      e.preventDefault();
      $(".language-selector a").removeClass("ui-state-active");
      $(this).addClass("ui-state-active");
  
      let lang = $(this).attr("id"); // lang-tr or lang-en
  
      // Language-specific text logic
      if (lang === "lang-tr") {
        $("#videos-title").text("Öne Çıkan Videolar");
        $("#desc1").html(`<p>Atakan Altun - S. Koussevitzky Fa Diyez Minör Kontrbas Konçertosu (1. ve 2. bölümler) <br>
        Hacettepe Üniversitesi Senfoni Orkestrası <br>
        Şef: Bahadır Çokomay <br>
        Kontrbas: Atakan Altun <br>
        30.11.2023</p>`);
        $("#desc2").html(`<p>R. Glière - Tarantella<br></p>
        Atakan Altun - Kontrbas<br>
        Evrim Turan - Piyano`);
        $("#desc3").html(`<p>Atakan Altun, Efil Özdemir - Bottesini Kontrbas Klarnet Gran Duo<br></p>
        Kontrbas: Atakan ALTUN <br>
        Klarnet: Efil ÖZDEMİR <br>
        Hacettepe Gençlik Senfoni Orkestrası`);
        
        
        $("#about-text").text("Hakkında");
        $("#concerts-text").text("Konserler");
        $("#videos-text").text("Videolar");
        $("#photos-text").text("Fotoğraflar");
        $("#contact-text").text("İLETİŞİM");
        $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
        $("#contact-text-footer").text("Bana Ulaşın");
    } else {
        $("#videos-title").text("Featured Videos");        
        $("#desc1").html(`<p>Atakan Altun - S. Koussevitzky Doublebass Concerto in F# Minor (1st and 2nd movements) <br>
          Hacettepe University Symphony Orchestra <br>
          Conductor: Bahadır Çokomay <br>
          Doublebass: Atakan Altun <br>
          30.11.2023</p>`);
        $("#desc2").html(`<p>R. Gliere - Tarantella<br></p>
        Atakan Altun - Doublebass<br>
        Evrim Turan - Piano`);
        $("#desc3").html(`<p>Atakan Altun, Efil Özdemir Bottesini Doublebass Clarinet Gran Duo. <br></p>
        Doublebass: Atakan ALTUN <br>
        Clarinet: Efil ÖZDEMİR <br>
        Hacettepe Youth Symphony Orchestra`);


        $("#about-text").text("About");
        $("#concerts-text").text("Concerts");
        $("#videos-text").text("Videos");
        $("#photos-text").text("Photos");
        $("#contact-text").text("Contact");
        $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
        $("#contact-text-footer").text("Contact Me");
    }
    });

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


    $('.video-slider').on('afterChange', function(event, slick, currentSlide) {
       
        $('.video-desc').hide();

        $('.video-desc[data-index="' + currentSlide + '"]').fadeIn();
    });
  });