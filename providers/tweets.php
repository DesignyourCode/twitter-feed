<?php

require_once('twitter_proxy.php');

$settings = array(
    'consumer_key'              => "XXXXXxxxXXXXXxXXXXxxx",
    'consumer_secret'           => "xXxxxXxXXxXxXXxxXXxXXXXxXXxxXXXXXXxxxXxxXX",
    'oauth_access_token'        => "XXXXXXXXX-XXXxxxxXxXXxXXXXXXxxxXxxxXxXXXXXxXXxxxXXxX",
    'oauth_access_token_secret' => "XXxXxXXxXxXXxXxxXXXxXxXxxxXXXXXXXXxXXXXXX"
);
 
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$screen_name = 'your_screen_name_here';
$limit = 10; // this needs to match or be great than the data tag
$getfieldwithcount = '?screen_name=' . $screen_name . '&count=' . $limit;

$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$tweets = json_decode($twitter->setGetfield($getfieldwithcount)
                              ->buildOauth($url, $requestMethod)
                              ->performRequest());

$all_tweets = json_encode($tweets);

echo $all_tweets;