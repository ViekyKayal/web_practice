const diceImg = [
    'dice-01.svg',
    'dice-02.svg',
    'dice-03.svg',
    'dice-04.svg',
    'dice-05.svg',
    'dice-06.svg'
]
function roll(){
    let d1=Math.floor(Math.random()*6);
    let d2=Math.floor(Math.random()*6);
    const di=document.querySelectorAll("img");
    di.forEach(function (d){
        d.classList.add("shake");
    })

    setTimeout(function(){

    document.getElementById("die1").src = "images/"+ diceImg[d1];
    document.querySelector('#die2').setAttribute('src',"images/"+ diceImg[d2]);
    document.querySelector("#total").innerHTML="Total is "+( d1 + d2+2);

        di.forEach(function(d){
            d.classList.remove("shake");
        })
    
        
    }, 500);
}


