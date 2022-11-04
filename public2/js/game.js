const btnFlower = document.querySelectorAll('.btn-f');
const btnPot = document.querySelectorAll('.pot');
const cash = document.querySelector('#cash');
let selectedFlower = '';
let price = 0;
let total = +cash.textContent;
let lastFlower;

btnFlower.forEach(element => {
    element.addEventListener('click', function () {
        selectedFlower = this.id;
        price = +this.textContent;
        this.classList.add('select');
        if(lastFlower) {
            lastFlower.classList.remove('select');
        }
        lastFlower = this;
    });
});
btnPot.forEach(element => {
    element.addEventListener('click', function () {
        const flower = this.querySelector('.flower');
        if(total >= price) {
            if (flower.getAttribute('src') == '') {
                flower.setAttribute('src', `public2/images/${selectedFlower}.png`);
                total -= price;
                cash.textContent = total;
            }
            else {
                alert('Đã có hoa');
            }
        }
        else {
            alert('Hết tiền!!!')
        }
    });
});