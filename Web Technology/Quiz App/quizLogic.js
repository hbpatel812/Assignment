
  var currentQuestion = 0;
  var score = 0;
  var container = $('#quizContainer');
  var questionElement = $('#Question');
  var totalQuestions = questions.length;
  var nextButton = $('#nextButton');
  var result = $('result');
  var questionIndex = 0;
  
     $(document).ready(function()
     { 
      $('#resultBox').hide();
      $('#quizContainer').hide();
    });

    function start(){
      loadQuestion(currentQuestion);
    }

    radioHandler = (e)=>{
      if($(e).prop("checked")){
        $("#nextButton").removeAttr('disabled');
      }
    }
    
    function loadQuestion(questionIndex) { 
      if(questionIndex != questions.length)
      {
        $('#quizContainer').show();
        $('#resultBox').hide();
        $('#start').hide();
      }
       var q = questions[questionIndex];
       $('#Question').text((questionIndex + 1) + '. ' + q.question);
       $('#opt1').text(q.option1);
       $('#opt2').text(q.option2);
       $('#opt3').text(q.option3);
       $('#opt4').text(q.option4);
    }
    function loadNextQuestion(){
      if(questionIndex != questions.length)
      {
        $('#quizContainer').show();
        $('#resultBox').hide();
        $('#start').hide();
      }
      var selectedOption = $('input[name="option"]:checked');
      var answer= selectedOption.val();
      //$('input[name="option"]:checked')=false;
      $('input:radio[name="option"]:checked').prop('checked', false);

      if(questions[currentQuestion].answer == answer)
      {
         score++;
      }
      currentQuestion ++;
      if(currentQuestion == questions.length-1)
      {
        $('#nextButton').text('Finish');
      }
      if(currentQuestion == questions.length)
      {
        $('#quizContainer').hide();
        $('#resultBox').show();
        $('#result').text('your score is ' + score);
        //$('#reStart').show();
      }
      loadQuestion(currentQuestion);
    }
 //   loadQuestion(currentQuestion);

  // });
