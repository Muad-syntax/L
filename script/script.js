// center content
const btnShow = document.getElementById('btn-show');
const displayName = document.getElementById('display-name');
displayName.innerText = 'Your Name:';
function inputName(){
    const name = document.getElementById('input-name').value;
    displayName.innerText = `Your Name: ${name}`;
}

btnShow.addEventListener('click', () => {
    inputName();
});

// left content
let angkaRandom = Math.floor(Math.random() * 10) + 1;
let sisaSkorTebakan = 5;

const angka = document.getElementById('muncul-angka');
angka.innerText = "?";
const inputNumber = document.getElementById('input-number');
const wadahBanyakNebak = document.getElementById('banyak-nebak');
const btnTebak = document.getElementById('btn-tebak');
const btnLanjut = document.getElementById('btn-lanjut');
const btnReload = document.getElementById('btn-reload');
const audioKalah = new Audio("audio/kalah.mp3");
const audioMenang  = new Audio("audio/menang.mp3");
const audioSalah   = new Audio("audio/salah.mp3");

function tebakAngka() {
    const status = document.getElementById("status");
    const tebak = parseInt(inputNumber.value.trim());
    angka.classList.remove("getar");
    void angka.offsetWidth;
    if(tebak === angkaRandom){
        status.innerText = "Benar";
        status.style.color = "green";
        angka.innerText = angkaRandom;
        angka.style.color = "green";
        audioMenang.play();
    } else if(tebak > angkaRandom){
        angka.innerText = "Kelebihan";
        angka.classList.add("getar");
        audioSalah.play();
    } else if(tebak < angkaRandom){
        angka.innerText = "kurang";
        angka.classList.add("getar");
        audioSalah.play();
    }
    sisaSkorTebakan--;
    wadahBanyakNebak.innerText = `Kesempatan Menebak: ${sisaSkorTebakan}`;
    if(sisaSkorTebakan === 0){
        status.innerText = "Kesempatan Habis";
        status.style.color = "#e74c3c";
        angka.innerText = `Angkanya: ${angkaRandom}`;
        audioKalah.play();
    }
}
wadahBanyakNebak.innerText = "Kesempatan Menebak: " + sisaSkorTebakan;
function lanjutNebak(){
    const status = document.getElementById('status');
    angkaRandom = Math.floor(Math.random() * 10) + 1;
    inputNumber.value = "";
    angka.innerText = "?";
    angka.style.color = "#e74c3c";
    angka.classList.remove("getar");
    status.innerText = "Tebak Angka Berapa? 1-10";
    status.style.color = "black";
    window.location.reload();
    WadahBanyakNebak.innerText ="Sisa Kesempatan: " + SisaSkorTebakan;
}

btnReload.addEventListener('click', () => {
    window.location.reload();
})