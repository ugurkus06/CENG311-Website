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
        $("#upcoming-conserts").text("Gelecek Konserler");
        $("#previous-conserts").text("Geçmiş Konserler");
        $("#uc1").html(`<p>10 Mayıs 2025 <br><br>
        Ankara - CSO Ada Bankkart Mavi Salon <br><br>
        Nikolai Rimsky-Korsakov - Şehrazat (Kontrbas ve Piyano için) <br><br>
        Düzenleme: Dominik Wagner <br><br>
        Giovanni Bottesini - Grande Allegro di Concerto ‘Alla Mendelssohn’ <br><br>
        Stuart Sankey - Carmen Fantezisi <br><br>
        Doç. Dr. Sibel Sarıcan Gündüz </p>`);
        $("#uc2").html(`<p>16 Mayıs 2025 <br><br>
        İzmir - Ahmet Adnan Saygun Sanat Merkezi, Büyük Salon<br><br>
        Serge Koussevitzky - Fa Diyez Minör Kontrbas Konçertosu, Op. 3<br><br>
        İzmir Devlet Senfoni Orkestrası<br><br>
        Şef: Nesrin Bayramoğulları</p>`);
        $("#pc1").html(`<p>17 Mayıs 2024 <br><br>
        Adana - Adana Büyükşehir Belediyesi Tiyatro Salonu<br><br>
        Serge Koussevitzky - Fa Diyez Minör Kontrbas Konçertosu, Op. 3<br><br>
        Çukurova Devlet Senfoni Orkestrası <br><br>
        Şef: Eray İnal</p>
        `);  
        $("#pc2").html(`<p>26 Aralık 2023 <br><br>
        Ankara - Hacettepe Üniversitesi Ankara Devlet Konservatuvarı Resital Salonu <br><br>
        Hans Fryba - Eski Tarzda Süit <br><br>
        Johannes Brahms - Mi Minör Viyolonsel Sonatı <br><br>
        Piyano: Doç. Dr. Sibel Sarıcan Gündüz
        </p>
        `);  
        $("#pc3").html(`<p>30 Kasım 2023 <br><br>
        Ankara - Hacettepe Üniversitesi Ankara Devlet Konservatuvarı Konser Salonu <br><br>
        Serge Koussevitzky - Fa Diyez Minör Kontrbas Konçertosu, Op. 3 <br><br>
        Hacettepe Üniversitesi Senfoni Orkestrası <br><br>
        Şef: Bahadır Çokamay</p>`); 
        
        
        $("#about-text").text("Hakkında");
        $("#concerts-text").text("Konserler");
        $("#videos-text").text("Videolar");
        $("#photos-text").text("Fotoğraflar");
        $("#contact-text").text("İLETİŞİM");
        $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
        $("#contact-text-footer").text("Bana Ulaşın");
    } else {
        $("#upcoming-conserts").text("Upcoming Conserts");
        $("#previous-conserts").text("Previous Conserts");
        $("#uc1").html(`<p>May 10, 2025 <br><br>
                Ankara - CSO Ada Bankkart Blue Hall <br><br>
                Nikolai Rimsky-Korsakov - Scheherazade (for Double Bass and Piano) <br><br>
                Arrangement: Dominik Wagner <br><br>
                Giovanni Bottesini - Grande Allegro di Concerto ‘Alla Mendelssohn’ <br><br>
                Stuart Sankey - Carmen Fantasy <br><br>
                Assoc. Prof. Dr. Sibel Sarıcan Gündüz </p>`);
        $("#uc2").html(`<p>May 16, 2025 <br><br>
                İzmir - Ahmet Adnan Saygun Arts Center, Grand Hall<br><br>
                Serge Koussevitzky - F# Minor Double Bass Concerto, Op. 3<br><br>
                İzmir State Symphony Orchestra<br><br>
                Conductor: Nesrin Bayramoğulları</p>`);
        $("#pc1").html(`<p>May 17, 2024 <br><br>
                Adana - Adana Metropolitan Municipality Theatre Hall<br><br>
                Serge Koussevitzky - F# Minor Double Bass Concerto, Op. 3<br><br>
                Çukurova State Symphony Orchestra <br><br>
                Conductor: Eray İnal</p>`);  
        $("#pc2").html(` <p>December 26, 2023 <br><br>
                Ankara - Hacettepe University Ankara State Conservatory Recital Hall <br><br>
                Hans Fryba - Suite in Olden Style <br><br>
                Johannes Brahms - Cello Sonata in E Minor <br><br>
                Piano: Assoc. Prof. Dr. Sibel Sarıcan Gündüz
                </p>`);  
        $("#pc3").html(`<p>November 30, 2023 <br><br>
                Ankara - Hacettepe University Ankara State Conservatory Concert Hall <br><br>
                Serge Koussevitzky - F# Minor Double Bass Concerto, Op. 3 <br><br>
                Hacettepe University Symphony Orchestra <br><br>
                Conductor: Bahadır Çokamay</p>`);            
        
        $("#about-text").text("About");
        $("#concerts-text").text("Concerts");
        $("#videos-text").text("Videos");
        $("#photos-text").text("Photos");
        $("#contact-text").text("Contact");
        $("#footer-tm").text("2025 Atakan Altun. All rights reserved.");
        $("#contact-text-footer").text("Contact Me");
    }
    });
  });