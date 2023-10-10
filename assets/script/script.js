// navigation
$('#customer').css('display','none');
$('#item').css('display','none');
$('#order').css('display','none');
$('#place_order').css('display','none');

$('#home_nav').on('click', () => {
    $('#home').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#place_order').css('display', 'none');

    $('#home_nav').addClass('active-page');
    $('#customer_nav').removeClass('active-page');
    $('#item_nav').removeClass('active-page');
    $('#order_nav').removeClass('active-page');
});

$('#customer_nav, #customer_link').on('click', () => {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'block');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#place_order').css('display', 'none');

    $('#home_nav').removeClass('active-page');
    $('#customer_nav').addClass('active-page');
    $('#item_nav').removeClass('active-page');
    $('#order_nav').removeClass('active-page');
});

$('#item_nav, #item_link').on('click', () => {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'block');
    $('#order').css('display', 'none');
    $('#place_order').css('display', 'none');

    $('#home_nav').removeClass('active-page');
    $('#customer_nav').removeClass('active-page');
    $('#item_nav').addClass('active-page');
    $('#order_nav').removeClass('active-page');
});

$('#order_nav, #order_link').on('click', () => {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'block');
    $('#place_order').css('display', 'none');

    $('#home_nav').removeClass('active-page');
    $('#customer_nav').removeClass('active-page');
    $('#item_nav').removeClass('active-page');
    $('#order_nav').addClass('active-page');
});