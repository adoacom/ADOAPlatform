router = Backbone.Router.extend(
  routes:
    '': 'indexRender'
    'details-single': 'detailsRender'
    'list-post': 'listRender'
  initialize: ->
    @indexView = new indexView()
    @detailsView = new detailsView()
    @listView = new listView()

  indexRender: ->
    @indexView.render()
    $('#content').html(@indexView.el)
    runSlide()

  detailsRender: ->
    @detailsView.render()
    $('#content').html(@detailsView.el)
    fixContent()

  listRender: ->
    @listView.render()
    $('#content').html(@listView.el)
    fixContent()

)
actionRouter = new router()
Backbone.history.start()
