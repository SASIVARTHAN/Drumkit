
var k=document.querySelectorAll(".drum").length;
for(i=0;i<=k;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var z=this.innerHTML;
        sound(z);
        ani(z)
       document.addEventListener("keypress", function(event){
        sound(event.key)
        ani(event.key);
       })
        function sound(z){
            switch (z) {
                case "w":
                    var crash = new Audio("sounds/crash.mp3");
                     crash.play();
                    break;
                    case "a":
                    var kick = new Audio("sounds/kick-bass.mp3");
                     kick.play();
                    break;
                    case "s":
                    var share = new Audio("sounds/snare.mp3");
                     share.play();
                    break;
                    case "d":
                    var crash = new Audio("sounds/tom-1.mp3");
                     crash.play();
                    break;
                    case "j":
                    var crash = new Audio("sounds/tom-2.mp3");
                     crash.play();
                    break;
                    case "k":
                    var crash = new Audio("sounds/tom-3.mp3");
                     crash.play();
                    break;
                    case "l":
                    var crash = new Audio("sounds/tom-4.mp3");
                     crash.play();
                    break;
            
                default:console.log()
                    break;
            }
        }
    })
    }
function ani(ckey){
var act=document.querySelector("." + ckey);
act.classList.add("pressed");
setTimeout(function(){
    act.classList.remove("pressed");
},100)
}

