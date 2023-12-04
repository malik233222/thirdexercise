
function check_length() {

    let inp = document.getElementById('inp').value;
    let btn = document.getElementById('btn');
    let hidden =document.getElementById('hidden');


    if (inp.length > 100) {
        
        btn.innerHTML = inp.substring(0, 100) + '...';
        hidden.style.display= "none";
        

    } else {
        btn.textContent ='oxuyan usag her yerde oxuyar';
        hidden.style.display= "flex";
    }


}