var actionCollection, actionModel, indexView;

actionModel = Backbone.Model.extend({
  urlRoot: "/actionget"
});

actionCollection = Backbone.Collection.extend({
  url: "/actionget",
  model: actionModel
});

indexView = Backbone.View.extend({
  model: new actionModel(),
  collection: new actionCollection(),
  tagName: 'div',
  initialize: function() {
    this.listenTo(this.collection, 'reset change destroy sync', this.render);
  },
  render: function() {}
});

//# sourceMappingURL=index.js.map
