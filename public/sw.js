var images=document.getElementsByClassName('images');
var main_image=document.getElementById('main-image');
for(let i=0;i<images.length;i++){
    let temp="";
    images[i].addEventListener('click',(e) =>{
        temp=main_image.src;
        main_image.setAttribute('src',e.target.getAttribute('src'));
        e.target.setAttribute('src',temp);
    });    
}   