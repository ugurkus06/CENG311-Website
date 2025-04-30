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
        $("#main-txt").text("Genç yaşına rağmen uluslararası sahnede kendini kontrbas sanatçısı olarak kanıtlayan Atakan Altun, solo performansları, prestijli orkestralarla iş birlikleri ve aldığı uluslararası ödüllerle adından söz ettirmiştir. Müzikal ifadesinin derinliği ve teknik ustalığıyla dikkat çeken sanatçı, sanat yolculuğuna Hacettepe Üniversitesi Ankara Devlet Konservatuvarı'nda başlamış, çalışmalarına Prof. Dr. Burak Karaağaç ile devam etmektedir.");
        
        
        $("#about-text").text("Hakkında");
        $("#concerts-text").text("Konserler");
        $("#videos-text").text("Videolar");
        $("#photos-text").text("Fotoğraflar");
        $("#contact-text").text("İLETİŞİM");
        $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
        $("#contact-text-footer").text("Bana Ulaşın");
    } else {
        $("#main-txt").text("Atakan Altun, despite his young age, has proven himself on the international stage as a double bass artist. He has made a name for himself through his solo performances, collaborations with prestigious orchestras, and the international awards he has received. Noted for the depth of his musical expression and technical mastery, he began his artistic journey at Hacettepe University Ankara State Conservatory and continues his studies under Prof. Dr. Burak Karaağaç.");
        
        
        $("#about-text").text("About");
        $("#concerts-text").text("Concerts");
        $("#videos-text").text("Videos");
        $("#photos-text").text("Photos");
        $("#contact-text").text("Contact");
        $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
        $("#contact-text-footer").text("Contact Me");
    }
    });

    $("#imageGallery").lightSlider({
        gallery: false,
        item: 1,
        loop: true,
        slideMargin: 0
    });
  });