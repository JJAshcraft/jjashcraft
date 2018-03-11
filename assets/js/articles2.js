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

    for(var i = 0;i < data.items.length;++i){

        output += '<div' + ' id="' + [i] + '">'
        output += '<p><h2>' +
        data.items[i].title + '</h2></p>';
        output += '<p><h5>' +
        data.items[i].pubDate + '</h5></p>';

        output += data.items[i].content;

        sideOutput += '<p><a href="' + '#' + [i] + '"><h4>' +
        data.items[i].title + '</h4></a></p>';

    }


    content.innerHTML = output;
    sidebar.innerHTML = sideOutput;


});
