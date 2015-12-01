require 'pageflow-public-i18n'

module Pageflow
  module NewPagesBox
    class Engine < Rails::Engine
      isolate_namespace Pageflow::NewPagesBox

      config.autoload_paths << File.join(config.root, 'lib')
    end
  end
end
