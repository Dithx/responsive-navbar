const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const account = document.getElementsByClassName('account');
const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');

let count = 0;

checkbox.addEventListener('change', function(){
    count += 1;
    show();
});

function show() {
        if (count === 1) {
            menu.classList.add('showMenu'); // Menambahkan class showMenu agar menu dapat terlihat
            body.style.overflowY = 'hidden'; // Agar tidak bisa discroll pada saat menu navbar dibuka
            // navbar.style.display = "none";
            console.log(count);
        } else if (count === 2) {
            menu.classList.remove('showMenu'); // Menghapus class showMenu
            body.style.overflowY = ''; // agar bisa discroll kembali
            console.log(count);
            count = 0; // Reset count
        }
    }