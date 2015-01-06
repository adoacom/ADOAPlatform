actionModel = Backbone.Model.extend(
  urlRoot: "/actionget"
)

actionCollection = Backbone.Collection.extend(
  url: "/actionget"
  model: actionModel
)
indexView = Backbone.View.extend(
  model: new actionModel()
  collection: new actionCollection()
  tagName:'div'
  initialize: ->
    @listenTo @collection,'reset change destroy sync',@render
    return
  render: ->
    @$el.html Templates["index"]()

)
#startLoop = ->
#  myInterval = setInterval(runSlide, iFrequency) # run
#  return
#stopLoop = ->
#  clearInterval myInterval
#  return
runSlide = ->
  pos = $(".ad_metro-wrapper .thumb").position()
  barpos = pos.left
  pos = $(".ad_metro-wrapper .overview").position()
  slidepos = pos.left

  #increment calculation
  barinc = ($(".ad_metro-wrapper .track").width() - $(".ad_metro-wrapper .thumb").width()) / movement
  widthconst = $(window).width()
  widthconst = $(".container").width() + 50  if $("body").hasClass("boxed")
  slideinc = (widthconst - $(".ad_metro-wrapper .ad_metro-slider").width()) / movement

  # make 0 again when reach max
  iDo = (iDo + 1) % (movement + 1)

  #animate the metroslider
  $("html.no-touch .ad_metro-wrapper .thumb").animate
    left: iDo * barinc
  , 1000, ->

  $("html.no-touch .ad_metro-wrapper .overview").animate
    left: iDo * slideinc - iDo * 2
  , 1000, ->

  $("html.touch .ad_metro-wrapper .viewport").animate
    scrollLeft: iDo * (($(".ad_metro-wrapper .ad_metro-slider").width() - $(window).innerWidth()) / movement)
  , 1000, ->

  return
