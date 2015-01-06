var actionCollection, actionModel, hiactionView;

actionModel = Backbone.Model.extend({
  urlRoot: "/actionget"
});

actionCollection = Backbone.Collection.extend({
  url: "/actionget",
  model: actionModel
});

hiactionView = Backbone.View.extend({
  model: new actionModel(),
  collection: new actionCollection(),
  tagName: 'div',
  className: 'contentModifybyBackbone',
  initialize: function() {
    this.listenTo(this.collection, 'reset change destroy sync', this.render);
  },
  render: function() {
    return this.$el.html(Templates['action/index'](actionCollection));
  }
});

//# sourceMappingURL=hiaction.js.map
