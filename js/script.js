var questions, currentQuestion, correctCount, wrongCount, lastAnswer;

questions = [
    {
        question: "How does Santa Claus go back up the Chimney to continue his journey of delivering gifts?",
        answers: {
            a: 'He asks reindeers for help',
            b: 'He levitates',
            c: 'He calls fire-fighters',
            d: 'He jumps up through the chimney (trampoline he has always with him)'
        },
        correctAnswer : 'He asks reindeers for help'
    },
    {
        question: "What was Josephs job?",
        answers: {
            a: 'Carpenter',
            b: 'Dancer',
            c: 'Priest',
            d: 'Scholar'
        },
        correctAnswer : 'Carpenter'
    },
    {
        question: "What is the first recorded year of Christmas being celebrated?",
        answers: {
            a: '336',
            b: '125',
            c: '1',
            d: '1538'
        },
        correctAnswer : '336'
    },
    {
        question: "How many red nosed raindeers pull Santa’s sleigh?",
        answers: {
            a: '6',
            b: '8',
            c: '1',
            d: '2'
        },
        correctAnswer : '1'
    },
    {
        question: "What is Santa’s head elf called?",
        answers: {
            a: 'Bernard',
            b: 'Vinny',
            c: 'Lim',
            d: 'Ibrahim'
        },
        correctAnswer : 'Bernard'
    },
    {
        question: "In the TV series Simpsons, what species is Santas little helper?",
        answers: {
            a: 'Hamster',
            b: 'Dog',
            c: 'Frog',
            d: 'Camel'
        },
        correctAnswer : 'Dog'
    },
    {
        question: "What is the second line of “I’m dreaming of a white Christmas”?",
        answers: {
            a: 'As I walk through the valley of the shadow of death',
            b: 'She was more like a beauty queen from a movie scene',
            c: 'But the very next day you gave it away',
            d: 'Just like the ones I used to know'
        },
        correctAnswer : 'Just like the ones I used to know'
    },
    {
        question: "Eggnog, the popular Christmas breakfast drink is thought to have originated where?",
        answers: {
            a: 'Oppdal, Norway',
            b: 'Villatobas, Spain',
            c: 'Heppenheim, Germany',
            d: 'East-Anglia, England'
        },
        correctAnswer : 'East-Anglia, England'
    },
    {
        question: "What gives mulled wine its specific smell?",
        answers: {
            a: 'Dill',
            b: 'Clove',
            c: 'Rose',
            d: 'Onion'
        },
        correctAnswer : 'Clove'
    },
    {
        question: "Where did the idea of red Santa’s suit come from?",
        answers: {
            a: 'Bible',
            b: 'Old paintings',
            c: 'Christmas carol’s lyrics',
            d: 'Coca-Cola’s ads'
        },
        correctAnswer : 'Coca-Cola’s ads'
    },
    {
        question: "Where did the idea of red Santa’s suit come from?",
        answers: {
            a: 'Bible',
            b: 'Old paintings',
            c: 'Christmas carol’s lyrics',
            d: 'Coca-Cola’s ads'
        },
        correctAnswer : 'Coca-Cola’s ads'
    }
];

init();

/////////////////////////////////// INITIAL SETUP
function init() {
    currentQuestion = 0;
    correctCount = 0;
    wrongCount = 0;
    lastAnswer = [];

    document.querySelector('#question').textContent=questions[0].question;
    document.querySelector('#answer-1').textContent=questions[0].answers.a;
    document.querySelector('#answer-2').textContent=questions[0].answers.b;
    document.querySelector('#answer-3').textContent=questions[0].answers.c;
    document.querySelector('#answer-4').textContent=questions[0].answers.d;
    document.querySelector('#correct-count').textContent= correctCount;
    document.querySelector('#wrong-count').textContent= wrongCount;
    document.querySelector('#last-question').style.height='0';
    document.querySelector('#last-question').style.opacity='0';
    document.querySelector('#question').style.opacity=1;
    document.querySelector('#answers').style.opacity=1;
}

/////////////////////////////////// NEXT QUESTION
function nextquestion() {
    currentQuestion += 1;

    document.querySelector('#popup').classList.remove("correct");
    document.querySelector('#popup').classList.remove("wrong");
    document.querySelector('#popup').classList.remove("popup-on");
        
    document.querySelector('#question').textContent=questions[currentQuestion].question;
    document.querySelector('#answer-1').textContent=questions[currentQuestion].answers.a;
    document.querySelector('#answer-2').textContent=questions[currentQuestion].answers.b;
    document.querySelector('#answer-3').textContent=questions[currentQuestion].answers.c;
    document.querySelector('#answer-4').textContent=questions[currentQuestion].answers.d;
}

/////////////////////////////////// CLICK ON ANSWER
    document.querySelectorAll('.answer').forEach(item => {
        item.addEventListener('click', event => {
            lastAnswer.push(item.textContent);

            /////////////////////////////////// GOOD ANSWER
          if (currentQuestion<=9 && item.textContent == questions[currentQuestion].correctAnswer){
            
            correctCount+=1;
            document.querySelector('#correct-count').textContent= correctCount;
           
            document.querySelector('#popup').textContent='CORRECT ANSWER!';
            document.querySelector('#popup').classList.add("correct");
            document.querySelector('#popup').classList.add("popup-on");
            
            /////////////////////////////////// WRONG ANSWER
          } else if (currentQuestion<=9 && item.textContent != questions[currentQuestion].correctAnswer) {
         
            wrongCount+=1;
            document.querySelector('#wrong-count').textContent= wrongCount;

            document.querySelector('#popup').textContent='WRONG ANSWER!';
            document.querySelector('#popup').classList.add("wrong");
            document.querySelector('#popup').classList.add("popup-on");

          } 

          /////////////////////////////////// GO TO NEXT QUESTION
          setTimeout(function() {
            nextquestion();
          }, 1000);

          /////////////////////////////////// VERY LAST QUESTION
          if(currentQuestion>=9) {
            document.querySelector('#question').style.opacity=0.5;
            document.querySelector('#answers').style.opacity=0.5;
          }

          /////////////////////////////////// PREVIOUS QUESTION BOX UPDATE
          setTimeout(function() {
            document.querySelector('#last-question').style.height='100%';
            document.querySelector('#last-question').style.opacity='1';
          document.querySelector('#last-question').textContent = questions[currentQuestion-1].question;
          document.querySelector('#your-answer').textContent = lastAnswer[currentQuestion-1];
          document.querySelector('#correct-answer').textContent = questions[currentQuestion-1].correctAnswer;
          }, 1000);

        })
      })


document.querySelector('#btn-replay').addEventListener('click', init);

    




