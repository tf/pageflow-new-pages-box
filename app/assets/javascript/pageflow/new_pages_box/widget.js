(function($) {
  $.widget('pageflow.newPagesBox', {
    _create: function() {
      var wrapperElement = this.element.find('.new_pages_box_wrapper');

      pageflow.ready.then(function() {
        var unvisitedPages = pageflow.visited.getUnvisitedPages();

        if (unvisitedPages.length > 0) {
          _.chain(unvisitedPages).first(3).each(function(permaId) {
            var link = wrapperElement.find('a[href="#'+ permaId + '"]');
            link.parent().show();
          });

          if (unvisitedPages.length > 3) {
            wrapperElement.find(".additional_pages_hint").show();
            wrapperElement.find(".additional_pages_hint span").html(unvisitedPages.length - 3);
          }

          wrapperElement.delay(1000).fadeIn(1000);
        }
      });

      wrapperElement.find('.close_hint').on('click', function() {
        wrapperElement.fadeOut(500);
      });

      pageflow.slides.on('pageactivate', function(e) {
        wrapperElement.fadeOut(1000);
      });
    }
  });
}(jQuery));
