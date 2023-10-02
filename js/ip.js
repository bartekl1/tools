// https://stackoverflow.com/questions/20194722/can-you-get-a-users-local-lan-ip-address-via-javascript/52894196#52894196
const findLocalIp = (logInfo = true) =>
    new Promise((resolve, reject) => {
        window.RTCPeerConnection =
            window.RTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.webkitRTCPeerConnection;

        if (typeof window.RTCPeerConnection == "undefined")
            return reject("WebRTC not supported by browser");

        let pc = new RTCPeerConnection();
        let ips = [];

        pc.createDataChannel("");
        pc.createOffer()
            .then((offer) => pc.setLocalDescription(offer))
            .catch((err) => reject(err));
        pc.onicecandidate = (event) => {
            if (!event || !event.candidate) {
                // All ICE candidates have been sent.
                if (ips.length == 0)
                    return reject("WebRTC disabled or restricted by browser");

                return resolve(ips);
            }

            let parts = event.candidate.candidate.split(" ");
            let [
                base,
                componentId,
                protocol,
                priority,
                ip,
                port,
                ,
                type,
                ...attr
            ] = parts;
            let component = ["rtp", "rtpc"];

            if (!ips.some((e) => e == ip)) ips.push(ip);

            if (!logInfo) return;

            // console.log(" candidate: " + base.split(':')[1]);
            // console.log(" component: " + component[componentId - 1]);
            // console.log("  protocol: " + protocol);
            // console.log("  priority: " + priority);
            // console.log("        ip: " + ip);
            // console.log("      port: " + port);
            // console.log("      type: " + type);

            // if ( attr.length ) {
            //     console.log("attributes: ");
            //     for(let i = 0; i < attr.length; i += 2)
            //         console.log("> " + attr[i] + ": " + attr[i+1]);
            // }

            // console.log();

            if (/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(ip)) {
                document.querySelector("#private-ip").value = ip;

                document
                    .querySelector("#private-ip-div")
                    .classList.remove("d-none");
            } else {
                var browser = Bowser.parse(window.navigator.userAgent);

                if (browser.browser.name === "Chrome") {
                    document
                        .querySelector("#private-ip-blocked-chrome")
                        .classList.remove("d-none");
                }

                document
                    .querySelector("#private-ip-blocked")
                    .classList.remove("d-none");
            }
            document
                .querySelector("#private-ip-loading")
                .classList.add("d-none");
        };
    });

function getPublicIP() {
    fetch("https://ipapi.co/json/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("HTTP error");
        })
        .then((json) => {
            document.querySelector("#public-ip").value = json.ip;
            document.querySelector("#operator").value = json.org;
            document.querySelector("#city").value = json.city;
            document.querySelector("#country").value = json.country_name;
            document.querySelector("#latitude").value = json.latitude;
            document.querySelector("#longitude").value = json.longitude;
            document.querySelector("#timezone").value = json.timezone;

            document
                .querySelector("#public-ip-loading")
                .classList.add("d-none");
            document.querySelector("#public-ip-div").classList.remove("d-none");
        })
        .catch((error) => {
            document
                .querySelector("#public-ip-loading")
                .classList.add("d-none");
            document
                .querySelector("#public-ip-error")
                .classList.remove("d-none");
        });
}

document.querySelectorAll(".copy").forEach((e) => {
    e.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(
            evt.currentTarget.parentElement.querySelector("input").value
        );

        evt.currentTarget.innerHTML = '<i class="bi bi-clipboard-check"></i>';

        setTimeout(
            (el) => {
                el.innerHTML = '<i class="bi bi-clipboard"></i>';
            },
            2000,
            evt.currentTarget
        );
    });
});

if (window.navigator.onLine) {
    findLocalIp();
    getPublicIP();
}
