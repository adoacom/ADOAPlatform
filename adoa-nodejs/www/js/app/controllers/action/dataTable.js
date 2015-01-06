var TBCollection, TBModel, actionTBView, dataTemplate;

TBModel = Backbone.Model.extend({
  urlRoot: "/action/getdataTB"
});

TBCollection = Backbone.Collection.extend({
  url: "/action/getdataTB",
  model: TBModel
});

dataTemplate = "<table> <thead> <td>STT</td> <td>Name</td> <td>Description</td> <td>Email</td> </thead> {{#if models}} {{#each models}} {{#with attributes}} <tr> <td>{{stt}}</td> <td>{{name}}</td> <td>{{description}}</td> <td>{{email}}</td> </tr> {{/with}} {{/each}} {{/if}} </table>";

_.templateSettings = {
  interpolate: '/\{\{(.+?)\}\}/g'
};

actionTBView = Backbone.View.extend({
  template: _.template(dataTemplate),
  model: new TBModel(),
  collection: new TBCollection(),
  tagName: 'div',
  className: 'contentModifybyBackbone',
  initialize: function() {
    this.listenTo(this.collection, 'reset change destroy sync', this.render);
  },
  render: function() {
    return this.$el.html(this.template(this.collection));
  }
});

//# sourceMappingURL=dataTable.js.map
