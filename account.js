function profile(){
    document.getElementById('Pcontent').style.display = "flex";
    document.getElementById('Scontent').style.display = "none";
    document.getElementById('Ncontent').style.display = "none";
    document.getElementById('sbMenu').style.display = "none";
}
function save(){
    document.getElementById('Pcontent').style.display = "none";
    document.getElementById('Scontent').style.display = "flex";
    document.getElementById('Ncontent').style.display = "none";
    document.getElementById('sbMenu').style.display = "none";
}
function notif(){
    document.getElementById('Pcontent').style.display = "none";
    document.getElementById('Scontent').style.display = "none";
    document.getElementById('Ncontent').style.display = "flex";
    document.getElementById('sbMenu').style.display = "none";
}
// function menu(){
//     document.getElementById('sbMenu').style.display = "flex";
//     document.getElementById('Pcontent').style.display = "none";
//     document.getElementById('Scontent').style.display = "none";
//     document.getElementById('Ncontent').style.display = "none";
// }