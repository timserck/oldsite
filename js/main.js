  $(document).ready(function() {
          //fct for ink adresss
          $('a[href^="#"]').click(function() {
              var the_id = $(this).attr("href");
              $('html, body').animate({
                  scrollTop: $(the_id).offset().top
              }, 'slow');
              return false;
          });
          //grid
          definegrid = function() {
              var browserWidth = $("canvas").width();
              if (browserWidth <= 960) {
                  pageUnits = 'px';
                  colUnits = 'px';
                  pagewidth = 1020;
                  columns = 34;
                  columnwidth = 30;
                  gutterwidth = 0;
                  pagetopmargin = 0;
                  rowheight = 28.8;
                  gridonload = 'off';
                  makehugrid();
              }
          }
          definegrid();
          setgridonload();
          $(window).resize(function() {
              definegrid();
              setgridonresize();
          });

          //---------------------------------------------google analytics

          (function(i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              i[r] = i[r] || function() {
                  (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date();
              a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-45386033-1', 'auto');
          ga('send', 'pageview');

          //------------------------------------------------------------lab

          if ($('.lab').length > 0) {
              var position_form = $("#form").position().top;

              fct_label = function () {
                  $(".ex__li--label").click(function() {
                      $(".ex__li--label").parent(".ex__li").removeClass("label__active");
                      $(this).parent(".ex__li").toggleClass("label__active");
                      $(jQuery.browser.webkit ? "body" : "html").stop().animate({
                          scrollTop: position_form
                      }, 'slow');
                  });
              }
              fct_label();
              $(window).resize(function() {
                  var position_form = $("#form").position().top;

                  fct_label();
              });
          };

          //----------------------------------------------------------------------404

          if ($('#errord').length > 0) {
              // Project by TImothée Serck for the courses of Mr Kishy
              // function create by https://github.com/bgrins/TinyColor/blob/master/tinycolor.js
              // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
              // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
              function isOnePointZero(n) {
                  return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
              }
              // Check to see if string passed in is a percentage
              function isPercentage(n) {
                  return typeof n === "string" && n.indexOf('%') != -1;
              }
              // Take input from [0, n] and return it as [0, 1]
              function bound01(n, max) {
                  if (isOnePointZero(n)) {
                      n = "100%";
                  }
                  var processPercent = isPercentage(n);
                  n = Math.min(max, Math.max(0, parseFloat(n)));
                  // Automatically convert percentage into number
                  if (processPercent) {
                      n = parseInt(n * max, 10) / 100;
                  }
                  // Handle floating point rounding errors
                  if ((Math.abs(n - max) < 0.000001)) {
                      return 1;
                  }
                  // Convert into [0, 1] range if it isn't already
                  return (n % max) / parseFloat(max);
              }
              // Force a hex value to have 2 characters
              function pad2(c) {
                  return c.length == 1 ? '0' + c : '' + c;
              }
              // `rgbToHex`
              // Converts an RGB color to hex
              // Assumes r, g, and b are contained in the set [0, 255]
              // Returns a 3 or 6 character hex
              function rgbToHex(r, g, b, allow3Char) {
                  var hex = [
                      pad2(Math.round(r).toString(16)),
                      pad2(Math.round(g).toString(16)),
                      pad2(Math.round(b).toString(16))
                  ];
                  // Return a 3 character hex if possible
                  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
                  }
                  return hex.join("");
              }
              // `hslToRgb`
              // Converts an HSL color value to RGB.
              // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
              // *Returns:* { r, g, b } in the set [0, 255]
              function hslToRgb(h, s, l) {
                  var r, g, b;
                  h = bound01(h, 360);
                  s = bound01(s, 100);
                  l = bound01(l, 100);

                  function hue2rgb(p, q, t) {
                      if (t < 0) t += 1;
                      if (t > 1) t -= 1;
                      if (t < 1 / 6) return p + (q - p) * 6 * t;
                      if (t < 1 / 2) return q;
                      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                      return p;
                  }
                  if (s === 0) {
                      r = g = b = l; // achromatic
                  } else {
                      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                      var p = 2 * l - q;
                      r = hue2rgb(p, q, h + 1 / 3);
                      g = hue2rgb(p, q, h);
                      b = hue2rgb(p, q, h - 1 / 3);
                  }
                  return {
                      r: r * 255,
                      g: g * 255,
                      b: b * 255
                  };
              }
              //set the variable body
              var section = document.getElementById('errord');
              //set the variable hours
              var hours = document.getElementById('hours');
              //set the array tableau
              var tableau = [];
              //set a loop each 1sec
              setInterval(function() {
                  tableau.length = 0;
                  //clear the array tableau
                  //set the date to the variable var ( date hours minute second )
                  var now = new Date();
                  // take only the second value to the varable seconde
                  var seconde = parseInt(('0' + now.getSeconds()).slice(-2));
                  // push the variable second to the array tableau
                  tableau.push(seconde);
                  // set the variable hue to get the all color of the circle chromatic for each hours
                  var hue = (360 / 60) * seconde;
                  // set the variable rgb with the hsl syntax to rgb syntax
                  var rgb = hslToRgb(hue, 100, 50);
                  // set the variable rgb with the rgb syntax to hex syntax
                  var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
                  // set the background color to # + the varriable hex
                  // body.style.backgroundColor = "#"+hex;
                  section.style.backgroundColor = "#" + hex;
                  // main.style.backgroundColor = "#"+hex;
                  hours.innerHTML = "#" + hex;
              }, 1000);
          }
      });