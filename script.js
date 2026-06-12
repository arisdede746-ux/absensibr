const user = "brj";
const pass = "1235";

function login(){
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if(u === user && p === pass){
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").style.display = "block";
    }else{
        alert("Login gagal");
    }
}

window.login = login;

window.tambahAbsen = function () {
    const nama = document.getElementById("nama").value;

    if(nama === "") return;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
    <b>${nama}</b><br>
    Status:
    <select>
        <option>Hadir</option>
        <option>Tidak Hadir</option>
    </select>
    <button onclick="this.parentElement.remove()">
        Hapus
    </button>
    `;

    document.getElementById("list")
    .appendChild(div);

    document.getElementById("nama").value = "";
}