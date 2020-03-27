// ######################################   Back End Code   #################################


var course = function(selection){
  if(selection === 1){
    return "Ruby";
  }else if (selection ===2){
    return "Python";
  }else{
    return "php";
  };

var stateMent = function(choice, highSchool, javaScript, engineeringDegree, interest, aptitude){

  if (!highSchool){
    return "Web development is not for you. Please go get more education";
  }else if(engineeringDegree){
    return "You selected " +choice+ ". Python is right for you as engineers with Python are more attractive to employers";
  }else if (!javaScript){
    return "you selected " +choice+ ". It is really better if you first learn javaScript. Your choice of course has  java script as a pre-req.";
  }else if(!interest){
    return "Please go and change your planned profession. You are not a good fit here";
  }else if(aptitude){
    return "you selected " +choice+ ". It is really better if you take ruby because ruby is very powerfull and will be more utilized by person that like abstract scenairios as opposed to a logical person who would do better with a restrictive but very fast language as Python";
  } else {
    return "you selected " +choice+ ". It is really better if you take Python as this suits more to a logical person who wants to strictly harnesses his code on what it should do";
  }
  };
// ###########################################   Front End code    ######################################


$(document).ready(function() {
  $("form#calculating").submit(function(event){
    event.preventDefault();
    var highSchool = parseInt($("#highSchool").val());
    var javaScript = parseInt($("#javaScript").val());
    var engineeringDegree = parseInt($("#engineeringDegree").val());
    var interest = parseInt($("#interest").val());
    var aptitude = parseInt($("#aptitude").val());
    var selection = parseInt($("#courseType").val());
    console.log(javaScript);
    console.log(selection);  // for debugging
    console.log(highSchool);  // for debugging
    console.log(engineeringDegree);  // for debugging
    var courseType = course(selection);
    var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
   
  $("#output").text(result);
  });
});





/*$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    var result = add(number1, number2);
    $("#output").text(result);
  });
});*/


//whether triangle sides are equal or not

/*var one = 20;
var two = 30;
var three = 25;
var triangleTracker = function(one, two, three){
  if (one + two <= three || one + three <= two || two + three <= one ){
    var triangle = "not a triangle";
    alert(triangle);
  } else if (one === two && one === three){
       triangle = "equilateral";
       alert(triangle);
  } else if (one === two || one === three || two === three){
       triangle = "isoleses";
       alert(triangle);
  }  else if (one != two && one != three  && two != three){
       triangle = "scalene";
       alert(triangle);
  } 
  return triangle;
};
var result = triangleTracker(one, two, three);
alert (result);
var sideOne = parseInt($("#firstInput").val());
var secondSide = parseInt($("#secondInput").val());
var lastSide = parseInt($("#thirdInput").val());

result = triangleTracker(sideOne, secondSide, lastSide)*/








/*$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
        quote += 50;
      }
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }
    
  });
});*/

/*
// This is for the appointment booking form.
$(document).ready(function() {
  $("form#booking").submit(function(event){
    event.preventDefault();
    var number1 = $("#name").val();
    var number2 = $("#profession").val();
    var number2 = $("#time").val();
    var result = "you are booked"
  $("#output").text(result);
  });
});*/





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
//Back end code
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Front end code.

$(document).ready(function() {
  $("form#calculating").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    var operation = parseInt($("#calcType").val());

    if (operation === 1){
        var result = (add(number1, number2));
    } else if (operation === 2){
      var result = (multiply(number1, number2));
    } else if (operation === 3){
      var result = (divide(number1, number2));
    } else {
      var result = (subtract(number1, number2))
    }
  $("#output").text(result);
  });
});*/







//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Commenting the underneath out as it is a work from previous project "First Full day for Jquery" and here for reference.
/*$(document).ready(function(){
  $(".clickabl").click(function(){
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webPage").prepend("<li>why Hello!</li>");
    $('li').css('background-color', 'green');
    $("ul#user").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });
  
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webPage").prepend("<li>llo!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webPage").prepend("<li>lo!</li>");
  });
  });
}); */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// This was for debugging practice on how to use alert and debugger. After debugger we can run our commands step by step
/*$(document).ready(function() {
  $("#blanks form").submit(function() {
    alert("got to the begininng of the forms")
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      console.log(userInput);
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();      
    });

    $("#story").show();
    alert("got to the end too")
    event.preventDefault();
  });
});*/