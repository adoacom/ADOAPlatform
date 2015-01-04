fixContent = ->
  $("a[data-rel]").each ->
    $(this).attr "rel", $(this).data("rel")
  $("a[rel^='prettyPhoto']").prettyPhoto theme: "light_square"
  #Back Top.
  #Used: Buttton at the corner right to scroll to the top
  $('#back-top').click (e) ->
    $('nav#main-nav a').removeClass("active");
    $('nav#main-nav li.home a').addClass("active");
    e.preventDefault();
    $('body,html').animate({scrollTop:0},800);
  $(".ad_portfolio-widget .ad_carousel").carouFredSel
    responsive: true
    prev:
      button: ->
        $(this).parent().parent().parent().children(".ad_carousel-control").children "a:first-child"

    next:
      button: ->
        $(this).parent().parent().parent().children(".ad_carousel-control").children "a:last-child"

    width: "100%"
    circular: false
    infinite: true
    auto:
      play: true
      pauseDuration: 0
      duration: 2000

    items:
      visible:
        min: 1
        max: 2

      width: 480
      height: "auto"
  $(".ad_related-project .ad_carousel").carouFredSel
    responsive: true
    prev:
      button: ->
        $(this).parent().parent().parent().children(".ad_carousel-control").children "a:first-child"

    next:
      button: ->
        $(this).parent().parent().parent().children(".ad_carousel-control").children "a:last-child"

    width: "100%"
    circular: false
    infinite: true
    auto:
      play: true
      pauseDuration: 0
      duration: 2000

    scroll:
      items: 4
      duration: 400
      wipe: true

    items:
      visible:
        min: 1
        max: 4

      width: 277
      height: "auto"
