/**
 * Created by thang on 6/21/17.
 */
var Images = {
    imgsDB:[
        [   "funny-cat1_part1x1.jpg",
            "funny-cat1_part2x1.jpg",
            "funny-cat1_part3x1.jpg",
            "funny-cat1_part4x1.jpg",
            "funny-cat1_part5x1.jpg"],
        [   "monkey_part1x1.jpg",
            "monkey_part2x1.jpg",
            "monkey_part3x1.jpg",
            "monkey_part4x1.jpg",
            "monkey_part5x1.jpg"],
        [   "panda_swap_part1x1.jpg",
            "panda_swap_part2x1.jpg",
            "panda_swap_part3x1.jpg",
            "panda_swap_part4x1.jpg",
            "panda_swap_part5x1.jpg"
        ]
    ],
    imgpos: [0, 0, 0, 0, 0]
}

function placeImg(imgpos1, imgToggle){
    Images.imgpos[imgpos1 - 1] = imgToggle;
    var imgId = "img" + imgpos1.toString();
    document.getElementById(imgId).setAttribute("src", "./img/" + Images.imgsDB[imgToggle][imgpos1 - 1]);

}

function setImgRandom(){
    for(var i = 1; i<=5; i++) {
        var randomPos = Math.floor((Math.random()*3));
        placeImg(i,randomPos);
    }
}

function imgClick(imgpos1){
    var imgToggle = Images.imgpos[imgpos1 - 1];
    if(imgToggle == 0){
        placeImg(imgpos1, 1);
    } else if(imgToggle == 1){
        placeImg(imgpos1, 2);
    } else if(imgToggle == 2){
        placeImg(imgpos1, 0);
    }
}

function checkset() {
    var setFlag = true;
    for (var i=1; i < 5; i++)
    {
        if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
            setFlag = false;
        }
    }

    if (setFlag) {
        $('img').css("box-shadow", "4px 4px 9px red")
    }
    else {
        $('img').css("box-shadow", "2px 3px 3px black")
    }
}