function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');
    var nomor = document.getElementById('nomor');

    var gabungan = 'Nama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + nomor.value +'%0Asnomor%20%3A'+ pesan.value+'%0APesan%3A%0A';

    var token = '6627864177:AAFW4ccFBMye0GbqX1GFwDYTmnUlBV9Bplk'; 
    var grup = '-808920578'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}