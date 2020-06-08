$(function() {}

$.ajax({

    URL: 'http://api.twitter.com/1/@vicerdo/show.json',

    data: { screen_name: 'twitter' },

    dataType: 'jsonp',

    success: function(data) {

        $('#followers').html(data.followers_count);

    }

});

});