$(function() {
        var $content = $('#content');
        var data = {
            rss_url: 'https://www.medium.com/feed/@jjashcraft'
        };
$.get('https://api.rss2json.com/v1/api.json', data, function(response) {
            if (response.status == 'ok') {
                var output = '<h1>' + response.feed.title + '</h1>';
$.each(response.items, function(k, item) {
                    output += '<h2><a href="' + item.link + '" >' + item.title + '</h2></a>';
                    output += '<p>' + item.description + '</p>';
                });
$content.html(output);
}
});
});
