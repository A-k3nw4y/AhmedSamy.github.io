/*global $, console, setInterval, document, ProgressBar, require, container*/
$(function () {
    "use strict";
    // start seemore Button
    $(".seemore-b").on("click", function () {
        if ($(this).hasClass('see-bottom1')) {
            $("html, body").animate({
                scrollTop: $("section.about").offset().top
            }, 900);
        }
        // section"about"
        if ($(this).hasClass('see-up2')) {
            $("html, body").animate({
                scrollTop: $("header").offset().top
            }, 900);
        }
        if ($(this).hasClass('see-bottom2')) {
            $("html, body").animate({
                scrollTop: $("section.skills").offset().top
            }, 900);
        }
        // end

        // section skills
        if ($(this).hasClass('see-up3')) {
            $("html, body").animate({
                scrollTop: $("section.about").offset().top
            }, 900);
        }
        if ($(this).hasClass('see-bottom3')) {
            $("html, body").animate({
                scrollTop: $("section.projects").offset().top
            }, 900);
        }
        // end

        // se ction projects
        if ($(this).hasClass('see-up4')) {
            $("html, body").animate({
                scrollTop: $("section.skills").offset().top
            }, 900);
        }
        if ($(this).hasClass('see-bottom4')) {
            $("html, body").animate({
                scrollTop: $("section.contact").offset().top
            }, 900);
        }
        // end
        // section contact
        if ($(this).hasClass('see-up5')) {
            $("html, body").animate({
                scrollTop: $("section.projects").offset().top
            }, 900);
        }

    });
    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    var bar = new ProgressBar.Circle(container1, {
        color: '#f4f4f4',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#333', width: 1 },
        to: { color: '#f4f4f4', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', '#f4f4f4');
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
              circle.setText('');
          } else {
              circle.setText('HTML');
          }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(.95);  // Number from 0.0 to 1.0
    // ------------------------------------
    var bar = new ProgressBar.Circle(container2, {
        color: '#f4f4f4',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#f4f4f4', width: 1 },
        to: { color: '#f4f4f4', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', '#f4f4f4');
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
              circle.setText('');
          } else {
              circle.setText('CSS');
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';

      bar.animate(.90);  // Number from 0.0 to 1.0
    // -----------------------
    var bar = new ProgressBar.Circle(container3, {
        color: '#f4f4f4',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#f4f4f4', width: 1 },
        to: { color: '#f4f4f4', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', '#f4f4f4');
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
              circle.setText('');
          } else {
              circle.setText('JavaScript');
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';

      bar.animate(.6);  // Number from 0.0 to 1.0
    // ---------------------------
    var bar = new ProgressBar.Circle(container4, {
        color: '#f4f4f4',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#f4f4f4', width: 1 },
        to: { color: '#f4f4f4', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', '#f4f4f4');
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
              circle.setText('');
          } else {
              circle.setText('JQuery');
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';

      bar.animate(.8);  // Number from 0.0 to 1.0

// -------------------------------------nav---------------------------
$(".show-nav-b").on({
  mouseover: function () {
    $(".nav-b").removeClass('none')
    $(this).css("width", "50")
 },
  mouseout: function () {$(".nav-b").addClass('none')}
});

$(".nav-b").on("click", function () {
  if( $('nav').hasClass('hide-nav') ){
    $('nav').removeClass('hide-nav').addClass('show-nav');
  } else {
    $('nav').addClass('hide-nav');
  }
  if( $('.nav-b span.lnr').hasClass('lnr-menu') ){
    $('.nav-b span.lnr').removeClass('lnr-menu').addClass('lnr-cross');
  } else {
    $('.nav-b span.lnr').addClass('lnr-menu').removeClass('lnr-cross');
  }
});









});