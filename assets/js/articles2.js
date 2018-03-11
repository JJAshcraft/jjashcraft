
var content = document.getElementById('content');
var sidebar = document.getElementById('sidebar');

$.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://www.medium.com/feed/@jjashcraft',
            api_key: 'daaojcgetrusjckgyl79sstz3fcg6hpny06ukdis', // put your api key here
            count: 5
        }
}).done(function (response) {
    if(response.status != 'ok'){ throw response.message; }

    console.log('====== ' + response.feed.title + ' ======');

    var output = '';
    var sideOutput = '';

    for(var i in response.items){
            var item = response.items[i];
            console.log(item.title);

            // output += '<div ' + ' id="' + [i] + '">'
            // output += '<a class="anchor" id="top"></a>'

        output += '<div>'
        output += '<a class="anchor" id="' + [i] + '"></a>'
        output += '<p><h2>' +
        item.title + '</h2></p>';
        output += '<p><h5>' +
        item.pubDate + '</h5></p>';

        output += item.content;

        sideOutput += '<p><a href="' + '#' + [i] + '"><h5>' + '<i class="fas fa-file-alt"></i> - ' +
        item.title + '</h5></a></p><hr>';
      }

content.innerHTML = output;
sidebar.innerHTML = sideOutput;
});
