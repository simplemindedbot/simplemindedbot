if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.min.js?v=4.0.8",
                  { scope: "/" })
        .then(() => {
            console.info("SW Loaded");
        }, err => console.error("SW error: ", err));

    navigator.serviceWorker
        .ready
        .then(() => {
            console.info("SW Ready");
        });
}
