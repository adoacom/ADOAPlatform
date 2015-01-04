detailsModel = Backbone.Model.extend(
  urlRoot: "/actionget"
)

detailsCollection = Backbone.Collection.extend(
  url: "/actionget"
  model: detailsModel
)
detailsView = Backbone.View.extend(
  model: new detailsModel()
  collection: new detailsCollection()
  tagName:'div'
  initialize: ->
    @listenTo @collection,'reset change destroy sync',@render
    return
  render: ->
    @$el.html Templates["details-single"]()
    return
)
