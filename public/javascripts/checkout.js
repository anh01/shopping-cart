
// P@ssfor..
// 4242424242424242

const PUBLIC_KEY = 'pk_test_WOnXuhbPkhB7spgPZYNMznNC';
const SECRET_KEY= 'sk_test_HP2EmokBxhsYtEWuh94UgzNL';

Stripe.setPublishableKey(PUBLIC_KEY);

var $form = $('#checkout-form');

$form.submit(function(event) {
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val()
    }, stripeResponseHandler);
    return false;
}); 

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!
        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission
    } else { // Token was created!
        // Get the token ID:
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // Submit the form:
        $form.get(0).submit();
  }
}
