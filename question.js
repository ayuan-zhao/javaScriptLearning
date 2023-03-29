

const questions = [
    {
        prompt: "What is the sweetest thing your dog has ever done for you?\n(a) Licked your face when you were sad\n(b) Brought you their favorite toy\n(c) Snuggled up with you on a cold night",
        answer: "a " // an array of possible correct answers
    },
    {
        prompt: "What is the sweetest thing your dog has ever done for you?\n(a) Licked your face when you were sad\n(b) Brought you their favorite toy\n(c) Snuggled up with you on a cold night",
        answer: "c"
    }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let input = prompt(questions[i].prompt);
    if (questions[i].answer.includes(input)) {
        score++;
        alert("You are absolutely right");
    } else {
        alert("Oopsie, that's not quite right!");
    }
}

document.write("Your score is: " + score);