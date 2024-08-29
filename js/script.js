
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