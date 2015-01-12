//= require_self
//= require ./new_pages_box/widget

pageflow.widgetTypes.register('new_pages_box', {
  enhance: function(element) {
    element.newPagesBox();
  }
});