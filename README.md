           <style>
        .win-nav {
          position: fixed;
          transition: transform 500ms;
        }

        .hide {
          transform: translateY(-110px);
        }
        
      </style>

        <script>
          $(window).scroll(function () {
            var st = $(this).scrollTop();
          var banner = $('.win-nav');
          setTimeout(function () {
                if (st > lastScrollTop) {
            banner.addClass('hide');
                } else {
            banner.removeClass('hide');
                }
          lastScrollTop = st;
            }, 100);
        });
        </script>