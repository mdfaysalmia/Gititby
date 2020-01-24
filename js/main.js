jQuery(document).ready(function(){

    

    $(".protfolio-item").owlCarousel({
        items : 1,
        loop : true,
        // nav : true,
        dots : true,
        // navText : ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        autoplay : false,
    });

   

/* ..............circleProgress.......................*/
    $("._78-skillbar").circleProgress({
        value : 0.78,
        size : 220,
        thickness : 5,
        fill : '#a96ab6',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(78 * progress) + '<i>%</i>');
      });
    $("._83-skillbar").circleProgress({
        value : 0.83,
        size : 220,
        thickness : 5,
        fill : '#a96ab6',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(83 * progress) + '<i>%</i>');
      });
    $("._76-skillbar").circleProgress({
        value : 0.76,
        size : 220,
        thickness : 5,
        fill : '#a96ab6',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(76 * progress) + '<i>%</i>');
      });

    
});