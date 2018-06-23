


isFighterChosen = false;
isEnemyChosen = false;
var myFighter = "";
var enemyFighter = "";

$(".fighter").on("click", function(){
    if (isFighterChosen && !isEnemyChosen) {
       isEnemyChosen = true;
       enemyFighter = $(this);
       $('.fight').html('Fight!');
       $('#enemy-box').html(enemyFighter);
       $('.top-text').html("Lets get ready to rumble!");
    }
    else if (!isFighterChosen) {
        isFighterChosen = true;
        myFighter = $(this);
        $('#fighter-box').html(myFighter);
        $('.top-text').html('Choose your enemy!');
    }
});

$('.fight').on("click", function() {
    
})