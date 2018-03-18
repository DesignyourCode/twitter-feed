$(document).ready(function(){
  
    // Tweets
    var $tweetContainer = $('.tweets'),
        tweetNum = $tweetContainer.data('tweet');

    if( $tweetContainer.length > 0 ) {
        $.ajax({
            url: '/providers/tweets.php',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                for (var i = 0; i < tweetNum; i++) {
                    try {
                        var tweet = response[i],
                            tweetImage = '';

                        if (tweet.quoted_status !== undefined) {
                            var imageUrl = tweet.quoted_status.extended_entities.media[0].media_url;

                            if (imageUrl !== undefined && imageUrl !== '') {
                                tweetImage = '<img class="twitter-img" src="'+imageUrl+'">';
                            }
                        }

                        var urlregexp = new RegExp("((http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,5}(:[a-zA-Z0-9]*)?/?(([a-zA-Z0-9\-_\?\'/\\\+&amp;%\$#\=~]|[\,\.](?! )))*)");
                        $tweetContainer.append(
                            '<p>'+
                                '<span class="tweet-content">'+
                                    '<span class="twitter-avatar">'+
                                        '<img class="avatar" src="'+tweet.user.profile_image_url+'">'+
                                    '</span>'+
                                    '<span class="icon icon--twitter" aria-label="View on Twitter" title="View on Twitter" role="presentation"></span>'+
                                    '<a href="https://twitter.com/'+tweet.user.screen_name+'" target="_blank" class="twitter-identity">'+
                                        '<span class="twitter-name">'+tweet.user.name+'</span>'+
                                        '<span class="twitter-screen-name">@'+tweet.user.screen_name+'</span>'+
                                    '</a>'+
                                    tweet.text.replace(urlregexp, '<a href="$1" target="_blank"><nobr>$1</nobr></a>') + tweetImage +
                                '</span>'+
                            '</p>'
                        );
                    } catch (e) {}
                }
            },
            error: function(errors) {
                $tweetContainer.find('p:first').text('Request error');
            }
        });
    }

    // Tweet Count
    $.ajax({
        url: '/providers/tweet_count.php',
        type: 'GET',
        success: function(count) {
            $('.tweet-count').text(count);
        }
    });

});