$.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://www.medium.com/feed/@jjashcraft',
            api_key: 'daaojcgetrusjckgyl79sstz3fcg6hpny06ukdis', // put your api key here
            count: 2
        }
}).done(function (response) {
    if(response.status != 'ok'){ throw response.message; }

    console.log('====== ' + response.feed.title + ' ======');

    for(var i in response.items){
        var item = response.items[i];
        console.log(item.title);

    }
});
