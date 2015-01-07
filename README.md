# Pageflow Progress Navigation Bar

A small box listing the pages that were added since your last visit

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-new-pages-box'

Register the widget type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.widget_types.register(Pageflow::NewPagesBox.widget_type)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/new_pages_box

    # app/assets/stylesheets/pageflow/application.css.scss
    @import "pageflow/new_pages_box";

    # Adding basic style to your theme
    # app/assets/stylesheets/pageflow/themes/default.css.scss
    @import "pageflow/new_pages_box/themes/default";

Execute `bundle install` Restart the application server.

## Troubleshooting

If you run into problems while installing the page type, please also refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting) wiki
page in the [Pageflow  repository](https://github.com/codevise/pageflow). If that
doesn't help, consider
[filing an issue](https://github.com/upsworld/pageflow-new-pages-box/issues).