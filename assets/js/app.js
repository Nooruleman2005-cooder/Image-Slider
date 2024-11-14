var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQ69YFBT53N2lbPVbzyiKzu6x6iHd_fY6Qw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfd7GbB523lTKwyX3Kv9x5o_XZpvQgH-DbjeQpFUUnJamUiSmk6tjMrytBgVArpWiMzM0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DZSAO_ckrPjJCPEwuI2p-hiM3wRAUj1tMl7eVZx6CYW3TH4vVwcRHkgaDbrpf0_yMkY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCik-CyGyA8rU1cUCP7H5iod5SlwSthJaeSNqU0WHspjmHRVvBPob-LE1azDcgkHXW5s&usqp=CAU"
];
      var currentIndex = 0;
function showImage(index) {
    var slideImg = document.getElementById("slide-img");
    slideImg.src = images[index];
     currentIndex = index;
}
function nextImg(){
    var currentImg = document.getElementById("slide-img");
    if(currentIndex === images.length -1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    currentImg.src = images[currentIndex];
}
function prevImg(){
    var currentImg = document.getElementById("slide-img");
    if(currentIndex === 0){
        currentIndex = images.length -1;
    }
    else{
        currentIndex--;
    }
    currentImg.src = images[currentIndex];
}