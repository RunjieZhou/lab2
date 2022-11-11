  // 玩家姓名
  var player1 = "Player 1";
  var player2 = "Player 2";
 
  // 改变玩家姓名的功能
  function editNames() {
    player1 = prompt("更改玩家 1 姓名");
    player2 = prompt("更改玩家 2 姓名");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
    };
 
  // 掷骰子的功能
  function rollTheDice() {
    //设置了一个 1000 毫秒的延迟
    setTimeout(function () {
      //生成 1-6 的随机数
      //生成 1-6 的随机数
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var randomNumber3 = Math.floor(Math.random() * 6) + 1;
      var randomNumber4 = Math.floor(Math.random() * 6) + 1;
      var randomNumber5 = Math.floor(Math.random() * 6) + 1;
      var randomNumber6 = Math.floor(Math.random() * 6) + 1;
      let arr = new Array(6);
      var number=0;
      console.log(arr);
      arr[0]=randomNumber1;
      arr[1]=randomNumber2;
      arr[2]=randomNumber3;
      arr[3]=randomNumber4;
      arr[4]=randomNumber5;
      arr[5]=randomNumber6;
      //将骰子的图片改成对应随机数
      document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
      document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");
      document.querySelector(".img3").setAttribute("src", "dice" + randomNumber3 + ".png");
      document.querySelector(".img4").setAttribute("src", "dice" + randomNumber4 + ".png");
      document.querySelector(".img5").setAttribute("src", "dice" + randomNumber5 + ".png");
      document.querySelector(".img6").setAttribute("src", "dice" + randomNumber6 + ".png");

   
      if (randomNumber1 === 4||randomNumber2 === 4||randomNumber3 === 4||randomNumber4 === 4||randomNumber5 === 4||randomNumber6 === 4) {
        document.querySelector("h1").innerHTML = "秀才:一秀";
      } else{
        document.querySelector("h1").innerHTML = "再接再厉";
      }
      
       if ((randomNumber1 === 4&&randomNumber2 === 4)||(randomNumber1 === 4&&randomNumber3 === 4)||(randomNumber1 === 4&&randomNumber4 === 4)||(randomNumber1 === 4&&randomNumber6 === 4)||(randomNumber1 === 4&&randomNumber6 === 4)||(randomNumber2 === 4&&randomNumber3 === 4)||(randomNumber2 === 4&&randomNumber4 === 4)||(randomNumber2 === 4&&randomNumber5 === 4)||(randomNumber2 === 4&&randomNumber6 === 4)||(randomNumber3 === 4&&randomNumber4 === 4)||(randomNumber3 === 4&&randomNumber5 === 4)||(randomNumber3 === 4&&randomNumber6 === 4)||(randomNumber4 === 4&&randomNumber5 === 4)||(randomNumber4 === 4&&randomNumber6 === 4)||(randomNumber5 === 4&&randomNumber6 === 4)) {
        document.querySelector("h1").innerHTML = "举人:二举";
      } 
      if((randomNumber1 == 4&&randomNumber2 == 4&&randomNumber3 == 4)||(randomNumber1 ===4&& randomNumber2 === 4&&randomNumber4 === 4)||(randomNumber1 === 4&&randomNumber2 === 4&&randomNumber5 === 4)||(randomNumber1 === 4&&randomNumber2 === 4&&randomNumber6 === 4)||(randomNumber1 === 4&&randomNumber3 === 4&&randomNumber4 === 4)||(randomNumber1 === 4&&randomNumber3 === 4&&randomNumber5 === 4)||(randomNumber1 === 4&&randomNumber3 === 4&&randomNumber6 === 4)||(randomNumber1 === 4&&randomNumber4 === 4&&randomNumber5 === 4)||(randomNumber1 === 4&&randomNumber4 === 4&&randomNumber6 === 4)||(randomNumber1 === 4&&randomNumber5 === 4&&randomNumber6 === 4)||(randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4 === 4)||(randomNumber2 === 4&&randomNumber3 === 4&&randomNumber5 === 4)||(randomNumber2 === 4&&randomNumber3 === 4&&randomNumber6 === 4)||(randomNumber2 === 4&&randomNumber4 === 4&&randomNumber5 === 4)||(randomNumber2 === 4&&randomNumber4 === 4&&randomNumber6 === 4)(randomNumber2 === 4&&randomNumber5 === 4&&randomNumber6 === 4)(randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5 === 4)(randomNumber3 === 4&&randomNumber4 === 4&&randomNumber6 === 4)(randomNumber3 === 4&&randomNumber5 === 4&&randomNumber6 === 4)(randomNumber4 === 4&&randomNumber5 === 4&&randomNumber6 === 4)){
        document.querySelector("h1").innerHTML = "探花:三红";
      }
       if(((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber3)&&(randomNumber3 === randomNumber4 ))||((randomNumber1 ===randomNumber2)&&(randomNumber2 === randomNumber3)&&(randomNumber3 === randomNumber5))||((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber3)&&(randomNumber3 === randomNumber6 ))||((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber4)&&(randomNumber4 === randomNumber5 ))||((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber4)&&(randomNumber4 === randomNumber6 ))||((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber5)&&(randomNumber5 === randomNumber6 ))||((randomNumber1 === randomNumber3 )&&(randomNumber3=== randomNumber4)&&(randomNumber4 === randomNumber5 ))||((randomNumber1 === randomNumber3)&&(randomNumber3 === randomNumber4)&&(randomNumber4 === randomNumber6 ))||((randomNumber1 === randomNumber3)&&(randomNumber3 === randomNumber5)&&(randomNumber5 === randomNumber6 ))||((randomNumber2 === randomNumber3)&&(randomNumber3 === randomNumber4)&&(randomNumber4 === randomNumber5 ))||((randomNumber2 === randomNumber3)&&(randomNumber3 ===randomNumber4)&&(randomNumber4 === randomNumber6 ))||((randomNumber2 === randomNumber3)&&(randomNumber3 === randomNumber5 )&&(randomNumber5=== randomNumber6 ))||((randomNumber3 === randomNumber4 )&&(randomNumber4=== randomNumber5 )&&(randomNumber5=== randomNumber6 ))||((randomNumber1 === randomNumber4 )&&(randomNumber4=== randomNumber5)&&(randomNumber5 === randomNumber6 ))||((randomNumber2 === randomNumber4)&&(randomNumber4 === randomNumber5)&&(randomNumber5 === randomNumber6 ))){
        if((randomNumber1 === randomNumber2 === randomNumber3 === randomNumber4===4 )||(randomNumber1 ===randomNumber2 === randomNumber3 === randomNumber5===4)||(randomNumber1 === randomNumber2 === randomNumber3 === randomNumber6===4 )||(randomNumber1 === randomNumber2 === randomNumber4 === randomNumber5===4 )||(randomNumber1 === randomNumber2 === randomNumber4 === randomNumber6===4 )||(randomNumber1 === randomNumber2 === randomNumber5 === randomNumber6===4 )||(randomNumber1 === randomNumber3 === randomNumber4 === randomNumber5===4 )||(randomNumber1 === randomNumber3 === randomNumber4 === randomNumber6===4 )||(randomNumber1 === randomNumber3 === randomNumber5 === randomNumber6===4 )||(randomNumber2 === randomNumber3 === randomNumber4 === randomNumber5===4 )||(randomNumber2 === randomNumber3 ===randomNumber4 === randomNumber6===4 )||(randomNumber2 === randomNumber3 === randomNumber5 === randomNumber6 ===4)||(randomNumber3 === randomNumber4 === randomNumber5 === randomNumber6 ===4)||(randomNumber1 === randomNumber4 === randomNumber5 === randomNumber6 ===4)||(randomNumber2 === randomNumber4 === randomNumber5 === randomNumber6===4 )){
          document.querySelector("h1").innerHTML = "状元:四点红";
        }else if(((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4===4 )&&(randomNumber5 === 1&&randomNumber6===1))||((randomNumber1 ===4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber5===4)&&(randomNumber4 === 1&&randomNumber6===1))||((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber6===4 )&&(randomNumber5 === 1&&randomNumber4===1))||((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber4 === 4&&randomNumber5===4 )&&(randomNumber3 === 1&&randomNumber6===1))||((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber4 === 4&&randomNumber6===4)&&(randomNumber3 === 1&&randomNumber5===1) )||((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber5 === 4&&randomNumber6===4 ))&&(randomNumber3 === 1&&randomNumber4===1)||((randomNumber1 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5===4 )&&(randomNumber2 === 1&&randomNumber6===1))||((randomNumber1 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber6===4 )&&(randomNumber2 === 1&&randomNumber5===1))||((randomNumber1 === 4&&randomNumber3 === 4&&randomNumber5 === 4&&randomNumber6===4 )&&(randomNumber2 === 1&&randomNumber4===1))||((randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5===4 )&&(randomNumber1 === 1&&randomNumber6===1))||((randomNumber2 === 4&&randomNumber3 ===4&&randomNumber4 === 4&&randomNumber6===4 )&&(randomNumber1 === 1&&randomNumber5===1))||((randomNumber2 === 4&&randomNumber3 === 4&&randomNumber5 === 4&&randomNumber6 ===4)&&(randomNumber1 === 1&&randomNumber4===1))||((randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5 === 4&&randomNumber6 ===4)&&(randomNumber1 === 1&&randomNumber2===1))||((randomNumber1 ===4&& randomNumber4 === 4&&randomNumber5 === 4&&randomNumber6 ===4)&&(randomNumber2 === 1&&randomNumber3===1))||((randomNumber2 === 4&&randomNumber4 ===4&& randomNumber5 === 4&&randomNumber6===4 )&&(randomNumber3 === 1&&randomNumber1===1))){
          document.querySelector("h1").innerHTML = "金花";
        }
        
        else{
          document.querySelector("h1").innerHTML = "进士:四进";
        }
      }
       if((((randomNumber1 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&((randomNumber4 === randomNumber5 )&&(randomNumber5=== randomNumber6))))||((randomNumber1 === randomNumber2 === randomNumber4 )&&(randomNumber3 === randomNumber5 === randomNumber6))||((randomNumber1 === randomNumber2 === randomNumber5 )&&(randomNumber3 === randomNumber4 === randomNumber6))||((randomNumber1 === randomNumber2 === randomNumber6 )&&(randomNumber3 === randomNumber4 === randomNumber5))||((randomNumber1 === randomNumber3 === randomNumber4 )&&(randomNumber2 === randomNumber5 === randomNumber6))||((randomNumber1 === randomNumber3 === randomNumber5 )&&(randomNumber2 === randomNumber4 === randomNumber6))||((randomNumber1 === randomNumber3 === randomNumber6 )&&(randomNumber2 === randomNumber4 === randomNumber5))||((randomNumber1 === randomNumber4 === randomNumber5 )&&(randomNumber2 === randomNumber3 === randomNumber6))||((randomNumber1 === randomNumber4 === randomNumber6 )&&(randomNumber3 === randomNumber5 === randomNumber2))||((randomNumber1 === randomNumber5 === randomNumber6 )&&(randomNumber3 === randomNumber2 === randomNumber4))||((randomNumber2 === randomNumber3 === randomNumber4 )&&(randomNumber1 === randomNumber5 === randomNumber6))||((randomNumber2 === randomNumber3 === randomNumber5 )&&(randomNumber1 === randomNumber4 === randomNumber6))||((randomNumber2 === randomNumber3 === randomNumber6 )&&(randomNumber4 === randomNumber5 === randomNumber1))||((randomNumber2 === randomNumber4 === randomNumber5 )&&(randomNumber3 === randomNumber1 === randomNumber6))||((randomNumber2 === randomNumber4 === randomNumber6 )&&(randomNumber3 === randomNumber5 === randomNumber1))||((randomNumber2 === randomNumber5 === randomNumber6 )&&(randomNumber4 === randomNumber1 === randomNumber3))||((randomNumber3 === randomNumber4 === randomNumber5 )&&(randomNumber6 === randomNumber1 === randomNumber2))||((randomNumber3 === randomNumber4 === randomNumber6 )&&(randomNumber1 === randomNumber2 === randomNumber5))||((randomNumber3 === randomNumber5 === randomNumber6 )&&(randomNumber4 === randomNumber1 === randomNumber2))){
         
        if ((randomNumber1 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&(randomNumber3=== randomNumber4)&&(randomNumber4=== randomNumber5)&&(randomNumber5=== randomNumber6)) {
          document.querySelector("h1").innerHTML = "状元:黑六勃";
        }else if ((randomNumber1 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&(randomNumber3=== randomNumber4)&&(randomNumber4=== randomNumber5)&&(randomNumber5=== randomNumber6)&&(randomNumber5===4)) {
          document.querySelector("h1").innerHTML = "状元:六倍红";
        }
        else{
        document.querySelector("h1").innerHTML = "榜眼:对堂";
        }
      }
       if ((randomNumber1 !== randomNumber2)&&( randomNumber1 !== randomNumber3)&&( randomNumber1 !== randomNumber4)&&( randomNumber1!== randomNumber5 )&&(randomNumber1 !== randomNumber6 )&&( randomNumber2 !== randomNumber3)&&( randomNumber2 !== randomNumber4)&&( randomNumber2!== randomNumber5 )&&(randomNumber2 !== randomNumber6 )&&( randomNumber3 !== randomNumber4)&&( randomNumber3!== randomNumber5 )&&(randomNumber3 !== randomNumber6 )&&( randomNumber4!== randomNumber5 )&&(randomNumber4 !== randomNumber6 )&&(randomNumber5 !== randomNumber6 )) {
        document.querySelector("h1").innerHTML = "榜眼:对堂";
      }
       if(((randomNumber1 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&(randomNumber3=== randomNumber4 )&&(randomNumber4=== randomNumber5))||((randomNumber1 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&(randomNumber3=== randomNumber4 )&&(randomNumber4=== randomNumber6))||((randomNumber6 === randomNumber2 )&&(randomNumber2=== randomNumber3 )&&(randomNumber3=== randomNumber4)&&(randomNumber4 === randomNumber5))||((randomNumber1 === randomNumber3 )&&(randomNumber3=== randomNumber5 )&&(randomNumber5=== randomNumber4)&&(randomNumber4 === randomNumber6))||((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber3 )&&(randomNumber3=== randomNumber5 )&&(randomNumber5=== randomNumber6))){
        if((randomNumber1 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5===4)||(randomNumber1 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber6===4)||(randomNumber6 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber4 === 4&&randomNumber5===4)||(randomNumber1 === 4&&randomNumber3 === 4&&randomNumber5 === 4&&randomNumber4 === 4&&randomNumber6===4)||(randomNumber1 === 4&&randomNumber2 === 4&&randomNumber3 === 4&&randomNumber5 === 4&&randomNumber6===4)){
          document.querySelector("h1").innerHTML = "状元:五红";
        }else if (randomNumber1 === 1&&randomNumber2 === 1&&randomNumber3 === 1&&randomNumber4 === 1&&randomNumber5 === 1&&randomNumber6 === 1) {
          document.querySelector("h1").innerHTML = "状元:遍地锦";
        }
        else{
        document.querySelector("h1").innerHTML = "状元:五子登科";
        }
      }
      
     

    }, 1000);

  }