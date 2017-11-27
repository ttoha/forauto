jQuery(document).ready(function ($) {
    $('.main-ban').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow slick-arrow--left"><span class="sprite sprite-arrow_left"></span></div>',
      nextArrow: '<div class="slick-arrow slick-arrow--right"><span class="sprite sprite-arrow_right"></span></div>',
    });


    $('.product-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow slick-arrow--left"><span class="sprite sprite-arrow_left"></span></div>',
      nextArrow: '<div class="slick-arrow slick-arrow--right"><span class="sprite sprite-arrow_right"></span></div>',
    });
});

;(function ($) {

  var selectors = {
    scope: '[data-accordion-tabs]',
    item: '[data-accordion-tabs-item]',
    link: '[data-accordion-tabs-link]',
    content: '[data-accordion-tabs-content]'
  };
  var tabAll = $(selectors.scope);


  /**
   * Loop all tab components on the page
   * Set active state for first tab item
   */
  tabAll.each(function () {
    var $this = $(this);
    var firstTab = $this.find(selectors.item).first();

    firstTab.find(selectors.link).addClass('js-active');
    firstTab.find(selectors.content).addClass('js-open');

    $this.find('.js-init-active').removeClass('js-init-active');
  });


  /**
   * Tab click event handler.
   * Show tab content of current item and hide other
   */
  tabAll.on('click', selectors.link, function (event) {
    event.preventDefault();

    var tabCurrent = $(event.delegateTarget);
    var tabLink = $(this);

    if (tabLink.hasClass('js-active'))
      return;

    tabCurrent.find('.js-open').removeClass('js-open').hide();
    tabLink.next().toggleClass('js-open').toggle();
    tabCurrent.find('.js-active').removeClass('js-active');
    tabLink.addClass('js-active');
  });

}(jQuery));
