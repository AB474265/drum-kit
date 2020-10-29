var Length = document.querySelectorAll(".drum").length;

var i=0;
while(i<Length){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        
        makeSound(button);
        
        animation001(button);
    });
    i++;
}

document.addEventListener("keydown", function(event){
    
    makeSound(event.key);

    animation001(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var tom8 = new Audio("sounds/crash.mp3");
            tom8.play();
        break;
        case "k":
            var tom9 = new Audio("sounds/kick-bass.mp3");
            tom9.play();
        break;
        case "l":
            var tom0 = new Audio("sounds/snare.mp3");
            tom0.play();
        break;
        default: console.log(key)
        break;
    }
}

function animation001(currentKey) {
    var beffect = document.querySelector("." + currentKey);
    beffect.classList.add("pressed");
    setTimeout(function(){
        beffect.classList.remove("pressed");
    }, 100);
}

