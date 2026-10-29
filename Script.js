
let form = document.getElementById("formPasien");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let keluhan = document.getElementById("keluhan").value;

    let tabel = document.getElementById("dataPasien");
    let baris = tabel.insertRow();

    baris.insertCell(0).textContent = nama;
    baris.insertCell(1).textContent = umur;
    baris.insertCell(2).textContent = keluhan;

    form.reset();

    alert("Pendaftaran berhasil!");
});
