<?php

require_once('twitter_proxy.php');

$settings = array(
    'consumer_key'              => "XXXXXxxxXXXXXxXXXXxxx",
    'consumer_secret'           => "xXxxxXxXXxXxXXxxXXxXXXXxXXxxXXXXXXxxxXxxXX",
    'oauth_access_token'        => "XXXXXXXXX-XXXxxxxXxXXxXXXXXXxxxXxxxXxXXXXXxXXxxxXXxX",
    'oauth_access_token_secret' => "XXxXxXXxXxXXxXxxXXXxXxXxxxXXXXXXXXxXXXXXX"
);

$url = 'https://api.twitter.com/1.1/users/show.json';
$screen_name = 'designyourcode';
$getfield = '?screen_name=' . $screen_name;

$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$tweets = json_decode($twitter->setGetfield($getfield)
                              ->buildOauth($url, $requestMethod)
                              ->performRequest());

$count = json_encode($tweets->statuses_count);

echo $count;
