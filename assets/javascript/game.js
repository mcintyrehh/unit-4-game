


isFighterChosen = false;
isEnemyChosen = false;
isGameOver = false;
var myFighter = "";
var enemyFighter = "";
var enemyHP;
var playerHP;
var playerAP = 5;
var enemyAP = 6;
var myName;
var enemyName;
var resetting = $('.resetting').html();

function gameOver() {
    isFighterChosen = false;
    isEnemyChosen = false;
    isGameOver = false;
    myFighter = "";
    enemyFighter = "";
    playerAP = 5;
    $("#fighter-box, #enemy-box, .fight, .bottom-text").empty();
    $(".top-text").text("Pick your character");
    $(".resetting").html(resetting);
}

$(".fighter").hover(function() {
    if (!isFighterChosen) {
        $(this).css("border", "4px solid green");
    }
    else if (isFighterChosen && !isEnemyChosen) {
        $(this).css("border", "4px solid red");
    }
    }, function() {
        $(this).css("border", "none");
    });


$(".fighter").on("click", function () {
    if (isFighterChosen && !isEnemyChosen) {
        isEnemyChosen = true;
        enemyFighter = $(this);
        enemyHP = $(this).val();
        $(this).find(".hp").addClass("enemy-HP");
        $(this).find(".name").addClass("enemy-name");
        $('.fight').html('Fight!');
        $('#enemy-box').html(enemyFighter);
        $('.bottom-text').html("Lets get ready to rumble!");
        $('.top-text').empty();
    }
    else if (!isFighterChosen) {
        isFighterChosen = true;
        myFighter = $(this);
        playerHP = $(this).val();
        $(this).find(".hp").addClass("my-HP");
        $(this).find(".name").addClass("myName");
        $('#fighter-box').html(myFighter);
        $('.top-text').html('Choose your enemy!');
    }
});

$('.fight').on("click", function () {
    if (!isGameOver) {
        playerHP = playerHP - 50;
        enemyHP = enemyHP - playerAP;
        playerAP = playerAP + 3;   
        $('.my-HP').text(playerHP + " hp");
        $('.enemy-HP').text(enemyHP + " hp");
    }
    else {

    }
        
    if (playerHP <= 0 && !isGameOver) {
        
        isGameOver = true;
        myFighter.rotate({
                    angle: 0,
                    animateTo: 180
                })
        var enemyName = $('.enemy-name').text();
        $('.fight').html("<div>Game Over! " + '<br>' + enemyName + '<br>' + "trashed you!</div>") 
        $('.resetting').html("                <button class=\"card fighter text-center lost\"><span class=\"my-auto text-center\">Reset!</span></button>");        
    }
$('.lost').on("click", function() {
    gameOver();
})       
       
})