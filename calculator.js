var initialresult = 0;
var result = initialresult;
$(document).ready(function(){
   var inputCalc;
   var add = $("#addBtn");
   var subtract = $("#subtractBtn");
   var multiply = $("#multiplyBtn");
   var division = $("#divideBtn");
   var curResults = $("#currentVal");
   var clickedButton;

   add.click(function() {
        result = result + inputCalc;
        curResults.text(parseInt(result));
   });

   subtract.click(function() {
       result = result - inputCalc;
       curResults.text(parseInt(result));
   });

   multiply.click(function() {
       result = result * inputCalc;
       curResults.text(parseInt(result));
   });

   division.click(function() {
       result = result / inputCalc;
       curResults.text(parseInt(result));
   });

   $("#inputToCalc").blur(function(){
    inputCalc = parseInt($("#inputToCalc").val());
  });

   $("button").click(function() {
       clickedButton = $(this).text();
       if(clickedButton >=0 && clickedButton <=9) {
           console.log(clickedButton);
       }
   });

   $("#inputToCalc").blur(function(clickedButton){
    clickedButton += $("#inputToCalc").val();
  });


//    $("eualToBtn").focus(function(){
    // $( "#inputToCalc" ).blur(function() {
    //     clickedButton = $("#inputToCalc").val();
    //     alert(clickedButton);
    //   });
//    })
   
   
});

