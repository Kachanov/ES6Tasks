var arrayLink = [];

var piranha = {
    url: "",
    count: 0
};

function get(url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.onload = function () {
            if(this.status == 200){
                resolve(this.response);
                arrayLink.push(findLink(request.responseText, url));
            }else{
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        request.onerror = function () {
            reject(new Error("Network error"));
        };

        request.send();
    });
}

function findLink(text, url) {
    var regExp = /href="[^http].+"/g;
    var links = text.match(regExp);
    return links.map((href) => {
        let currentStr = href.replace('href="', '');
        currentStr = currentStr.replace('"', '');
        currentStr = currentStr.replace('//', '/');
        return url + currentStr ;
    });
}


/*
get("http://marijnhaverbeke.nl/").then(
    success => {
        console.log("OK");
        console.log(arrayLink);
        return arrayLink;
    },
    fail => console.log("Error"))
    .then(search => {
        for(let i = 0; i < arrayLink.length; i++) {
            let request = new XMLHttpRequest();
            request.open("GET", arrayLink[i], true);
            var substring = "Piranha";
            if(request.responseText.includes(substring)){
                piranha.url = arrayLink[i];
                piranha.count++;
            }
            console.log(request.responseText);
        }
        console.log(piranha);
    });
*/

    let promise = fetch("http://marijnhaverbeke.nl/js1k/")
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            if(data.toString().toLowerCase().includes("piranha")){
                piranha.url = "http://marijnhaverbeke.nl/js1k/";
                piranha.count++;
            }
            console.log(piranha);
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
