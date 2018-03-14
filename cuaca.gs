function getcuaca(){
var seuneu = "api";
var alamat = "https://api.openweathermap.org/data/2.5/weather?q=yogyakarta&appid=api-lagi-disini&units=metric&appid="+seuneu+"";
result = UrlFetchApp.fetch(alamat);
var retw = result.getContentText();
var retjson = JSON.parse(retw);
var cuaca = retjson.weather[0].main;
var temperatur = retjson.main.temp;
var kelembapan = retjson.main.humidity;
var kota = retjson.name;
var wind_speed = retjson.wind.speed;
var pressure = retjson.main.pressure;
var token = 'token-bot';
var tg = new telegram.daftar(token);
var chatid = 'id-grup-telegram' // ID Grup
var teks = "Informasi Cuaca";
teks = teks + "\n"+ kota +" "+ cuaca +"";
teks = teks + "\n`Suhu`: "+ temperatur +"°C. `Kelembapan`: "+ kelembapan +"%. `Kecepatan angin`: "+ wind_speed +"m/s";
teks = teks + "\n`Tekanan`: "+ pressure +"hpa.";
var ret = tg.kirimPesan(chatid, teks, 'markdown');
Logger.log(ret); // simpan hasil return kirimPesan ke log
}
