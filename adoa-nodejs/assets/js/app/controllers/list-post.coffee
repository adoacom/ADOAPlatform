listModel = Backbone.Model.extend(
  urlRoot: "/actionget"
)

listCollection = Backbone.Collection.extend(
  url: "/actionget"
  model: listModel
)
listView = Backbone.View.extend(
  model: new listModel()
  collection: new listCollection()
  tagName:'div'
  initialize: ->
    @listenTo @collection,'reset change destroy sync',@render
    return
  render: ->
    @$el.html Templates["list-post"]()
)
