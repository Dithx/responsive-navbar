const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const account = document.getElementsByClassName('account');
const checkbox = document.getElementById('checkbox');

let count = 0;

checkbox.addEventListener('change', function(){
    count += 1;
    show();
});

function show() {
        if (count === 1) {
            menu.classList.add('hidden'); // Hapus kelas 'hidden' untuk menampilkan menu
            // navbar.style.display = "none";
            console.log(count);
        } else if (count === 2) {
            menu.classList.remove('hidden'); // Tambahkan kelas 'hidden' untuk menyembunyikan menu
            // navbar.style.display = "block";
            console.log(count);
            count = 0; // Reset count
        }
    }