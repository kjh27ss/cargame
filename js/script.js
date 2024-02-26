$(function(){
    $(document).keydown(function(e){
        //console.log(e.keyCode);
        //위 38, 오른쪽 39  아랫쪽 40 왼쪽 37
        //offset() -- 절대 위치값 position : 상대 위치값
        // offset() => top, left / offset().top; offset().left;
        //변수 = 요소.offset();   => 변수.top, 변수.left / 변수는 배열
        animationCar(e.keyCode);
 
    });  
 });
 
 function animationCar(n){
    //  var ofst = new Array();
        
     switch(n){
        case 37:
           $('.cloud').show();
           $('.bluecar').css('transform', 'rotate(270deg)')
                        .stop()
                        .animate({ left: '-=300px'}, 900, function(){
                            $('.cloud').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left + "px");
            });

            


        break;
        case 38:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(0deg)')
                       .stop()
                       .animate({ top: '-=300px'}, 900, function(){
                          $('.cloud').hide();
                          let ofst = $(this).offset();
                          $('.top').text("top :" + ofst.top +"px");
                          $('.left').text("left :" + ofst.left + "px");
                       });
        break;
        case 39:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(90deg)')
                       .stop()
                       .animate({ left: '+=300px'}, 900, function(){
                           $('.cloud').hide();
                           let ofst = $(this).offset();
                           $('.top').text("top :" + ofst.top +"px");
                           $('.left').text("left :" + ofst.left + "px");
                       });
        break;
        case 40:
          $('.cloud').show();
          $('.bluecar').css('transform', 'rotate(180deg)')
                       .stop()
                       .animate({ top: '+=300px'}, 900, function(){
                          $('.cloud').hide();
                          let ofst = $(this).offset();
                          $('.top').text("top :" + ofst.top +"px");
                          $('.left').text("left :" + ofst.left + "px");
                       });
        break;
     }


    //  if(ofst.top = 150 && ofst.left=200){
    //     console.log("주차 성공");
    //  }

   
        // $('.bluecar').(ofst.top == 230 && ofst.left == 200)function(){

        // }

        // }

        // ('.box')animate(function(){

        //     if(ofst.top = 150 && ofst.left=200){
        //             console.log("주차 성공");
        //          }
            

        // });
        
   



 
 }