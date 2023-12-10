// variables

let count = 0;
let countEl = document.querySelector('.count-el');
const incremetBtn = document.getElementById('increment');
const saveBtn = document.getElementById('save');
const savedEnteries = document.querySelector('.saved-el');

incremetBtn.addEventListener('click', function(){
    count += 1;
    countEl.innerText = count;
});

saveBtn.addEventListener('click', function(){

   
    savedEnteries.textContent += count+" - ";

    countEl.innerText = 0;
    count = 0;

})