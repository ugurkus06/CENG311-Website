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
        $("#about-txt").html(`<strong>ATAKAN ALTUN (2003) – Kontrbas Sanatçısı</strong> <br><br>

            Atakan Altun, genç yaşına rağmen ulusal ve uluslararası sahnelerde önemli başarılar elde etmiş bir kontrbas sanatçısıdır. 2013 yılında Hacettepe Üniversitesi Ankara Devlet Konservatuvarı’nın giriş sınavını kazanarak <strong>Prof. Dr. Burak Karaağaç</strong> ile kontrbas eğitimine başlamıştır. Teknik yetkinliği ve müzikal ifadesiyle kısa sürede dikkat çekmiş, Türkiye'nin önde gelen orkestralarında solist olarak sahne alma fırsatı yakalamıştır. <br><br>
            <strong>Ulusal ve Uluslararası Ödüller</strong> <br><br>

            2023 yılında Altun, Polonya’da düzenlenen <strong>Uluslararası Grzegorz Olkiewicz Kontrbas Yarışması</strong>nda hem <strong>birincilik ödülünü</strong> hem de yarışmanın en büyük ödülü olan <strong>Grzegorz Olkiewicz Büyük Ödülü</strong>nü kazanmıştır. <br><br>
            <strong>Ek olarak:</strong> <br><br> • <strong>2018</strong> – <strong>İstanbul Devlet Senfoni Orkestrası Ulusal Genç Yetenekler Yarışması</strong>’nda <strong>ikincilik ödülü</strong> ve solo konser. <br><br> • <strong>2017</strong> – ABD’de düzenlenen <strong>ISB (Uluslararası Kontrbasçılar Derneği) Uluslararası Kontrbas Yarışması</strong>nda mansiyon ödülü. <br><br> • <strong>2016</strong> – Polonya’da düzenlenen <strong>Uluslararası Kontrbas Yarışması</strong>nda <strong>birincilik ödülü</strong>. <br><br>

<strong>Solist Olarak Verdiği Konserler</strong> <br><br> • <strong>2024</strong> – <strong>Çukurova Devlet Senfoni Orkestrası</strong> ile “Genç Yetenekler” konserinde solist olarak sahne aldı. <br><br> • <strong>2023</strong> – <strong>Cumhurbaşkanlığı Senfoni Orkestrası</strong>nın “Genç Kuşak Solistler” seçmelerini kazandı ve orkestra eşliğinde konser verdi. <br><br> • <strong>2023</strong> – <strong>Hacettepe Üniversitesi Senfoni Orkestrası</strong>nın solist seçmelerini kazandı ve <strong>Serge Koussevitzky’nin “Fa Diyez Minör Kontrbas Konçertosu”</strong>nu seslendirdi. <br><br> • <strong>2023</strong> – Aynı orkestranın bir başka solist seçmesini daha kazanarak, <strong>Giovanni Bottesini’nin “Si Minör Kontrbas Konçertosu”</strong>nu <strong>Şef Rengim Gökmen</strong> yönetiminde seslendirdi. <br><br> • <strong>2019</strong> – <strong>Eskişehir Büyükşehir Belediyesi Senfoni Orkestrası</strong>nın “Genç Solistler” seçmelerini kazandı ve solist olarak konser verdi. <br><br> • <strong>2019</strong> – <strong>Hacettepe Üniversitesi Gençlik Senfoni Orkestrası</strong> ile birlikte <strong>Bottesini’nin “Klarnet ve Kontrbas için Gran Duo”</strong> eserini seslendirdi. <br><br> • <strong>2018</strong> – <strong>Ulusal Genç Yetenekler Yarışması</strong>nda kazandığı <strong>ikincilik ödülü</strong> kapsamında <strong>İstanbul Devlet Senfoni Orkestrası</strong> eşliğinde solist olarak sahne aldı. <br><br>`);
        
