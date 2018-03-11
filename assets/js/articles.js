  var content = document.getElementById('content');
  var sidebar = document.getElementById('sidebar');


    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            if(data.status == 'ok'){

                var output = '';

                for(var i in response.items){
                        var item = response.items[i];
                        console.log(item.title);


                    output += '<div' + ' id="' + [i] + '">'
                    output += '<p><h2>' +
                    item.title + '</h2></p>';
                    output += '<p><h5>' +
                    item.pubDate + '</h5></p>';

                    output += item.content;


                }


                content.innerHTML = output;


            }
        }
    };

    xhr.open('GET','https://api.rss2json.com/v1/api.json?&rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jjashcraft&api_key=daaojcgetrusjckgyl79sstz3fcg6hpny06ukdis&count=2',true);
    xhr.send();
