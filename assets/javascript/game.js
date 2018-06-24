
$( document ).ready(function() {

    isFighterChosen = false;
    isEnemyChosen = false;
    isGameOver = false;
    var myFighter = "";
    var enemyFighter = "";
    var enemyHP;
    var playerHP;
    var playerAP = 5;
    var enemyAP = 6;
    var enemiesKilled = 0;
    var myName;
    var enemyName;
    var resetting = $("#all-fighters").html();
    var onHover = function() {
        $(".parent").children().hover(function() {
            if ($(this).hasClass('my-fighter')) {

            }
            else if ($(this).hasClass('my-enemy')) {

            }
            else if (!isFighterChosen && !isGameOver) {
                $(this).css("border", "4px solid green");
            }
            else if (isFighterChosen && !isEnemyChosen && !isGameOver) {
                $(this).css("border", "4px solid red");
            }
        }, function() {
                $(this).css("border", "4px solid white");
        });
    }
    var onClick = function() {
        $(".parent").children().on("click", function () {
            if ($(this).hasClass('my-fighter')) {

            }
            else if ($(this).hasClass('my-enemy')) {

            }
            else if (isFighterChosen && !isEnemyChosen && !isGameOver) {
                isEnemyChosen = true;
                enemyFighter = $(this);
                enemyHP = $(this).val();
                $(this).find(".hp").addClass("enemy-HP");
                $(this).find(".name").addClass("enemy-name");
                $(this).addClass("my-enemy");
                $('.fight').html('Fight!');
                $('#enemy-box').html(enemyFighter);
                $('.bottom-text').html("Lets get ready to rumble!");
                $('.top-text').empty();
            }
            else if (!isFighterChosen && !isGameOver) {
                isFighterChosen = true;
                myFighter = $(this);
                playerHP = $(this).val();
                $(this).find(".hp").addClass("my-HP");
                $(this).find(".name").addClass("myName");
                $(this).addClass("my-fighter");
                $("#fighter-box").html(myFighter);
                $(".top-text").html('Choose your enemy!');
            }
        });
    };

    function gameOver() {
        isFighterChosen = false;
        isEnemyChosen = false;
        isGameOver = false;
        myFighter = 0;
        enemyFighter = 0;
        playerAP = 5;
        enemiesKilled = 0;
        $("#fighter-box, #enemy-box, .fight, .bottom-text").empty();
        $(".top-text").text("Pick your character");
        $("#all-fighters").html(resetting);
        onHover();
        onClick();
    }
    onHover();
    onClick();

    $('.fight').on("click", function () {
        if (!isGameOver && isEnemyChosen) {
            playerHP = playerHP - 9;
            enemyHP = enemyHP - playerAP;
            playerAP = playerAP + 3;   
            $('.my-HP').text(playerHP + " hp");
            $('.enemy-HP').text(enemyHP + " hp");
        }
        else {
            return false;
        }
            
        if (playerHP <= 0 && !isGameOver && isEnemyChosen) {
            
            isGameOver = true;
            myFighter.rotate({
                        angle: 0,
                        animateTo: 180
                    });
            $(".top-text, .bottom-text").empty();
            var enemyName = $('.enemy-name').text();
            $(".fight").html("<div>Game Over! " + '<br>' + enemyName + '<br>' + "trashed you!</div>") 
            $("#all-fighters").html("                <button class=\"btn card fighter text-center lost\"><span class=\"my-auto text-center\">Reset!</span></button>");        
            $(".lost").on("click", function() {
            gameOver();
            });  
        }
        if (enemyHP <=0 && isEnemyChosen && !isGameOver) {
            enemiesKilled++;
            enemyFighter.rotate({
                angle: 0,
                animateTo:180
            });
            isEnemyChosen = false;
            $(".top-text").html('Choose another enemy!');
            $(".fight").text("Choose another enemy!");
            $(".bottom-text").text("^One of these suckers^");
        }


        if (enemiesKilled === 3) {
            isGameOver=true;
            var myName = $('.myName').text();
            $(".fight").html("<div class=\"winner\">Street Champion! " + '<br>' + myName +"," + '<br>' + "you've trashed them all!</div>") 
            $("#all-fighters").html("                <button class=\"btn card fighter text-center winner winner-card\"><span class=\"my-auto text-center\">Reset!</span></button>");        
            $(".top-text, .bottom-text").empty();
            $(".winner").on("click", function() {
                gameOver();
            });
        }
    });

});