var actionRouter, router;

router = Backbone.Router.extend({
  routes: {
    '': 'indexRender',
    'details': 'hiRender',
    'getdataTB': 'TBRender'
  },
  initialize: function() {
    this.indexView = new indexView();
    this.hiactionView = new hiactionView();
    return this.TBView = new actionTBView();
  },
  indexRender: function() {
    this.indexView.render();
    return $('#content').html(this.indexView.el);
  },
  hiRender: function() {
    this.hiactionView.render();
    return $('.contentModifybyBackbone').html(this.hiactionView.el);
  },
  TBRender: function() {
    this.TBView.collection.fetch();
    this.TBView.render();
    return $('.contentModifybyBackbone').html(this.TBView.el);
  }
});

actionRouter = new router();

Backbone.history.start();

//# sourceMappingURL=routes.js.map
