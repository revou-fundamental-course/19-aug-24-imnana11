
function validateForm() {
    
    const username = document.forms['message-form']['username'].value;
    const birthDate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const message = document.forms['message-form']['message'].value;
    

    // Menggunakan operator pembanding (== atau ===) bukan operator assignment (=)
    if (username === "" || birthDate === "" || gender === "" || message === "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(username, birthDate, gender, message);
    return false; // Mencegah form untuk reload halaman
}

function setSenderUI(username, birthDate, gender, message) {
    // Memperbaiki kesalahan ketik 'usernamename' menjadi 'username'
    document.getElementById("sender-full-name").innerHTML = username;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}
