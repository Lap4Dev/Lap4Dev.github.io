let tg = window.Telegram.WebApp;
tg.expand();

let yandexMap = document.querySelector('iframe');

function resizeMap() {
    yandexMap.height = window.innerHeight + 'px';
    yandexMap.width = window.innerWidth + 'px';
}


window.onresize = resizeMap;
resizeMap();