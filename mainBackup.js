const tampungMenu = document.querySelector('.tampungMenu');
let menuShow; // Menyimpan elemen menuShow
let count = 0;

const showMenu = function(){
    count += 1;

    show();
}

function show(){
    // mengecek apakah menuShow truthy (tidak null, undefined), jika iya maka akan dijalankan block ini
    // jika falsy maka akan diskip
    if (menuShow) {
        // Hapus menuShow jika sudah ada
        tampungMenu.removeChild(menuShow);
        menuShow = undefined;
    }

    if (count === 1) {
        // Buat dan tambahkan menuShow ketika count = 1
        menuShow = document.createElement('div');
        menuShow.className = "menuShow";
        tampungMenu.appendChild(menuShow);
    } else if (count === 2) {
        count = 0; // Reset count jika count = 2
    }
}
