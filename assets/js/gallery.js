$(document).ready(function() {
  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.portfolio-item',
  });


  $('.filters-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value

    $grid.isotope({
      filter: filterValue
    });



  });

  $('.allButtons').on('click', '.btn', function() {
    $(this).removeClass('btn-dark').addClass('btn-light').siblings().removeClass('btn-light').addClass('btn-dark');
  });


  // Your code
});
