let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.show();

let yandexMap = document.querySelector('iframe');

function resizeMap() {
    yandexMap.height = window.innerHeight + 'px';
    yandexMap.width = window.innerWidth + 'px';
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if(Object.entries(params).length) {
    if('show_hotel' in params)
        tg.sendData(params.show_hotel);
        // alert();
}

window.onresize = resizeMap;
resizeMap();