let current_page = 1;

function displayPage(){
    document.querySelector('img').src = "img_"+current_page+".png"
    if(current_page===1){
        document.querySelector('.left').style.opacity = '0.5';
        document.querySelector('.left').style.pointerEvents = 'none';
    }else{
        document.querySelector('.left').style.opacity = '1';
        document.querySelector('.left').style.pointerEvents = "auto"
    }

    if(current_page===3){
        document.querySelector('.right').style.opacity = '0.5';
        document.querySelector('.right').style.pointerEvents = 'none';
    }else{
        document.querySelector('.right').style.opacity = '1';
        document.querySelector('.right').style.pointerEvents = "auto"
    }
}

document.querySelector('.left').addEventListener('click', function(){
    current_page--;
    displayPage();
})

document.querySelector('.right').addEventListener('click', function(){
    current_page++;
    displayPage();
})

displayPage();