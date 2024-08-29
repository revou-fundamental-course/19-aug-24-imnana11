
function validateForm() {

    const username = document.forms['message-form']['username'].value;
    const birthDate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const message = document.forms['message-form']['message'].value;


    // jika inputan kosong maka ada notification alert
    if (username === "" || birthDate === "" || gender === "" || message === "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(username, birthDate, gender, message);
    updateWelcomeMessage(username); //memanggil fungsi updateWelcomeMessage 

    return false; // Mencegah form untuk reload halaman

}
let indexSlide = 1
showBanner(indexSlide);

//fungsi untuk mengganti slide manual
function nextSlide(n) {
    showBanner(indexSlide += n)
}
//fungsi untuk menampilkan slide berdasarkan indeks
function showBanner(indexBanner) {
    console.log(indexSlide)
    let listImage = document.getElementsByClassName('banner-image');

    //reset ke slide pertama jika indeks lebih besar dari jumlah gambar
    if (indexBanner > listImage.length) {
        indexSlide = 1;
    }
    //jika indeks lebih kecil dari 1, kembali ke slide terakhir
    if (indexBanner < 1) {
        indexSlide = listImage.length;
    }

    //sembunyikan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }
    // tampilkan slide yang sesuai dengan indexSlide
    listImage[indexSlide - 1].style.display = 'block';
}

//auto slide pindah setiap 5 s
setInterval(function(){
    nextSlide(1); 
},5000)
function setSenderUI(username, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = username;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}
//fungsi untuk menampilkan username ke dalam teks 
function updateWelcomeMessage(username) {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = ` ${username}`;
}

// Event listener to handle form submission
document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    validateForm(); // memanggil fungsi validateForm
});