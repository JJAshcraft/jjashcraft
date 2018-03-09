  var content = document.getElementById('content');
  var sidebar = document.getElementById('sidebar');


    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            if(data.status == 'ok'){

                var output = '';
                var sideOutput = '';

                for(var i=0;i<data.items.length;++i){

                    output += '<p><h2>' +
                    data.items[i].title + '</h2></p>';

                    output += data.items[i].content;

                    sideOutput += '<p><h2>' +
                    data.items[i].title + '</h2></p>';

                }


                content.innerHTML = output;
                sidebar.innerHTML = sideOutput;

            }
        }
    };
    xhr.open('GET','https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jjashcraft',true);
    xhr.send();
