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
            return arrayLink;
        })

        .then(function (arrayLink) {
            let regExp = /(piranha)/i;
            console.log(arrayLink);
            for(let i = 1; i < 6; i++){
                let promise = fetch(arrayLink[i])
                    .then(function (response) {
                        return response.text();
                    })

                    .then(function (data) {
                        if(data.toString().match(regExp)){
                            piranha.url = arrayLink[i];
                            piranha.count++;
                            console.log("FIND PIRANHA ON THIS LINK: " + arrayLink[i]);
                            console.log(piranha);
                        }else{
                            console.log("on this link " + arrayLink[i] + " there is no 'piranha' ");
                        }
                    })
            }

            console.log(piranha);
        })

        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

    console.log(arrayLink);
}


function findLink(text, url) {
    let regExp = /href="[^http].+"/g;
    let links = text.match(regExp);
    return links.map((href) => {
        let currentStr = href.replace('href="', '');
        currentStr = currentStr.replace('"', '');
        currentStr = currentStr.replace('//', '/');
        return url + "/" + currentStr ;
    });
}



get("http://marijnhaverbeke.nl");




