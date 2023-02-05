let tg = window.Telegram.WebApp;
tg.expand();

let showHotel;
let yandexMap = document.querySelector('iframe');

function resizeMap() {
    yandexMap.height = window.innerHeight + 'px';
    yandexMap.width = window.innerWidth + 'px';
}
window.onresize = resizeMap;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if(Object.entries(params).length) {
    if('show_hotel' in params)
        tg.sendData(params.show_hotel);
        tg.MainButton.setText('Посмотреть подробную информацию').show();
        // Telegram.WebApp.close();
}

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    if(showHotel) {
        tg.sendData(showHotel);
    }
});

resizeMap();
