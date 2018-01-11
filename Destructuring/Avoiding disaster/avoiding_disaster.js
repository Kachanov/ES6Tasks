function go(options = {speed: 4,
    enable : {
        hyperdrive : false,
        frobnifier : false
    }}) {

    let {speed,
        enable : {
            hyperdrive,
            frobnifier
        }
    } = options;


    console.log("speed=", speed,
        "hyperdrive:", hyperdrive,
        "frobnifier:", frobnifier);
}

go();

