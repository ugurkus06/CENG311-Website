$(document).ready(function () { // site now loads videos from youtube api instead of using iframe

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
  