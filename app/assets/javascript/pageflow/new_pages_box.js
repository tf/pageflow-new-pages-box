//= require_self
//= require ./progress_navigation_bar/widget

pageflow.widgetTypes.register('new_pages_box', {
  enhance: function(element) {
    element.newPagesBox();
  }
});