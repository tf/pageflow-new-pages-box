module Pageflow
  module NewPagesBox
    class WidgetType < Pageflow::WidgetType
      def name
        'new_pages_box'
      end

      def roles
        ['new_pages_box']
      end
    end
  end
end
