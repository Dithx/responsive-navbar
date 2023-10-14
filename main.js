const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const account = document.getElementsByClassName('account');

let count = 1;

const showMenu = function () {
    count += 1;
    show();
}

function show() {
        if (count === 1) {
            menu.classList.remove('hidden'); // Hapus kelas 'hidden' untuk menampilkan menu
            // navbar.style.display = "none";
            console.log(count);
        } else if (count === 2) {
            menu.classList.add('hidden'); // Tambahkan kelas 'hidden' untuk menyembunyikan menu
            // navbar.style.display = "block";
            console.log(count);
            count = 0; // Reset count
        }
    }
// show()
window.addEventListener('load', showMenu);