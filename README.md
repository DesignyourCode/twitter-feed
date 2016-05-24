# Twitter Feed

Some lightweight, simple scripts for retrieving Tweets and Tweet Count.
Feel free to create your own and contribute them. I use these 2 often so they are first to be added.

## Getting the examples working

All you need to do is run this is a PHP server and ensure you have added your consumer and secrets keys.
To get consumer and secret keys (<a href="http://www.smartaddons.com/documentation/how-to-get-consumer-key-and-consumer-secret-on-twitter/" target="_blank">here</a> is an example on how to do it that I found, to save you the time of Googling it), you will need to create a Twitter App, in your <a href="https://dev.twitter.com/" target="_blank">Twitter developer account</a>.

```
$settings = array(
    'consumer_key'              => "XXXXXxxxXXXXXxXXXXxxx",
    'consumer_secret'           => "xXxxxXxXXxXxXXxxXXxXXXXxXXxxXXXXXXxxxXxxXX",
    'oauth_access_token'        => "XXXXXXXXX-XXXxxxxXxXXxXXXXXXxxxXxxxXxXXXXXxXXxxxXXxX",
    'oauth_access_token_secret' => "XXxXxXXxXxXXxXxxXXXxXxXxxxXXXXXXXXxXXXXXX"
);
```

You will also need to add your screen name.

```
$screen_name = 'your_screen_name_here';
```