/*global IScroll*/

(function($) {
  $.widget('pageflow.newPagesBox', {
    _create: function() {
      var unvisitedPages = [],
      that = this;

      this.wrapperElement = this.element.find('.new_pages_box_wrapper'),

      pageflow.ready.then(function() {
        unvisitedPages =  pageflow.visited.getUnvisitedPages();

        if(unvisitedPages.length > 0) {
          that.wrapperElement.delay( 1000 ).fadeIn( 1000 );

          for(var i = 0; i < unvisitedPages.length; i++) {
           that.wrapperElement.find('a[href="#'+ unvisitedPages[i] + '"]').addClass('unvisited');
          };
          wrapperElement.find("a.navigation_site_detail:not(.unvisited)").parent().remove();

          if(unvisitedPages.length > 3) {
            that.wrapperElement.find(".additional_pages_hint").show();
            that.wrapperElement.find(".additional_pages_hint .number").html(unvisitedPages.length-3);
          }
        }
      });

      that.wrapperElement.find('.close_hint').on('click', function() {
        that.wrapperElement.fadeOut("1000");

      });

      pageflow.slides.on('pageactivate', function(e) {
        that.wrapperElement.fadeOut("1000");
      });
    }
  });
}(jQuery));
