// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><td><%= playcount %></td></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  initialize: function() {
    this.model.on('play', function(){
      this.render();
    }.bind(this));
  },

  render: function(){
    //this.model.set('playcount', 3);
    return this.$el.html(this.template(this.model.attributes));
  }

});
