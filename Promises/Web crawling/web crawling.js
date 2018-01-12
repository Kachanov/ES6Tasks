var arrayLink = [];

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

get("http://marijnhaverbeke.nl/").then(
    success => {
        console.log("OK");
        console.log(arrayLink);
    },
    fail => console.log("Error"));
