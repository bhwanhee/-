// 퀴즈 정답 확인
function correct() {
  var check = [false, false, false];
  var correct_answer = [false, false, false, true,
                        false, true, false, false,
                        true, false, false, false];

  var input_answer_1 = document.getElementsByName("answer_1");
  var input_answer_2 = document.getElementsByName("answer_2");
  var input_answer_3 = document.getElementsByName("answer_3");
  var quiz=[document.getElementById("quiz_1"),
            document.getElementById("quiz_2"),
            document.getElementById("quiz_3")];

  for (var i = 0; i < correct_answer.length; i++) {
    if (i < 4) {
      if (input_answer_1[i].checked == true && correct_answer[i] == true) {
        check[0] = true;
        quiz[0].style.textDecoration = "none";
      }
    }

    else if (i > 3 && i < 8) {
      if (input_answer_2[i - 4].checked == true && correct_answer[i] == true) {
        check[1] = true;
        quiz[1].style.textDecoration = "none";
      }
    }

    else {
      if (input_answer_3[i - 8].checked == true && correct_answer[i] == true) {
        check[2] = true;
        quiz[2].style.textDecoration = "none";
      }
    }
  }
  var q_count = 0;
  for (var i = 0; i < 3; i++) {
    if (check[i] == false)
      quiz[i].style.textDecoration = "line-through";
    else
      q_count++;
  }
  document.getElementById("count").innerHTML = "정답 : " + q_count + "개";
}

// 시계
function init(){
  setInterval("time()",1000);
}
function time(){
  var current = new Date();
  var obj = document.getElementById("time");
  obj.innerHTML = current.toLocaleTimeString();
}

// 캔버스
function canvas_draw(){
  var canvas, context, image;
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  image = document.getElementById("background");
  
  canvas.width = image.offsetWidth;
  canvas.height = image.offsetHeight;

  context.lineWidth = 2;
  context.strokeStyle = "white";

  canvas.addEventListener("mousemove", function(e){move(e)}, false);
  canvas.addEventListener("mousedown", function(e){down(e)}, false);
  canvas.addEventListener("mouseup", function(e){up(e)}, false);
  canvas.addEventListener("mouseout", function(e){out(e)}, false);

  var startX=0, startY=0;
  var drawing = false;
  function draw(curX, curY){
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(curX, curY);
      context.stroke();
  }
  function down(e){
      startX = e.offsetX;
      startY = e.offsetY;
      drawing = true;
  }
  function up(e){
      drawing = false;
  }
  function move(e){
      if(!drawing)
      return;
      
      var curX = e.offsetX;
      var curY = e.offsetY;
      draw(curX, curY);
      startX = curX;
      startY = curY;
  }
}