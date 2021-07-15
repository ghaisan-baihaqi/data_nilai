let bIndo = 0;
let nilai_bIndo = []
let rata_bIndo = 0;

let mtk = 1;
let nilai_mtk = []
let rata_mtk = 0;

const soal = document.getElementsByClassName('jumlah-soal')
const rata = document.getElementsByClassName('rata-rata');

for(i = 0; i < nilai_bIndo.length; i++){
   rata_bIndo += nilai_bIndo[i]
}
for(i = 0; i < nilai_mtk.length; i++){
   rata_mtk += nilai_mtk[i]
}

soal[bIndo].innerHTML = nilai_bIndo.length
rata[bIndo].innerHTML = rata_bIndo/nilai_bIndo.length

soal[mtk].innerHTML = nilai_mtk.length
rata[mtk].innerHTML = rata_mtk/nilai_mtk.length