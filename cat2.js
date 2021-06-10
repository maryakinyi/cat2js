(function() {
        function askQuestions() {
            var outPut = [];
            quizes.forEach((currentQuiz, questionNumber) => {
                    var answer = [];
                    for (letter in currentQuiz.answer) {
                        answer.push(`<label><input type='radio' name="question${questionNumber}"value="${letter}">
            ${letter}:${currentQuiz.answers[letter]}</label>`)
                    );
                }
            })
    }
    outPut.push(`<div class="questions">${currentQuiz.questions}</div>
               <div class="answers">${answers.join('')}</div>`);

};
quizContainer.innerHTML = outPut.join('');
}
);