$("#about-txt2").html(`<strong>Sahne Aldığı Orkestralar</strong> <br><br>
    • Doğuş Çocuk Senfoni Orkestrası <br><br>
    • Ankara Gençlik Senfoni Orkestrası (AGSO) <br><br>
    • Türkiye Ulusal Gençlik Filarmoni Orkestrası (TUGFO) <br><br>
    • Pan Kafkasya Gençlik Orkestrası (PCYO) – <strong>Tsinandali Festivali</strong> kapsamında <strong>Vasily Petrenko, Charles Dutoit, Oksana Lyniv ve Claudio Vandelli</strong> ile çalıştı. <br><br>
    • Bilkent Gençlik Senfoni Orkestrası <br><br>
    • Eskişehir Büyükşehir Belediyesi Senfoni Orkestrası <br><br>
    • KKTC Cumhurbaşkanlığı Senfoni Orkestrası <br><br>
    • Orkestra Akademik Başkent <br><br>
    • Başkent Oda Orkestrası <br><br>
    • Hacettepe Üniversitesi Gençlik Senfoni Orkestrası <br><br>
    • Hacettepe Üniversitesi Senfoni Orkestrası <br><br>

    <strong>Ustalık Sınıfları ve Eğitim</strong> <br><br>

    Kontrbas eğitimi süresince Atakan Altun, dünya çapında tanınan sanatçılarla çalışma fırsatı yakalamış; <strong>Dorin Marc, Rinat Ibragimov, Jeff Bradetich, Dominik Wagner, Catalin Rotaru, Miloslav Gajdos, Song Yi, Brendan Kane, Wang Ting Yu, David Murray, Miloslav Jelinek, Irena Olkiewicz, Einars Upatnieks, Gunars Upatnieks, Rob Dirksen, Martin Sranko, Panu Parssinen, Jan Krigovsky, Mette Hanskov, Adam Bogacki, Waldemar Tamowski, Grzegorz Frankowski, Krzysztof Korzen, Sonia Ray, Czeslaw Zabek ve Jakub Olejnik</strong> gibi isimlerin ustalık sınıflarına aktif olarak katılmıştır. <br><br>

    <strong>2022</strong> yılında, <strong>Pirastro Strings</strong> tarafından düzenlenen <strong>“19. Pirastro Strings Elit Solistler Programı”</strong>nı kazanmış ve dünyaca ünlü kontrbas sanatçıları <strong>Dominik Wagner</strong> ve <strong>Jeff Bradetich</strong>’in ustalık sınıflarına katılmıştır. <br><br>

    Eğitimine halen <strong>Hacettepe Üniversitesi Ankara Devlet Konservatuvarı</strong>’nda <strong>Prof. Dr. Burak Karaağaç</strong> danışmanlığında lisans düzeyinde devam etmektedir. <br><br>
    `);

        
        $("#about-text").text("Hakkında");
        $("#concerts-text").text("Konserler");
        $("#videos-text").text("Videolar");
        $("#photos-text").text("Fotoğraflar");
        $("#contact-text").text("İLETİŞİM");
        $("#footer-tm").text("2025 Atakan Altun. Tüm hakları saklıdır.");
        $("#contact-text-footer").text("Bana Ulaşın");
    } 
    
    else {
        $("#about-txt").html(`<strong>ATAKAN ALTUN (2003) – Double Bass Artist</strong> <br><br>

            Atakan Altun is a double bass artist who has achieved significant success on national and international stages despite his young age. In 2013, he passed the entrance exam of Hacettepe University Ankara State Conservatory and began his double bass education with <strong>Prof. Dr. Burak Karaağaç</strong>. With his technical proficiency and musical expression, he quickly gained attention and had the opportunity to perform as a soloist with some of Turkey's leading orchestras. <br><br>
            <strong>National and International Awards</strong> <br><br>

            In 2023, Altun won both the <strong>1st prize</strong> and the <strong>Grzegorz Olkiewicz Grand Prix</strong>, the highest award of the competition, at the <strong>International Grzegorz Olkiewicz Double Bass Competition</strong> held in Poland. <br><br>

            Additionally: <br><br>
            •	<strong>2018</strong> – <strong>2nd prize</strong> and a solo concert at the <strong>Istanbul State Symphony Orchestra National Young Talents Competition</strong>. <br><br>
            •	<strong>2017</strong> – Honorable mention at the <strong>ISB (International Society of Bassists) International Double Bass Competition</strong> in the USA. <br><br>
            •	<strong>2016</strong> – <strong>1st prize</strong> at the <strong>International Double Bass Competition</strong> in Poland. <br><br>

            <strong>Concerts as a Soloist</strong> <br><br>
            •	<strong>2024</strong> – Performed as a soloist in the Young Talents concert with the <strong>Çukurova State Symphony Orchestra</strong>. <br><br>
            •	<strong>2023</strong> – Won the “Young Generation Soloists” selections of the <strong>Presidential Symphony Orchestra</strong> and performed with the orchestra. <br><br>
            •	<strong>2023</strong> – Won the soloist selections of the <strong>Hacettepe University Symphony Orchestra</strong> and performed <strong>Serge Koussevitzky’s “F# Minor Double Bass Concerto”</strong>. <br><br>
            •	<strong>2023</strong> – Won another soloist selection of the same orchestra and performed <strong>Giovanni Bottesini’s “B Minor Double Bass Concerto”</strong> under the baton of conductor <strong>Rengim Gökmen</strong>. <br><br>
            •	<strong>2019</strong> – Won the “Young Soloists” selections of the <strong>Eskişehir Metropolitan Municipality Symphony Orchestra</strong> and performed as a soloist. <br><br>
            •	<strong>2019</strong> – Performed <strong>Bottesini’s “Gran Duo for Clarinet and Double Bass”</strong> with the <strong>Hacettepe University Youth Symphony Orchestra</strong>. <br><br>
            •	<strong>2018</strong> – Performed as a soloist with the <strong>Istanbul State Symphony Orchestra</strong> as part of the <strong>2nd prize</strong> he won at the <strong>National Young Talents Competition</strong>. <br><br>`);
            
        $("#about-txt2").html(` <strong>Orchestras He Has Performed With</strong> <br><br>
            •	Doğuş Children's Symphony Orchestra <br><br>
            •	Ankara Youth Symphony Orchestra (AGSO) <br><br>
            •	Turkish National Youth Philharmonic Orchestra (TUGFO) <br><br>
            •	Pan Caucasian Youth Orchestra (PCYO) – Worked with <strong>Vasily Petrenko, Charles Dutoit, Oksana Lyniv, and Claudio Vandelli</strong> during the <strong>Tsinandali Festival</strong>. <br><br>
            •	Bilkent Youth Symphony Orchestra <br><br>
            •	Eskişehir Metropolitan Municipality Symphony Orchestra <br><br>
            •	TRNC Presidential Symphony Orchestra <br><br>
            •	Orchestra Academic Başkent <br><br>
            •	Başkent Chamber Orchestra <br><br>
            •	Hacettepe University Youth Symphony Orchestra <br><br>
            •	Hacettepe University Symphony Orchestra <br><br>

            <strong>Masterclasses and Education</strong> <br><br>

            Throughout his double bass education, Atakan Altun had the opportunity to work with world-renowned artists, actively participating in masterclasses by <strong>Dorin Marc, Rinat Ibragimov, Jeff Bradetich, Dominik Wagner, Catalin Rotaru, Miloslav Gajdos, Song Yi, Brendan Kane, Wang Ting Yu, David Murray, Miloslav Jelinek, Irena Olkiewicz, Einars Upatnieks, Gunars Upatnieks, Rob Dirksen, Martin Sranko, Panu Parssinen, Jan Krigovsky, Mette Hanskov, Adam Bogacki, Waldemar Tamowski, Grzegorz Frankowski, Krzysztof Korzen, Sonia Ray, Czeslaw Zabek, and Jakub Olejnik</strong>. <br><br>

            In <strong>2022</strong>, he won the <strong>“19th Annual Pirastro Strings Elite Soloists Program”</strong> organized by <strong>Pirastro Strings</strong> and attended masterclasses by world-renowned double bass artists <strong>Dominik Wagner and Jeff Bradetich</strong>.<br><br>

            He is currently continuing his undergraduate studies at <strong>Hacettepe University Ankara State Conservatory</strong> under the guidance of <strong>Prof. Dr. Burak Karaağaç</strong>.`);   
        
        
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