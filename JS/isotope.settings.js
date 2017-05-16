jQuery(document).ready(function ($) {

  var $gallery = $('.gallery').isotope({
    // options
    itemSelector: '.photo',
    layoutMode: 'masonry',
    // filter: '.landscape'
  });

  // Layout Isotope again after all images have loaded
  $gallery.imagesLoaded().progress(function () {
    $gallery.isotope('layout');
  });


  var filters = {};
  // Filter content based on one factor
  $('.filter-list a').on('click', function () {
    var $navGroup = $(this).parents('.filter-list'); // это дает нам весь родительский <ul></ul>
    var filterGroup = $navGroup.attr('data-filter-group'); //теперь берем конкретный атрибут из него

    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      filters[ filterGroup ] = '*';

    } else {
      $navGroup.find('a').removeClass('checked');
      filters[ filterGroup ] = $(this).attr('data-filter');
      $(this).addClass('checked');
    }

    // console.log(filters);
    var filterValue = concatenateValues ( filters );

    $gallery.isotope({
      filter: filterValue
    });
  })

  function concatenateValues( object ) {
    var values = "";
    for ( var value in object ) {
      values += object[value];
    }
    return values;
  }
})