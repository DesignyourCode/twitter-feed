$(document).ready(function(){
  
    // Tweets
    $.ajax({
        url: '/providers/tweets.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (typeof response.errors === 'undefined' || response.errors.length < 1) {
                
                var $tweets = $('.tweets-container');
                $.each(response, function(i, obj) {
                    $tweets.append(
                        '<div class="tweet">' +
                            '<p><i class="fa fa-twitter"></i> ' + obj.text +
                        '</div>'
                    );
                });

            } else {
                $('.tweets-container p:first').text('Response error');
            }
        },
        error: function(errors) {
            $('.tweets-container p:first').text('Request error');
        }
    });

    // Tweet Count
    $.ajax({
        url: '/providers/tweet_count.php',
        type: 'GET',
        success: function(count) {
            $('.tweet-count').text(count);
        }
    });

});