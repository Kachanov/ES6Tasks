var arrayLink = [];

var piranha = {
    url: "",
    count: 0
};

function get(url) {
    let promise = fetch(url)
        .then(function (response) {
            return response.text();
        })

        .then(function (data) {
            arrayLink.push(...findLink(data, url));
            console.log(data);
            return data;
        })

        .then(function (data) {
            if(data.toString().includes("piranha")){
                piranha.url = url;
                piranha.count++;
            }

            console.log(piranha);
        })

        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

    console.log(arrayLink);
}


function findLink(text, url) {
    var regExp = /href="[^http].+"/g;
    var links = text.match(regExp);
    return links.map((href) => {
        let currentStr = href.replace('href="', '');
        currentStr = currentStr.replace('"', '');
        currentStr = currentStr.replace('//', '/');
        return url + "/" + currentStr ;
    });
}



get("http://marijnhaverbeke.nl/js1k");




