

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38364911-3']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); 
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(ga, s);
})();

// function trackButtonClick(e) {
//     console.log(e.target.id)
//     _gaq.push(['_trackEvent', e.target.id, 'clicked']);
// };


document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('click', function(e) {
        _gaq.push(['_trackEvent', e.target.id, 'clicked']);
    })
    


    // var buttons = document.querySelectorAll('button');
    // for (var i = 0; i < buttons.length; i++) {
    //   buttons[i].addEventListener('click', trackButtonClick)
    // }
});
  