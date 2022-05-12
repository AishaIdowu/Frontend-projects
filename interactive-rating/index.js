const btnNum = document.querySelectorAll('.btn');
const btnRate = document.querySelector('.btn-rating');

btnNum.forEach(function(btns){
    btns.addEventListener('click', function(e){
        const buttons = e.currentTarget.classList;
        if (buttons.contains('one')) {
            btnRate.value = 1; 
        }
        else if (buttons.contains('two')) {
            btnRate.value =2;
        }
        else if (buttons.contains('three')) {
            btnRate.value = '3';
        }
        else if (buttons.contains('four')){
            btnRate.value = '4';
        }
        else{
            btnRate.value = 5;
        }
    });
});